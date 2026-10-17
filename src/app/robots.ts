import type { MetadataRoute } from "next";
import { firm } from "@/config/firm";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = firm.siteUrl.replace(/\/$/, "");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}