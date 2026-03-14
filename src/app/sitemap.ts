import type { MetadataRoute } from "next";
import { getPortfolioContent } from "@/data/portfolio";

const siteUrl = getPortfolioContent("en").seo.siteUrl;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/de`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
