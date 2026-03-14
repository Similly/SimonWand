import type { Metadata } from "next";
import { getPortfolioContent } from "@/data/portfolio";
import { defaultLocale, isLocale, Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const content = getPortfolioContent(currentLocale);

  return {
    metadataBase: new URL(content.seo.siteUrl),
    title: content.seo.title,
    description: content.seo.description,
    applicationName: content.person.name,
    openGraph: {
      title: content.seo.title,
      description: content.seo.description,
      url: `${content.seo.siteUrl}/${currentLocale}`,
      siteName: content.person.name,
      type: "website",
      locale: currentLocale === "de" ? "de_DE" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: content.seo.title,
      description: content.seo.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${content.seo.siteUrl}/${currentLocale}`,
      languages: {
        de: `${content.seo.siteUrl}/de`,
        en: `${content.seo.siteUrl}/en`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  return children;
}
