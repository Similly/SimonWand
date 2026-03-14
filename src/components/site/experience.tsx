import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function Experience() {
  return (
    <section className="border-b border-zinc-900 py-20 sm:py-24" aria-label="Professional experience">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Professional Experience"
          description="Years of building robust software products with modern engineering practices."
          centered
        />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {portfolioData.experiences.map((experience) => (
            <article
              key={`${experience.role}-${experience.company}`}
              className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-5 transition-colors hover:border-zinc-700"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="text-base font-medium text-zinc-100">{experience.role}</h3>
                  <p className="mt-1 text-sm text-zinc-400">{experience.company}</p>
                </div>
                <div className="text-right text-xs text-zinc-500">
                  <p>{experience.period}</p>
                  <p className="mt-1">{experience.location}</p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-300">{experience.summary}</p>

              <ul className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md border border-zinc-700 bg-zinc-900/60 px-2.5 py-1 text-xs text-zinc-300"
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
