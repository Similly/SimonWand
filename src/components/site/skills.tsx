import { PortfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type SkillsProps = {
  content: PortfolioContent;
};

export function Skills({ content }: SkillsProps) {
  return (
    <section id="skills" className="border-b border-[var(--border)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={content.skillsSection.eyebrow}
          title={content.skillsSection.title}
          description={content.skillsSection.description}
          centered
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-colors hover:border-[var(--border-strong)]"
            >
              <h3 className="text-sm font-medium text-[var(--text-primary)]">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {skill}
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
