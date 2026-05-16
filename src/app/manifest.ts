import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "RR POS",
    short_name: "RR POS",
    description: "Fast Billing. Smart Control. Real Growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#04152B",
    theme_color: "#04152B",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
