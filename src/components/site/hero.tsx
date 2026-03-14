import Image from "next/image";
import Link from "next/link";
import { PortfolioContent } from "@/data/portfolio";
import { Locale } from "@/lib/i18n";

type HeroProps = {
  locale: Locale;
  content: PortfolioContent;
};

function SocialIcon({ label }: { label: string }) {
  const normalized = label.toLowerCase();

  if (normalized.includes("github")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.36 6.84 9.72.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.64.07-.63.07-.63 1 .07 1.52 1.05 1.52 1.05.88 1.56 2.32 1.11 2.89.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7.08a9.3 9.3 0 0 1 2.5.35c1.9-1.33 2.74-1.05 2.74-1.05.54 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.96-2.34 4.82-4.58 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.85 0 .27.18.59.69.49A10.2 10.2 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
      </svg>
    );
  }

  if (normalized.includes("linkedin")) {
    return (
      <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
        <path d="M6.94 8.5A1.94 1.94 0 1 1 6.94 4.62a1.94 1.94 0 0 1 0 3.88ZM5.3 19.25h3.27V9.83H5.3v9.42ZM13.77 9.83h-3.14v9.42h3.27v-4.66c0-1.23.23-2.43 1.74-2.43 1.49 0 1.51 1.4 1.51 2.51v4.58h3.27v-5.24c0-2.57-.54-4.54-3.45-4.54-1.4 0-2.33.78-2.71 1.53h-.04v-1.3Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.75">
      <path d="M3.75 7.5h16.5A1.75 1.75 0 0 1 22 9.25v8A1.75 1.75 0 0 1 20.25 19H3.75A1.75 1.75 0 0 1 2 17.25v-8A1.75 1.75 0 0 1 3.75 7.5Z" />
      <path d="m3 8 9 6 9-6" />
    </svg>
  );
}

export function Hero({ locale, content }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden border-b border-[var(--border)] py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 15% 20%, var(--hero-glow-1), transparent 30%), radial-gradient(circle at 80% 18%, var(--hero-glow-2), transparent 24%), linear-gradient(145deg, var(--hero-bg-start), var(--hero-bg-end))",
        }}
      />
      <div className="pointer-events-none absolute inset-0 opacity-20" aria-hidden>
        <div className="mx-auto grid h-full max-w-6xl grid-cols-6 border-x border-[var(--border)] md:grid-cols-12">
          {Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className="border-r border-[var(--border)]" />
          ))}
        </div>
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:gap-20">
        <div>
          <span className="inline-flex items-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">
            {content.person.availability}
          </span>
          <h1 className="mt-6 text-4xl font-medium tracking-tight text-[var(--text-primary)] sm:text-6xl">
            {content.hero.headingPrefix} <br />
            <span className="bg-gradient-to-r from-[var(--text-primary)] to-[var(--text-gradient-end)] bg-clip-text text-transparent">
              {content.person.name}
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
            {content.hero.tagline}
          </p>
          <p className="mt-3 max-w-xl text-pretty text-sm leading-7 text-[var(--text-muted)] sm:text-base">
            {content.hero.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={`/${locale}#contact`}
              className="inline-flex items-center justify-center rounded-md bg-[var(--button-primary-bg)] px-5 py-2.5 text-sm font-medium text-[var(--button-primary-text)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--button-primary-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {content.hero.ctaPrimary}
            </Link>
            <Link
              href={`/${locale}#projects`}
              className="inline-flex items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition-colors duration-200 hover:border-[var(--border-strong)] hover:bg-[var(--surface-2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {content.hero.ctaSecondary}
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {content.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex size-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
                aria-label={link.label}
              >
                <SocialIcon label={link.label} />
              </a>
            ))}
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-xs text-[var(--text-muted)]">{stat.label}</dt>
                <dd className="mt-1 text-2xl text-[var(--text-primary)]">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <div className="relative size-76 rounded-full border-4 border-[var(--border)] bg-gradient-to-br from-[var(--avatar-ring-start)] to-[var(--avatar-ring-end)] p-1 shadow-[0_25px_80px_rgba(0,0,0,0.25)] sm:size-88">
            <Image
              src={content.person.profileImage}
              alt={content.person.profileAlt}
              fill
              sizes="(max-width: 768px) 304px, 352px"
              className="rounded-full object-cover object-top"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
