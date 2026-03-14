import Link from "next/link";
import { Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
  label: string;
  germanLabel: string;
  englishLabel: string;
};

export function LanguageSwitcher({
  locale,
  label,
  germanLabel,
  englishLabel,
}: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-1" aria-label={label} role="group">
      <Link
        href="/de"
        aria-label={germanLabel}
        className={`inline-flex size-9 items-center justify-center rounded-md border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
          locale === "de"
            ? "border-[var(--text-primary)] bg-[var(--surface-2)] text-[var(--text-primary)]"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
        }`}
      >
        🇩🇪
      </Link>
      <Link
        href="/en"
        aria-label={englishLabel}
        className={`inline-flex size-9 items-center justify-center rounded-md border text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)] ${
          locale === "en"
            ? "border-[var(--text-primary)] bg-[var(--surface-2)] text-[var(--text-primary)]"
            : "border-[var(--border)] bg-[var(--surface)] text-[var(--text-muted)] hover:bg-[var(--surface-2)]"
        }`}
      >
        🇬🇧
      </Link>
    </div>
  );
}
