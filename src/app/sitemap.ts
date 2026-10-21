
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cynergyattorneys.com";

  const routes = [
    "",
    "/about",
    "/practice-areas",
    "/team",
    "/insights",
    "/contact",
    "/book-consultation",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
