import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

function url(path: string) {
  const base = SITE.url.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: url("/"), lastModified, changeFrequency: "weekly", priority: 1 },
    { url: url("/about"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/contact"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/product"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/hardware"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/solutions"), lastModified, changeFrequency: "weekly", priority: 0.85 },
    { url: url("/service"), lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: url("/features"), lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: url("/pricing"), lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}

