import type { MetadataRoute } from "next";

const baseUrl = "https://www.rongxingtrading.com";

const routes = [
  "/",
  "/company",
  "/capabilities",
  "/markets",
  "/products",
  "/news",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
