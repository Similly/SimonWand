import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, getPreferredLocale, isLocale } from "@/lib/i18n";

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.includes("/api/") ||
    PUBLIC_FILE.test(pathname) ||
    pathname === "/favicon.ico"
  ) {
    return NextResponse.next();
  }

  const pathnameLocale = pathname.split("/")[1];
  if (isLocale(pathnameLocale)) {
    const response = NextResponse.next();
    response.cookies.set("NEXT_LOCALE", pathnameLocale, {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
    return response;
  }

  if (pathname === "/") {
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    const locale = isLocale(cookieLocale || "")
      ? cookieLocale
      : getPreferredLocale(request.headers.get("accept-language"));

    const url = request.nextUrl.clone();
    url.pathname = `/${locale}`;
    return NextResponse.redirect(url);
  }

  const fallback = request.nextUrl.clone();
  fallback.pathname = `/${defaultLocale}`;
  return NextResponse.redirect(fallback);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
