import type { MetadataRoute } from "next";
import { getPortfolioContent } from "@/data/portfolio";

const siteUrl = getPortfolioContent("en").seo.siteUrl;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
