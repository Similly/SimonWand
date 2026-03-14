import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email().max(200),
  subject: z.string().min(2).max(150),
  message: z.string().min(10).max(5000),
  locale: z.enum(["de", "en"]).optional(),
  company: z.string().max(0).optional(),
});

const WINDOW_MS = 5 * 60 * 1000;
const MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    const ip = forwardedFor.split(",")[0]?.trim();
    if (ip) {
      return `ip:${ip}`;
    }
  }

  const realIp = request.headers.get("x-real-ip");
  if (realIp) {
    return `ip:${realIp.trim()}`;
  }

  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) {
    return `ip:${cfIp.trim()}`;
  }

  return null;
}

function isRateLimited(key: string) {
  const now = Date.now();
  const recentRequests = (requestLog.get(key) || []).filter((timestamp) => now - timestamp < WINDOW_MS);

  if (recentRequests.length >= MAX_REQUESTS) {
    requestLog.set(key, recentRequests);
    return true;
  }

  recentRequests.push(now);
  requestLog.set(key, recentRequests);
  return false;
}

export async function POST(request: Request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json({ ok: false, code: "VALIDATION" }, { status: 400 });
    }

    if (parsed.data.company) {
      return NextResponse.json({ ok: true, code: "OK" }, { status: 200 });
    }

    // In local development, IP headers are often missing and strict
    // in-memory limits produce false positives. Keep limiting for production.
    if (process.env.NODE_ENV === "production") {
      const clientKey = getClientKey(request);
      if (clientKey && isRateLimited(clientKey)) {
        return NextResponse.json(
          { ok: false, code: "RATE_LIMIT" },
          { status: 429, headers: { "Retry-After": String(Math.ceil(WINDOW_MS / 1000)) } },
        );
      }
    }

    const apiKey = (process.env.RESEND_API_KEY || "").trim();
    const fromEmail = (process.env.CONTACT_FROM_EMAIL || "").trim();
    const toEmail = (process.env.CONTACT_TO_EMAIL || "").trim();
    const missing: string[] = [];
    if (!apiKey) missing.push("RESEND_API_KEY");
    if (!fromEmail) missing.push("CONTACT_FROM_EMAIL");
    if (!toEmail) missing.push("CONTACT_TO_EMAIL");

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          code: "SERVER_CONFIG",
          ...(process.env.NODE_ENV !== "production" ? { missing } : {}),
        },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);
    const localeLabel = parsed.data.locale === "de" ? "Deutsch" : "English";

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: parsed.data.email,
      subject: `[Portfolio] ${parsed.data.subject}`,
      text: `Name: ${parsed.data.name}
Email: ${parsed.data.email}
Locale: ${localeLabel}

Message:
${parsed.data.message}`,
    });

    return NextResponse.json({ ok: true, code: "OK" }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, code: "UNKNOWN" }, { status: 500 });
  }
}
