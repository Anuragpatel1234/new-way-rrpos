"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

// Product PNGs from /public/products plus local lifestyle JPGs in /public/business-flavor/
// (customers & checkout contexts — served from the repo to avoid remote image loading).
// Each entry maps to a tile in the 5-column grid.
// null = the center headline slot
// One image keeps alt "Card payment tap" + id card-payment-tab (anchor for deep links / tests).

type GridImage = {
  type: "image";
  src: string;
  alt: string;
};
type GridNull = null;

type GridItem = GridImage | GridNull;

/** Scenic / aisle photos: full-bleed cover. Product PNGs & POS UI screenshot: contain. */
function useCoverObjectFit(src: string) {
  if (src.includes("/products/")) return false;
  if (src.includes("pos-software-in-use")) return false;
  if (src.startsWith("/business-flavor/")) return true;
  return src.includes("images.unsplash.com") || src.includes("images.pexels.com");
}

// 3 rows of 5 = 15 items total, center (item #7 index 7) = null = headline
const GRID_ITEMS: GridItem[] = [
  { type: "image", src: "/products/touch_1902.png", alt: "All-in-one touchscreen POS at counter" },
  {
    type: "image",
    src: "/business-flavor/retail-shoppers-at-checkout.jpg",
    alt: "Customers shopping at a retail checkout",
  },
  { type: "image", src: "/products/scanner_8180plus.png", alt: "Handheld barcode scanner at checkout" },
  { type: "image", src: "/products/printer_GP1324T.png", alt: "Thermal receipt printer at counter" },
  { type: "image", src: "/products/cash_2307.png", alt: "Cash drawer at POS counter" },
  { type: "image", src: "/products/touch_2303.png", alt: "Dual-display POS terminal on counter" },
  { type: "image", src: "/products/handheld_Q3.png", alt: "Mobile handheld POS for line busting" },
  null,
  { type: "image", src: "/products/touch_TR06.png", alt: "POS terminal with customer-facing display" },
  {
    type: "image",
    src: "/business-flavor/supermarket-checkout-busy.jpg",
    alt: "Busy supermarket checkout with shoppers",
  },
  { type: "image", src: "/products/scale_RTC1.png", alt: "Retail scale integrated with checkout" },
  {
    type: "image",
    src: "/business-flavor/pos-software-in-use.jpg",
    alt: "RR POS billing software in use at the counter",
  },
  { type: "image", src: "/products/touch_TC06.png", alt: "Card payment tap" },
  { type: "image", src: "/products/scanner_4800.png", alt: "Hands-free barcode scanner at counter" },
  { type: "image", src: "/products/touch_2406.png", alt: "Compact countertop POS system" },
];

const CAROUSEL_INTERVAL_MS = 3200;

// Five distinct parallax speeds — one per column (desktop)
const COL_SPEEDS = [30, -50, 20, -35, 60];

