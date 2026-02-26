"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// These are valid Unsplash CDN images that work reliably.
// Each entry maps to a tile in the 5-column grid.
// null = the center headline slot
// { type:"text", ... } = stylized text tile

type GridImage = {
  type: "image";
  src: string;
  alt: string;
};
type GridText = {
  type: "text";
  label: string;       // primary text (may be multi-line joined with \n)
  style: "open" | "thankyou" | "bag";
};
type GridNull = null;

type GridItem = GridImage | GridText | GridNull;

// 3 rows of 5 = 15 items total, center (item #7 index 7) = null = headline
const GRID_ITEMS: GridItem[] = [
  // Row 1
  { type: "image", src: "https://images.unsplash.com/photo-1556742049-0cfb4a40e525?w=500&q=80&fit=crop", alt: "POS terminal at checkout" },
  { type: "text", label: "OPEN", style: "open" },
  { type: "image", src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80&fit=crop", alt: "Restaurant dining" },
  { type: "image", src: "https://images.unsplash.com/photo-1490457843367-34b21b6ccd85?w=500&q=80&fit=crop", alt: "Florist with flowers" },
  { type: "image", src: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80&fit=crop", alt: "Fresh produce grocery store" },

  // Row 2
  { type: "image", src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80&fit=crop", alt: "Hair salon styling" },
  { type: "image", src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80&fit=crop", alt: "Craftsman portrait" },

  // CENTER — null = rendered as the serif headline
  null,

  { type: "image", src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80&fit=crop", alt: "Retail clothing store" },
  { type: "text", label: "bag", style: "bag" },

  // Row 3
  { type: "image", src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=500&q=80&fit=crop", alt: "Auto repair mechanic" },
  { type: "text", label: "THANK\nYOU", style: "thankyou" },
  { type: "image", src: "https://images.unsplash.com/photo-1556742393-d75f468bfcb2?w=500&q=80&fit=crop", alt: "Card payment tap" },
  { type: "image", src: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=500&q=80&fit=crop", alt: "Beauty professional" },
  { type: "image", src: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=500&q=80&fit=crop", alt: "Healthy food market" },
];

// Five distinct parallax speeds — one per column
const COL_SPEEDS = [30, -50, 20, -35, 60]; // px of translateY across scroll

export default function BusinessFlavor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create 5 parallax offsets (one per column)
  const t0 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[0]]);
  const t1 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[1]]);
  const t2 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[2]]);
  const t3 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[3]]);
  const t4 = useTransform(scrollYProgress, [0, 1], [0, COL_SPEEDS[4]]);
  const colTransforms = [t0, t1, t2, t3, t4];

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{ backgroundColor: "#ffffff", paddingTop: "6rem", paddingBottom: "8rem" }}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-8">
        {/* 5-column grid */}
        <div
          className="grid items-center justify-items-center"
          style={{
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "clamp(12px, 2vw, 24px)",
            rowGap: "clamp(48px, 6vw, 80px)",
          }}
        >
          {GRID_ITEMS.map((item, index) => {
            const col = index % 5;
            const yMotion = colTransforms[col];

            // ── CENTER HEADLINE ──────────────
            if (item === null) {
              return (
                <motion.div
                  key="headline"
                  style={{ y: yMotion }}
                  className="flex items-center justify-center col-span-1"
                >
                  <h2
                    className="font-serif text-center text-foreground"
                    style={{
                      fontSize: "clamp(1.5rem, 2.6vw, 2.6rem)",
                      lineHeight: 1.15,
                      fontWeight: 400,
                      maxWidth: "300px",
                    }}
                  >
                    Whatever your{" "}
                    <em style={{ fontStyle: "italic" }}>flavor</em> of business,
                    build and grow on your terms.
                  </h2>
                </motion.div>
              );
            }

            if (item.type === "text") {
              return (
                <motion.div
                  key={index}
                  style={{ y: yMotion }}
                  className="w-full flex items-center justify-center"
                >
                  <div
                    style={{
                      maxWidth: "clamp(100px, 14vw, 170px)",
                      width: "100%",
                      aspectRatio: "1",
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      borderRadius: "20px",
                      boxShadow: "0 1px 6px rgba(0,0,0,0.04)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.style === "open" && (
                      <OpenSignIcon />
                    )}
                    {item.style === "thankyou" && (
                      <div style={{ textAlign: "center", lineHeight: 1.4 }}>
                        {["THANK", "YOU", "THANK", "YOU"].map((w, i) => (
                          <div
                            key={i}
                            style={{
                              fontFamily: "sans-serif",
                              fontWeight: 900,
                              fontSize: "0.7rem",
                              letterSpacing: "-0.02em",
                              textTransform: "uppercase",
                              transform: i % 2 === 0 ? "translateX(-4px)" : "translateX(4px)",
                            }}
                          >
                            {w}
                          </div>
                        ))}
                      </div>
                    )}
                    {item.style === "bag" && (
                      <BagIcon />
                    )}
                  </div>
                </motion.div>
              );
            }

            // ── IMAGE TILES ──────────────────
            return (
              <motion.div
                key={index}
                id={item.alt === "Card payment tap" ? "card-payment-tab" : undefined}
                style={{ y: yMotion }}
                className="group w-full flex items-center justify-center"
              >
                <div
                  className="relative aspect-square w-full overflow-hidden rounded-[20px] bg-gray-100"
                  style={{ maxWidth: "clamp(100px, 14vw, 170px)" }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 30vw, (max-width: 1024px) 18vw, 170px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    unoptimized
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ── Inline icon components ──────────────────────────────────────────────────

function OpenSignIcon() {
  return (
    <svg
      viewBox="0 0 80 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[70%] w-auto"
      aria-label="Open sign"
    >
      {/* Sign board */}
      <rect x="8" y="8" width="64" height="54" rx="4" stroke="#111" strokeWidth="3.5" fill="white" />
      {/* OPEN text */}
      <text
        x="40"
        y="42"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontWeight="700"
        fontSize="18"
        fill="#111"
        letterSpacing="2"
      >
        OPEN
      </text>
      {/* Stand legs */}
      <line x1="24" y1="62" x2="16" y2="88" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <line x1="56" y1="62" x2="64" y2="88" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      <line x1="16" y1="88" x2="64" y2="88" stroke="#111" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-[60%] w-auto"
      aria-label="Shopping bag"
    >
      <path
        d="M16 28h48l-6 36H22L16 28Z"
        stroke="#111"
        strokeWidth="3.5"
        fill="white"
        strokeLinejoin="round"
      />
      <path
        d="M28 28c0-6.627 5.373-12 12-12s12 5.373 12 12"
        stroke="#111"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Smiley face */}
      <circle cx="33" cy="46" r="2.5" fill="#111" />
      <circle cx="47" cy="46" r="2.5" fill="#111" />
      <path
        d="M33 54c1.5 3 10.5 3 14 0"
        stroke="#111"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
