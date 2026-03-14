import { portfolioData } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

export function About() {
  return (
    <section id="about" className="border-b border-zinc-900 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="About" title={portfolioData.about.heading} />
        <p className="mt-8 max-w-4xl text-pretty text-base leading-8 text-zinc-300 sm:text-lg">
          {portfolioData.about.body}
        </p>
      </div>
    </section>
  );
}