function FlavorHeadline() {
  return (
    <h2
      className="font-serif text-center px-2"
      style={{
        color: "#111",
        fontSize: "clamp(1.35rem, 2.2vw, 1.75rem)",
        lineHeight: 1.25,
        fontWeight: 600,
        maxWidth: "280px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      Whatever your <em style={{ fontStyle: "italic" }}>flavor</em> of business, build and grow on your terms.
    </h2>
  );
}

function ImageTileBox({
  item,
  id,
  sizes,
}: {
  item: Extract<GridItem, { type: "image" }>;
  id?: string;
  sizes: string;
}) {
  const cover = useCoverObjectFit(item.src);
  return (
    <div
      id={id}
      className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-gray-100 mx-auto"
      style={{ maxWidth: "clamp(84px, 11vw, 140px)" }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        className={cn(
          "transition-transform duration-700 ease-out group-hover:scale-105",
          cover ? "object-cover" : "object-contain p-2"
        )}
      />
    </div>
  );
}

function CarouselImageTile({
  item,
  id,
}: {
  item: Extract<GridItem, { type: "image" }>;
  id?: string;
}) {
  const cover = useCoverObjectFit(item.src);
  return (
    <div
      id={id}
      className="relative aspect-square w-full overflow-hidden rounded-[16px] bg-gray-100"
      style={{ width: "min(72vw, 240px)", maxWidth: 240 }}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 72vw, 240px"
        className={cn(cover ? "object-cover" : "object-contain p-3")}
        priority={item.alt === "Card payment tap"}
      />
    </div>
  );
}

function MobileFlavorCarousel({
  paymentTabId,
}: {
  paymentTabId: boolean;
}) {
  const slides = GRID_ITEMS.map((item, index) =>
    item === null ? null : { item, index }
  ).filter((x): x is { item: GridImage; index: number } => x !== null);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);
  activeRef.current = active;

  /** Scroll the horizontal track only — `scrollIntoView` also scrolls the window and yanks the page back from the footer. */
  const scrollToIndex = useCallback((i: number) => {
    const container = scrollContainerRef.current;
    const slide = slideRefs.current[i];
    if (!container || !slide) return;
    const maxLeft = Math.max(0, container.scrollWidth - container.clientWidth);
    const target = Math.min(
      maxLeft,
      Math.max(0, slide.offsetLeft - (container.clientWidth - slide.offsetWidth) / 2)
    );
    container.scrollTo({ left: target, behavior: "smooth" });
    setActive(i);
  }, []);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      const next = (activeRef.current + 1) % slides.length;
      scrollToIndex(next);
    }, CAROUSEL_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length, scrollToIndex]);

  return (
    <div className="w-full">
      <div
        ref={scrollContainerRef}
        className="flex w-full gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pl-4 pr-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="POS hardware and checkout examples"
      >
        {slides.map(({ item, index }, slideIndex) => (
          <div
            key={`m-${index}`}
            ref={(el) => {
              slideRefs.current[slideIndex] = el;
            }}
            className="flex w-[min(72vw,240px)] shrink-0 snap-center flex-col items-center justify-center first:pl-0 last:pr-0"
          >
            <CarouselImageTile
              item={item}
              id={
                item.alt === "Card payment tap" && paymentTabId
                  ? "card-payment-tab"
                  : undefined
              }
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-1.5" aria-hidden>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === active ? "w-5 bg-gray-800" : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function BusinessFlavor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isSmUp = useMediaQuery("(min-width: 640px)");

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const t0 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[0]]);
  const t1 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[1]]);
  const t2 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[2]]);
  const t3 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[3]]);
  const t4 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[4]]);
  const colTransforms: MotionValue<number>[] = [t0, t1, t2, t3, t4];

  const desktopPaymentId = isSmUp === true;
  const mobilePaymentId = isSmUp === false;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#ffffff", paddingTop: "3.5rem", paddingBottom: "4.5rem" }}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* —— Mobile: headline + horizontal auto carousel —— */}
        <div className="sm:hidden">
          <div className="mb-8">
            <FlavorHeadline />
          </div>
          <MobileFlavorCarousel paymentTabId={mobilePaymentId} />
        </div>

        {/* —— Desktop / tablet: 5-column parallax grid —— */}
        <div
          className="hidden sm:grid items-center justify-items-center grid-cols-3 lg:grid-cols-5"
          style={{
            gap: "clamp(10px, 1.75vw, 20px)",
            rowGap: "clamp(16px, 3vw, 40px)",
          }}
        >
          {GRID_ITEMS.map((item, index) => {
            const col = index % 5;
            const yMotion = colTransforms[col];

            if (item === null) {
              return (
                <motion.div
                  key="headline"
                  style={{ y: yMotion }}
                  className="flex items-center justify-center col-span-1 lg:col-span-1"
                >
                  <FlavorHeadline />
                </motion.div>
              );
            }

            return (
              <motion.div
                key={index}
                style={{ y: yMotion }}
                className="group flex w-full items-center justify-center"
              >
                <ImageTileBox
                  item={item}
                  id={
                    item.alt === "Card payment tap" && desktopPaymentId
                      ? "card-payment-tab"
                      : undefined
                  }
                  sizes="(max-width: 640px) 28vw, (max-width: 1024px) 15vw, 140px"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
