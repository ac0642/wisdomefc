import type { MetadataRoute } from "next";
import { siteContent } from "@/content/siteContent";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteContent.brand.url,
      lastModified: "2026-07-03",
      changeFrequency: "monthly",
      priority: 1
    }
  ];
}
