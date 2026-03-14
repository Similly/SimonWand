import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Experience } from "@/components/site/experience";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { Navbar } from "@/components/site/navbar";
import { Projects } from "@/components/site/projects";
import { Skills } from "@/components/site/skills";
import { getPortfolioContent } from "@/data/portfolio";
import { isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getPortfolioContent(locale);
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.person.name,
    jobTitle: content.person.role,
    description: content.hero.summary,
    url: content.seo.siteUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <a
        href={`/${locale}#home`}
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--button-primary-bg)] focus:px-3 focus:py-2 focus:text-[var(--button-primary-text)]"
      >
        {content.accessibility.skipToContent}
      </a>
      <Navbar locale={locale} content={content} />
      <main lang={locale}>
        <Hero locale={locale} content={content} />
        <About content={content} />
        <Skills content={content} />
        <Experience content={content} />
        <Projects content={content} />
        <Contact content={content} locale={locale} />
      </main>
      <Footer content={content} />
    </>
  );
}
