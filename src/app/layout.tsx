import type { Metadata } from "next";
import "./globals.css";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(portfolioData.seo.siteUrl),
  title: portfolioData.seo.title,
  description: portfolioData.seo.description,
  applicationName: portfolioData.person.name,
  openGraph: {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    url: portfolioData.seo.siteUrl,
    siteName: portfolioData.person.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: portfolioData.seo.siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] font-sans text-zinc-100 antialiased">{children}</body>
    </html>
  );
}
