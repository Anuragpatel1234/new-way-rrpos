"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HARDWARE_PRODUCTS } from "@/lib/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useDraggableScroll } from "@/hooks/useDraggableScroll";

export default function HardwareShowcase() {
  const { ref: scrollRef, canScrollLeft, canScrollRight, snapScrollBy } =
    useDraggableScroll();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Play/pause videos based on hover
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === hoveredIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [hoveredIndex]);

  const setVideoRef = useCallback(
    (el: HTMLVideoElement | null, index: number) => {
      videoRefs.current[index] = el;
    },
    []
  );

  return (
    <section className="relative bg-background py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14"
        >
          {/* Left — copy */}
          <div className="max-w-xl">
            <span
              className="text-xs font-medium uppercase tracking-[0.1em] text-gray-500"
              style={{ fontFamily: "var(--font-mono, monospace)" }}
            >
              Hardware
            </span>
            <h2 className="mt-3 text-[clamp(2.5rem,5vw,3.5rem)] font-normal leading-[1.1] tracking-tight text-foreground font-serif">
              Smooth checkout, every&nbsp;time
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-md">
              Choose from a range of sleek options for however you do business.
              All equally easy to use.
            </p>
            <Link
              href="/hardware"
              className="mt-6 inline-flex items-center gap-1 text-base font-semibold text-foreground underline underline-offset-4 decoration-1 hover:decoration-2 transition-all"
            >
              Shop deals
            </Link>
          </div>

          {/* Right — arrows */}
          <div className="flex items-center gap-3">
            <button
              aria-label="Previous"
              onClick={() => snapScrollBy("left")}
              disabled={!canScrollLeft}
              className="grid h-10 w-10 place-items-center text-foreground transition-all hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer rounded-full"
            >
              <ArrowLeft className="h-6 w-6" strokeWidth={1.5} />
            </button>
            <button
              aria-label="Next"
              onClick={() => snapScrollBy("right")}
              disabled={!canScrollRight}
              className="grid h-10 w-10 place-items-center text-foreground transition-all hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer rounded-full"
            >
              <ArrowRight className="h-6 w-6" strokeWidth={1.5} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel — full-bleed, expanding cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar cursor-grab active:cursor-grabbing select-none"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 1320px) / 2 + 1.5rem))",
            paddingRight: "1.5rem",
          }}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {HARDWARE_PRODUCTS.map((product, i) => {
            const isHovered = hoveredIndex === i;
            const hasHover = hoveredIndex !== null;

            return (
              <Link
                key={product.name}
                href="/hardware"
                className="hw-card relative flex-shrink-0 block overflow-hidden"
                style={{
                  width: isHovered
                    ? "min(92vw, 620px)"
                    : hasHover
                    ? "min(75vw, 300px)"
                    : "min(85vw, 380px)",
                  transition: "width 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
                }}
                onMouseEnter={() => setHoveredIndex(i)}
              >
                {/* Card media container — fixed height, only width changes */}
                <div className="relative w-full overflow-hidden bg-gray-800 rounded-2xl border border-gray-700/50"
                  style={{ height: "360px" }}
                >
                  {/* Background image — always visible */}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8 transition-all duration-700"
                    style={{
                      opacity: isHovered ? 0 : 1,
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                    }}
                    sizes="(max-width: 640px) 90vw, 620px"
                    priority={i < 2}
                  />

                  {/* Video layer — fades in on hover */}
                  {product.video && (
                    <video
                      ref={(el) => setVideoRef(el, i)}
                      src={product.video}
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                      style={{ opacity: isHovered ? 1 : 0 }}
                    />
                  )}

                  {/* Bottom gradient overlay — fades in on hover */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.35) 40%, transparent 70%)",
                    }}
                  />

                  {/* Text overlay — slides up and fades in on hover */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 pointer-events-none"
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transform: isHovered
                        ? "translateY(0)"
                        : "translateY(16px)",
                    }}
                  >
                    <p className="text-white text-lg font-semibold underline underline-offset-4 decoration-1 decoration-white/50">
                      {product.name}
                    </p>
                    <p className="text-white/80 text-sm mt-1.5">
                      {product.subtitle}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {product.price}
                      {product.emi && (
                        <span className="text-white/50">
                          {" "}
                          or {product.emi}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Label below card — visible when NOT hovered */}
                <div
                  className="transition-all duration-500 overflow-hidden"
                  style={{
                    maxHeight: isHovered ? "0px" : "80px",
                    opacity: isHovered ? 0 : 1,
                    marginTop: isHovered ? "0px" : "20px",
                  }}
                >
                  <p className="text-[15px] font-semibold text-foreground underline underline-offset-[6px] decoration-1 decoration-foreground/30">
                    {product.name}
                  </p>
                  <p className="mt-2 text-[14px] text-gray-500">
                    Starting at {product.price}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>

      {/* hide-scrollbar utility */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
