"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { POS_FEATURES } from "@/lib/constants";

/* ------------------------------------------------------------------ */
/*  Accordion Item                                                     */
/* ------------------------------------------------------------------ */

function AccordionItem({
  item,
  isActive,
  onToggle,
}: {
  item: (typeof POS_FEATURES)[number];
  isActive: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-t border-gray-800">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
      >
        <span
          className="text-foreground font-medium transition-colors duration-200"
          style={{
            fontSize: "clamp(1rem, 1.3vw, 1.2rem)",
            fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
          }}
        >
          {item.title}
        </span>
        <span
          className="text-gray-400 text-xl leading-none transition-transform duration-300 flex-shrink-0 ml-4 group-hover:text-white"
          style={{
            transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
            fontSize: "1.5rem",
            fontWeight: 300,
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
              opacity: { duration: 0.25, delay: 0.05 },
            }}
            className="overflow-hidden"
          >
            <motion.div
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="pb-6"
            >
              <p
                className="text-gray-300 leading-relaxed mb-4 max-w-[400px]"
                style={{
                  fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                {item.description}
              </p>
              <Link
                href={item.link}
                className="inline-block text-white text-sm font-medium border-b border-white/30 pb-0.5 hover:border-white hover:text-white transition-colors duration-200"
                style={{
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                }}
              >
                Learn more
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                       */
/* ------------------------------------------------------------------ */

export default function PointOfSale() {
  const [activeId, setActiveId] = useState<string>(POS_FEATURES[0].id);

  const activeItem = POS_FEATURES.find((f) => f.id === activeId) ?? POS_FEATURES[0];

  return (
    <section
      className="w-full bg-gray-900 border-t border-gray-800"
      style={{
        paddingTop: "clamp(4rem, 8vw, 7rem)",
        paddingBottom: "clamp(4rem, 8vw, 7rem)",
      }}
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-10 lg:px-14">
        {/* Section heading */}
        <h2
          className="text-foreground font-normal leading-[1.1] mb-10 md:mb-14"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            letterSpacing: "-0.02em",
            maxWidth: "520px",
          }}
        >
          See your whole business{" "}
          <em className="text-white" style={{ fontStyle: "italic" }}>click</em> into place
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          {/* Left: Accordion */}
          <div className="w-full md:w-[42%] lg:w-[38%] flex-shrink-0">
            {POS_FEATURES.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isActive={activeId === item.id}
                onToggle={() =>
                  setActiveId(activeId === item.id ? POS_FEATURES[0].id : item.id)
                }
              />
            ))}
            {/* Bottom border for last item */}
            <div className="border-t border-gray-800" />
          </div>

          {/* Right: Visual */}
          <div className="w-full md:w-[58%] lg:w-[62%] relative">
            <div
              className="relative w-full overflow-hidden rounded-2xl bg-gray-800 border border-gray-700/50 shadow-2xl"
              style={{
                aspectRatio: "4 / 3",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
