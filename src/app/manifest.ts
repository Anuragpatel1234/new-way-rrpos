import type { MetadataRoute } from "next";

import { SITE } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0F172A",
    theme_color: "#0F172A",
    icons: [
      // Best-effort: reusing existing wide logo file. A dedicated square icon is recommended for best results.
      {
        src: "/NWT_Logo_2.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

