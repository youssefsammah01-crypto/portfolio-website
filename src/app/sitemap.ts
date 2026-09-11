import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/profile";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${siteUrl}/${locale}`,
    lastModified,
    changeFrequency: "monthly",
    priority: locale === "en" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        locales.map((other) => [other, `${siteUrl}/${other}`]),
      ),
    },
  }));
}
