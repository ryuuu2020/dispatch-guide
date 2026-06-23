import type { MetadataRoute } from "next";
import { characters } from "@/lib/data";

export const dynamic = "force-static";

const BASE_URL = "https://dispatch-guide.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/characters`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/stats`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/episodes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/endings`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/builds`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  ];

  const characterPages: MetadataRoute.Sitemap = characters.map((c) => ({
    url: `${BASE_URL}/characters/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  return [...staticPages, ...characterPages];
}
