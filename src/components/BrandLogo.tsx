"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const LOGO_SRC = "/NWT_Logo_2.png";
const LOGO_WIDTH = 1683;
const LOGO_HEIGHT = 589;

export type BrandLogoTone = "onDark" | "onLight";

type BrandLogoProps = {
  className?: string;
  /** `onDark`: white mark on photos/video/dark bars. `onLight`: original PNG on white/light UI. */
  tone?: BrandLogoTone;
  priority?: boolean;
};

const FILTER_ON_DARK = "brightness(0) saturate(100%) invert(1)";
const FILTER_ON_LIGHT =
  "brightness(0) saturate(100%) invert(8%) sepia(97%) saturate(1932%) hue-rotate(196deg) brightness(93%) contrast(96%)";

export function BrandLogo({
  className,
  tone = "onDark",
  priority = false,
}: BrandLogoProps) {
  const imageProps = {
    src: LOGO_SRC,
    alt: "",
    width: LOGO_WIDTH,
    height: LOGO_HEIGHT,
    priority,
    quality: 100 as const,
    unoptimized: true,
    sizes: "(max-width: 1024px) 220px, 260px",
    "aria-hidden": true as const,
  };

  return (
    <span
      role="img"
      aria-label="NewWay Traders"
      className={cn(
        "relative block h-12 w-[min(100%,250px)] shrink-0 md:h-14 md:w-[min(100%,300px)]",
        className
      )}
    >
      {/* Two fixed-filter layers — opacity only (never animate filter; avoids green flash) */}
      <Image
        {...imageProps}
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-200",
          tone === "onDark" ? "opacity-100" : "opacity-0"
        )}
        style={{ filter: FILTER_ON_DARK }}
      />
      <Image
        {...imageProps}
        className={cn(
          "pointer-events-none h-full w-full object-contain object-left transition-opacity duration-200",
          tone === "onLight" ? "opacity-100" : "opacity-0"
        )}
        style={{ filter: FILTER_ON_LIGHT }}
      />
    </span>
  );
}
