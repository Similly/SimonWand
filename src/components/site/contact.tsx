import { PortfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type ContactProps = {
  content: PortfolioContent;
};

export function Contact({ content }: ContactProps) {
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
            action="#"
            method="post"
            className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5"
            aria-label={content.contactSection.formAria}
          >
            <h3 className="text-sm font-medium text-[var(--text-primary)]">{content.contactSection.formTitle}</h3>
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
                className="w-full rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)]"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-[var(--button-primary-bg)] px-4 py-2.5 text-sm font-medium text-[var(--button-primary-text)] transition-colors hover:bg-[var(--button-primary-bg-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
            >
              {content.contactSection.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
