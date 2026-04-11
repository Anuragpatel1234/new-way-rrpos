"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  CTA items – each link triggers a different background image        */
/* ------------------------------------------------------------------ */

const CTA_ITEMS = [
  {
    id: "pos-hardware",
    label: "Explore POS hardware",
    href: "/hardware",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "software",
    label: "Discover our software",
    href: "/features",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1400&auto=format&fit=crop",
  },
  {
    id: "demo",
    label: "Book a free demo",
    href: "/contact",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1400&auto=format&fit=crop",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FinalCTA() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-background py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* ─── Large Rounded Card (Square-style) ─────────────── */}
        <div className="relative overflow-hidden rounded-[28px] min-h-[520px] md:min-h-[600px] lg:min-h-[680px] flex flex-col items-center justify-center bg-gray-900/50">
          {/* Background images with crossfade */}
          {CTA_ITEMS.map((item, index) => (
            <Image
              key={item.id}
              src={item.image}
              alt={item.label}
              fill
              className={cn(
                "object-cover transition-opacity duration-700 ease-in-out",
                activeIndex === index ? "opacity-100" : "opacity-0"
              )}
              sizes="(max-width: 768px) 100vw, 1320px"
              priority={index === 0}
            />
          ))}

          {/* Dark gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 z-[1]" />

          {/* ─── Content ─── */}
          <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-4xl">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-white font-bold leading-[1.15] tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Make your
              <br />
              next move
            </motion.h2>

            {/* Hoverable link list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10 flex flex-col w-full max-w-xl"
              onMouseLeave={() => setActiveIndex(null)}
            >
              {CTA_ITEMS.map((item, index) => {
                const isHovered = activeIndex === index;
                const isOtherHovered =
                  activeIndex !== null && activeIndex !== index;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="group relative flex items-center justify-between border-t border-white/20 py-4 sm:py-5 transition-colors last:border-b last:border-white/20"
                    onMouseEnter={() => setActiveIndex(index)}
                  >
                    <span
                      className={cn(
                        "text-base sm:text-lg md:text-xl font-medium text-white transition-all duration-400",
                        isHovered && "translate-x-2",
                        isOtherHovered && "opacity-40"
                      )}
                    >
                      {item.label}
                    </span>

                    {/* Arrow that appears on hover */}
                    <div
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-900 transition-all duration-400",
                        isHovered
                          ? "opacity-100 scale-100"
                          : "opacity-0 scale-75"
                      )}
                    >
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </Link>
                );
              })}
            </motion.div>

            {/* CTA Buttons (Square-style) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-900 px-6 py-3 text-sm font-semibold shadow-lg hover:bg-gray-100 transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
              >
                Get started
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm text-white px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
              >
                <Phone className="h-4 w-4" />
                Contact sales
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
