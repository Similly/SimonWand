"use client";

import { useState, useTransition } from "react";
import { PortfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";
import { Locale } from "@/lib/i18n";

type ContactProps = {
  content: PortfolioContent;
  locale: Locale;
};

type SubmitState = "idle" | "success" | "error";

export function Contact({ content, locale }: ContactProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorCode, setErrorCode] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  function getErrorMessage(code: string) {
    if (code === "VALIDATION") {
      return content.contactSection.validationMessage;
    }
    if (code === "RATE_LIMIT") {
      return content.contactSection.rateLimitMessage;
    }
    return content.contactSection.errorMessage;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      setSubmitState("idle");
      setErrorCode("");

      const payload = {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        subject: String(formData.get("subject") || ""),
        message: String(formData.get("message") || ""),
        company: String(formData.get("company") || ""),
        locale,
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const result = (await response.json()) as { ok: boolean; code?: string };
        if (response.ok && result.ok) {
          setSubmitState("success");
          form.reset();
          return;
        }

        setSubmitState("error");
        setErrorCode(result.code || "UNKNOWN");
      } catch {
        setSubmitState("error");
        setErrorCode("UNKNOWN");
      }
    });
  }

  return (
    <section id="contact" className="border-b border-[var(--border)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={content.contactSection.eyebrow}
          title={content.contactSection.title}
          description={content.contactSection.description}
          centered
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
          <div className="space-y-4">
            {content.contactDetails.map((detail) => (
              <article
                key={detail.label}
                className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 transition-colors hover:border-[var(--border-strong)]"
              >
                <p className="text-xs uppercase tracking-[0.12em] text-[var(--text-muted)]">{detail.label}</p>
                {detail.href ? (
                  <a
                    href={detail.href}
                    className="mt-2 inline-block text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <p className="mt-2 text-sm text-[var(--text-secondary)]">{detail.value}</p>
                )}
              </article>
            ))}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
            aria-label={content.contactSection.formAria}
          >
            <h3 className="text-sm font-medium text-[var(--text-primary)]">{content.contactSection.formTitle}</h3>
            <input
              type="text"
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="sr-only">
                  {content.contactSection.nameLabel}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={content.contactSection.namePlaceholder}
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  {content.contactSection.emailLabel}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={content.contactSection.emailPlaceholder}
                  required
                  maxLength={200}
                  className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
                />
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="subject" className="sr-only">
                {content.contactSection.subjectLabel}
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder={content.contactSection.subjectPlaceholder}
                required
                minLength={2}
                maxLength={150}
                className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              />
            </div>

            <div className="mt-3">
              <label htmlFor="message" className="sr-only">
                {content.contactSection.messageLabel}
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder={content.contactSection.messagePlaceholder}
                required
                minLength={10}
                maxLength={5000}
                className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[var(--button-primary-bg)] px-4 py-2.5 text-sm font-medium text-[var(--button-primary-text)] transition-colors hover:bg-[var(--button-primary-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {isPending ? content.contactSection.submitLoadingLabel : content.contactSection.submitLabel}
            </button>

            {submitState === "success" ? (
              <p className="mt-3 text-sm text-emerald-500">{content.contactSection.successMessage}</p>
            ) : null}
            {submitState === "error" ? (
              <p className="mt-3 text-sm text-red-500">{getErrorMessage(errorCode)}</p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
