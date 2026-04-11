import { HARDWARE_PRODUCTS, POS_FEATURES } from "@/lib/constants";

/** Hero background — single source for preload + `<video>`. */
export const HERO_VIDEO_SRC = "/POS_system_components_202604101116 (1).mp4";

/** Shared hover video in hardware carousel (one file referenced by all cards). */
export const HARDWARE_SHOWCASE_VIDEO_SRC =
  "/mixkit-pharmacy-worker-accepts-payment-at-checkout-5407-hd-ready.mp4";

/** Default-open industry card (`IndustryAccordion`) — preload so first paint matches interaction. */
export const INDUSTRY_DEFAULT_ACTIVE_IMAGE =
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&q=85&fit=crop";

const FINAL_CTA_BACKGROUNDS = [
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
] as const;

export type PreloadHint = {
  href: string;
  as: "video" | "image";
  type?: string;
  crossOrigin?: "anonymous";
};

/**
 * Resource hints for the home page: hero + POS + hardware + key remote hero imagery.
 * Keeps first paint and first scroll fast without blocking on every asset on the site.
 */
export function getHomePreloadHints(): PreloadHint[] {
  const localImages = new Set<string>([
    "/IMG-20260409-WA0003.jpg.jpeg",
    "/business-flavor/retail-shoppers-at-checkout.jpg",
    "/business-flavor/supermarket-checkout-busy.jpg",
    "/business-flavor/pos-software-in-use.jpg",
    ...POS_FEATURES.map((f) => f.image),
    ...HARDWARE_PRODUCTS.map((p) => p.image),
  ]);

  const videos: PreloadHint[] = [
    {
      href: encodeURI(HERO_VIDEO_SRC),
      as: "video",
      type: "video/mp4",
    },
    {
      href: HARDWARE_SHOWCASE_VIDEO_SRC,
      as: "video",
      type: "video/mp4",
    },
  ];

  const images: PreloadHint[] = [
    ...[...localImages].map((href) => ({ href, as: "image" as const })),
    {
      href: INDUSTRY_DEFAULT_ACTIVE_IMAGE,
      as: "image",
      crossOrigin: "anonymous",
    },
    ...FINAL_CTA_BACKGROUNDS.map((href) => ({
      href,
      as: "image" as const,
      crossOrigin: "anonymous" as const,
    })),
  ];

  const merged = [...videos, ...images];
  const seen = new Set<string>();
  return merged.filter((h) => {
    const key = `${h.as}:${h.href}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
