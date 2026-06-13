"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
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
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1400&auto=format&fit=crop",
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
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-background -mt-16 sm:-mt-20 lg:-mt-24 sm:py-16 lg:py-24"
    >
      <div className="mx-auto max-w-[1320px] px-0 sm:px-6 lg:px-8">
        {/* ─── Large Rounded Card (Square-style) ─────────────── */}
        <div className="relative flex min-h-dvh flex-col items-center justify-center overflow-hidden rounded-none bg-gray-900/50 sm:min-h-[520px] sm:rounded-[28px] md:min-h-[600px] lg:min-h-[680px]">
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
          <motion.div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center justify-center px-6 py-16 text-center sm:max-w-2xl sm:py-20">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-[clamp(2rem,6vw,3rem)] font-bold leading-[1.12] tracking-tight text-white"
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
              className="mt-8 flex w-full flex-col sm:mt-10"
              onMouseLeave={() => setActiveIndex(0)}
            >
              {CTA_ITEMS.map((item, index) => {
                const isHovered = activeIndex === index;
                const isOtherHovered = activeIndex !== index;

                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "group relative flex items-center justify-between border-t border-white/20 py-4 transition-colors last:border-b last:border-white/20 sm:py-5",
                      isHovered && "bg-white/5"
                    )}
                    onMouseEnter={() => setActiveIndex(index)}
                    aria-current={isHovered ? "true" : undefined}
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
              className="mt-8 flex flex-row flex-wrap items-center justify-center gap-3 sm:mt-10"
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
