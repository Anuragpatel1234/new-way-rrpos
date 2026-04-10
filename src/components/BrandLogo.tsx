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

export function BrandLogo({
  className,
  tone = "onDark",
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "relative block h-12 w-[min(100%,250px)] shrink-0 md:h-14 md:w-[min(100%,300px)]",
        className
      )}
    >
      <Image
        src={LOGO_SRC}
        alt="NewWay Traders"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        priority={priority}
        quality={100}
        unoptimized
        className="h-full w-full object-contain object-left transition-[filter] duration-500"
        style={{
          filter:
            tone === "onDark"
              ? "brightness(0) saturate(100%) invert(1)"
              : "brightness(0) saturate(100%) invert(8%) sepia(97%) saturate(1932%) hue-rotate(196deg) brightness(93%) contrast(96%)",
        }}
        sizes="(max-width: 1024px) 220px, 260px"
      />
    </span>
  );
}
