import { PortfolioContent } from "@/data/portfolio";

type FooterProps = {
  content: PortfolioContent;
};

export function Footer({ content }: FooterProps) {
  return (
    <footer className="py-12">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center">
          <p className="text-sm text-[var(--text-primary)]">{content.person.name}</p>
          <p className="mt-2 text-sm text-[var(--text-secondary)]">{content.person.role}</p>
          <p className="mt-3 text-xs text-[var(--text-muted)]">
            © {new Date().getFullYear()} {content.person.name}. {content.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
