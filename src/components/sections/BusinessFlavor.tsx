"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/utils";

// Product PNGs from /public/products — one image per grid tile.
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

/** Product PNGs use contain so hardware stays fully visible in the tile. */
function useCoverObjectFit(src: string) {
  return !src.includes("/products/");
}

// 3 rows of 5 = 15 items total, center (item #7 index 7) = null = headline
const GRID_ITEMS: GridItem[] = [
  { type: "image", src: "/products/touch_1902.png", alt: "All-in-one touchscreen POS at counter" },
  { type: "image", src: "/products/touch_2402.png", alt: "Countertop touchscreen POS terminal" },
  { type: "image", src: "/products/scanner_8180plus.png", alt: "Handheld barcode scanner at checkout" },
  { type: "image", src: "/products/printer_GP1324T.png", alt: "Thermal receipt printer at counter" },
  { type: "image", src: "/products/cash_2307.png", alt: "Cash drawer at POS counter" },
  { type: "image", src: "/products/touch_2303.png", alt: "Dual-display POS terminal on counter" },
  { type: "image", src: "/products/handheld_Q3.png", alt: "Mobile handheld POS for line busting" },
  null,
  { type: "image", src: "/products/touch_TR06.png", alt: "POS terminal with customer-facing display" },
  { type: "image", src: "/products/touch_TE05.png", alt: "Enterprise touchscreen POS for high-volume checkout" },
  { type: "image", src: "/products/scale_RTC1.png", alt: "Retail scale integrated with checkout" },
  { type: "image", src: "/products/touch_D3mini.png", alt: "Compact POS with RR billing software on screen" },
  { type: "image", src: "/products/touch_TC06.png", alt: "Card payment tap" },
  { type: "image", src: "/products/scanner_4800.png", alt: "Hands-free barcode scanner at counter" },
  { type: "image", src: "/products/touch_2406.png", alt: "Compact countertop POS system" },
];

const CAROUSEL_INTERVAL_MS = 3200;
const CAROUSEL_RESUME_AFTER_MS = 8000;

// Five distinct parallax speeds — one per column (desktop)
const COL_SPEEDS = [30, -50, 20, -35, 60];

