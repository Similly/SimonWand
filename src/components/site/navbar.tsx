"use client";

import Link from "next/link";
import { useState } from "react";
import { PortfolioContent } from "@/data/portfolio";
import { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";

type NavbarProps = {
  locale: Locale;
  content: PortfolioContent;
};

export function Navbar({ locale, content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--header-bg)]/95 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href={`/${locale}#home`}
          className="text-sm font-semibold tracking-wide text-[var(--text-primary)] transition-colors hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
        >
          {content.person.name}
        </Link>

        <nav aria-label={content.accessibility.navPrimary} className="hidden items-center gap-2 md:flex">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              className="rounded-md px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher
            locale={locale}
            label={content.languageSwitcher.label}
            germanLabel={content.languageSwitcher.german}
            englishLabel={content.languageSwitcher.english}
          />
          <ThemeToggle
            toLightLabel={content.themeSwitcher.toLight}
            toDarkLabel={content.themeSwitcher.toDark}
          />
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-[var(--border)] p-2 text-[var(--text-primary)] transition-colors hover:border-[var(--border-strong)] hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] md:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? content.accessibility.closeMenu : content.accessibility.openMenu}
        >
          <span aria-hidden>{isOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label={content.accessibility.navMobile}
        className={`${isOpen ? "block" : "hidden"} border-t border-[var(--border)] md:hidden`}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={`/${locale}${item.href}`}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-sm text-[var(--text-secondary)] transition-colors hover:bg-[var(--surface-2)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {item.label}
            </Link>
          ))}

          <div className="mt-2 flex items-center justify-between border-t border-[var(--border)] pt-3">
            <LanguageSwitcher
              locale={locale}
              label={content.languageSwitcher.label}
              germanLabel={content.languageSwitcher.german}
              englishLabel={content.languageSwitcher.english}
            />
            <ThemeToggle
              toLightLabel={content.themeSwitcher.toLight}
              toDarkLabel={content.themeSwitcher.toDark}
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
