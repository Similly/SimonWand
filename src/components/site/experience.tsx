import { PortfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type ExperienceProps = {
  content: PortfolioContent;
};

export function Experience({ content }: ExperienceProps) {
  return (
    <section className="border-b border-[var(--border)] py-20 sm:py-24" aria-label={content.experienceSection.ariaLabel}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={content.experienceSection.eyebrow}
          title={content.experienceSection.title}
          description={content.experienceSection.description}
          centered
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {content.experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium text-[var(--text-primary)]">{experience.role}</h3>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">{experience.company}</p>
                </div>
                <div className="text-right text-xs text-[var(--text-muted)]">
                  <p>{experience.period}</p>
                  <p className="mt-1">{experience.location}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">{experience.summary}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
