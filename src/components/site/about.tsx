import { PortfolioContent } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/section-heading";

type AboutProps = {
  content: PortfolioContent;
};

export function About({ content }: AboutProps) {
  return (
    <section id="about" className="border-b border-[var(--border)] py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={content.about.eyebrow} title={content.about.heading} />
        <p className="mt-8 max-w-4xl text-pretty text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
          {content.about.body}
        </p>
      </div>
    </section>
  );
}
