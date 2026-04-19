import type { MetadataRoute } from "next";
import { servicesData } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://grandclean.uz";
  const locales = ["ru", "uz"];
  const now = new Date();

  const staticPages = [
    "",
    "/services",
    "/about",
    "/pricing",
    "/reviews",
    "/contact",
  ];

  const staticEntries = locales.flatMap((lang) =>
    staticPages.map((page) => ({
      url: `${baseUrl}/${lang}${page}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: page === "" ? 1.0 : 0.8,
    })),
  );

  const serviceEntries = locales.flatMap((lang) =>
    servicesData.map((service) => ({
      url: `${baseUrl}/${lang}/services/${service.id}/`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  );

  return [...staticEntries, ...serviceEntries];
}
