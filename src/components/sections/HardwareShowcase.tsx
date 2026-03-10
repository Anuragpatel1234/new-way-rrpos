"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { HARDWARE_PRODUCTS } from "@/lib/constants";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function HardwareShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 5);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 5);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector<HTMLElement>(".hw-card")?.offsetWidth ?? 400;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 20 : cardWidth + 20, behavior: "smooth" });
  };

  return (
    <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Header row: left text + right arrows */}
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
            <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-foreground">
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
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 text-foreground transition-all hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              aria-label="Next"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="grid h-10 w-10 place-items-center rounded-full border border-gray-300 text-foreground transition-all hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Carousel — full-bleed, edge cards peek */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.15 }}
      >
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 hide-scrollbar"
          style={{
            paddingLeft: "max(1.5rem, calc((100vw - 1320px) / 2 + 1.5rem))",
            paddingRight: "1.5rem",
          }}
        >
          {HARDWARE_PRODUCTS.map((product, i) => (
            <Link
              key={product.name}
              href="/hardware"
              className="hw-card group relative flex-shrink-0 snap-start"
              style={{ width: "min(85vw, 400px)" }}
            >
              {/* Card */}
              <div className="relative aspect-[1.1/1] w-full overflow-hidden bg-[#f3f3f3]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-8 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 85vw, 400px"
                  priority={i < 2}
                />
              </div>
              {/* Label */}
              <p className="mt-4 text-base font-semibold text-foreground group-hover:underline underline-offset-4 transition-all">
                {product.name}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Starting at {product.price}
              </p>
            </Link>
          ))}
        </div>
      </motion.div>

      {/* hide-scrollbar utility (injected once) */}
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
