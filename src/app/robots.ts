import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(SITE.url);
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("/sitemap.xml", baseUrl).toString(),
    host: baseUrl.toString(),
  };
}

