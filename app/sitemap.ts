import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://htharris.co.uk",
      lastModified: "2026-09-10",
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