function FlavorHeadline({ variant = "desktop" }: { variant?: "mobile" | "desktop" }) {
  return (
    <h2
      className={cn(
        "font-serif text-center font-semibold text-[#111] mx-auto",
        variant === "mobile"
          ? "w-full max-w-[min(100%,24rem)] px-4 text-[clamp(1.75rem,7.5vw,2.5rem)] leading-[1.2] tracking-tight"
          : "max-w-[280px] px-2 text-[clamp(1.35rem,2.2vw,1.75rem)] leading-tight"
      )}
    >
      Whatever your <em className="italic">flavor</em> of business, build and grow on your terms.
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
      className="relative mx-auto aspect-[4/5] w-full max-w-[clamp(96px,13vw,168px)] overflow-hidden rounded-[16px] bg-gray-100 sm:max-w-[clamp(88px,11vw,148px)]"
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
      className="relative aspect-[4/5] w-[min(70vw,248px)] max-w-[248px] min-h-[min(32dvh,300px)] overflow-hidden rounded-[16px] bg-gray-100"
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(max-width: 640px) 70vw, 248px"
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

  const autoplayPausedRef = useRef(false);
  const programmaticScrollRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleAutoplayResume = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      autoplayPausedRef.current = false;
    }, CAROUSEL_RESUME_AFTER_MS);
  }, []);

  const pauseAutoplay = useCallback(() => {
    autoplayPausedRef.current = true;
    scheduleAutoplayResume();
  }, [scheduleAutoplayResume]);

  /** Scroll the horizontal track only — `scrollIntoView` also scrolls the window and yanks the page back from the footer. */
  const scrollToIndex = useCallback((i: number, fromUser = false) => {
    const container = scrollContainerRef.current;
    const slide = slideRefs.current[i];
    if (!container || !slide) return;
    if (fromUser) pauseAutoplay();
    const maxLeft = Math.max(0, container.scrollWidth - container.clientWidth);
    const target = Math.min(
      maxLeft,
      Math.max(0, slide.offsetLeft - (container.clientWidth - slide.offsetWidth) / 2)
    );
    programmaticScrollRef.current = true;
    container.scrollTo({
      left: target,
      behavior: fromUser ? "smooth" : "instant",
    });
    setActive(i);
    window.setTimeout(() => {
      programmaticScrollRef.current = false;
    }, fromUser ? 700 : 50);
  }, [pauseAutoplay]);

  const goPrev = useCallback(
    (fromUser = false) => {
      const next = (activeRef.current - 1 + slides.length) % slides.length;
      scrollToIndex(next, fromUser);
    },
    [slides.length, scrollToIndex]
  );

  const goNext = useCallback(
    (fromUser = false) => {
      const next = (activeRef.current + 1) % slides.length;
      scrollToIndex(next, fromUser);
    },
    [slides.length, scrollToIndex]
  );

  useEffect(() => {
    if (slides.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setInterval(() => {
      if (autoplayPausedRef.current) return;
      const next = (activeRef.current + 1) % slides.length;
      scrollToIndex(next, false);
    }, CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [slides.length, scrollToIndex]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || slides.length === 0) return;

    const syncActiveFromScroll = () => {
      if (!programmaticScrollRef.current) pauseAutoplay();

      const center = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let minDist = Infinity;
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return;
        const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(slideCenter - center);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      if (closest !== activeRef.current) setActive(closest);
    };

    const onTouchStart = () => pauseAutoplay();

    container.addEventListener("scroll", syncActiveFromScroll, { passive: true });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("pointerdown", onTouchStart, { passive: true });

    return () => {
      container.removeEventListener("scroll", syncActiveFromScroll);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("pointerdown", onTouchStart);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [slides.length, pauseAutoplay]);

  return (
    <div className="w-full">
      <div className="relative">
        <div
          ref={scrollContainerRef}
          className="flex w-full touch-pan-x gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 pl-4 pr-4 -mx-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="POS hardware and checkout examples"
        >
          {slides.map(({ item, index }, slideIndex) => (
            <div
              key={`m-${index}`}
              ref={(el) => {
                slideRefs.current[slideIndex] = el;
              }}
              className="flex w-[min(70vw,248px)] shrink-0 snap-center flex-col items-center justify-center first:pl-0 last:pr-0"
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

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => goPrev(true)}
              className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-800 shadow-md transition hover:bg-white"
              aria-label="Previous product"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goNext(true)}
              className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white/95 text-gray-800 shadow-md transition hover:bg-white"
              aria-label="Next product"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      <div
        className="mt-5 flex flex-wrap items-center justify-center gap-1.5"
        role="tablist"
        aria-label="Choose product slide"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1} of ${slides.length}`}
            onClick={() => scrollToIndex(i, true)}
            className={cn(
              "h-2 rounded-full transition-all duration-300",
              i === active ? "w-6 bg-gray-800" : "w-2 bg-gray-300 hover:bg-gray-500"
            )}
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
      className="relative overflow-hidden bg-white min-h-[min(88dvh,760px)] sm:min-h-0 sm:pt-10 sm:pb-12 lg:pb-14"
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* —— Mobile: headline + horizontal auto carousel —— */}
        <div className="flex min-h-[min(88dvh,760px)] flex-col sm:hidden">
          <div className="shrink-0 pt-[clamp(1.25rem,5vh,2.75rem)]">
            <FlavorHeadline variant="mobile" />
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-5 pb-6">
            <MobileFlavorCarousel paymentTabId={mobilePaymentId} />
          </div>
        </div>

        {/* —— Desktop / tablet: 5-column parallax grid —— */}
        <div className="hidden items-center justify-items-center gap-x-3 gap-y-4 sm:grid sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-4 lg:gap-y-5">
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
                  sizes="(max-width: 640px) 30vw, (max-width: 1024px) 16vw, 168px"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
