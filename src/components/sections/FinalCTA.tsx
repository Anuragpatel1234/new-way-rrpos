"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CTA_LINKS = [
  {
    id: "hardware",
    label: "Explore POS hardware",
    href: "/hardware",
    image: "https://images.unsplash.com/photo-1556742049-0cfb4a40e525?w=1600&q=80&fit=crop",
  },
  {
    id: "software",
    label: "Discover software features",
    href: "/features",
    image: "https://images.unsplash.com/photo-1556741533-6e4a6ebaa3b5?w=1600&q=80&fit=crop",
  },
  {
    id: "demo",
    label: "Book a free demo",
    href: "/contact",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&fit=crop",
  },
];

export default function FinalCTA() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center overflow-hidden bg-background py-24 border-t border-gray-800">
      {/* Background Images */}
      {CTA_LINKS.map((link, index) => (
        <Image
          key={link.id}
          src={link.image}
          alt={link.label}
          fill
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            hoveredIndex === index ? "opacity-30" : "opacity-0"
          )}
          priority={index === 0}
          unoptimized
        />
      ))}

      {/* Default Subtle Background (shown when nothing is hovered) */}
      <div 
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-700",
          hoveredIndex !== null ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
             <p className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Next Steps
            </p>
            <h2 className="text-4xl font-normal text-white sm:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Make your next move
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {CTA_LINKS.map((link, index) => {
              const isHovered = hoveredIndex === index;
              const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;

              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className="group relative flex items-center justify-between border-t border-white/20 py-8 transition-colors hover:border-white/50 first:border-0"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <span
                    className={cn(
                      "text-3xl font-medium tracking-tight text-white transition-all duration-500 sm:text-4xl md:text-5xl",
                      HoveredClasses(isHovered, isOtherHovered)
                    )}
                  >
                    {link.label}
                  </span>
                  
                  <div
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-900 transition-all duration-500 sm:h-16 sm:w-16 overflow-hidden",
                      isHovered ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-75 -translate-x-4",
                      isOtherHovered && "opacity-0"
                    )}
                  >
                    <ArrowRight className="h-6 w-6 sm:h-8 sm:w-8" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function HoveredClasses(isHovered: boolean, isOtherHovered: boolean) {
  if (isHovered) return "opacity-100 translate-x-2";
  if (isOtherHovered) return "opacity-40";
  return "opacity-100";
}
