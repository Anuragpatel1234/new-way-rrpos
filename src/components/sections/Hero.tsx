"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEO_SRC = "/mixkit-pharmacy-worker-accepts-payment-at-checkout-5407-hd-ready.mp4";

// Brand logos shown at the bottom of the hero (Square shows partner brands)
const BRANDS = [
  "DOSA KING", "METRO MART", "StyleCraft", "FreshBakes", "TechGadgets",
  "GoldenKitchen", "BlueBell Spa", "FarmersPick", "ZenYoga", "UrbanCafe",
];

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const brandsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const videoWrapper = videoWrapperRef.current;
    const content = contentRef.current;
    const brands = brandsRef.current;
    const targetTab = document.querySelector("#card-payment-tab");

    if (!section || !videoWrapper || !content) return;

    // Set the video wrapper to fixed/fullscreen to start
    gsap.set(videoWrapper, {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "0px",
      zIndex: 10,
      pointerEvents: "none",
    });

    // If the target tab exists (BusinessFlavor rendered), animate toward it
    if (targetTab) {
      const progressObj = { p: 0 };

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=110%",
          scrub: 1.5,
        },
      });

      // Fade out text content
      tl.to(content, {
        opacity: 0,
        y: -60,
        scale: 0.97,
        duration: 0.4,
        ease: "power2.out",
      }, 0);

      // Fade out brands strip
      if (brands) {
        tl.to(brands, {
          opacity: 0,
          y: 20,
          duration: 0.25,
        }, 0);
      }

      // Shrink video toward the target tile
      tl.to(progressObj, {
        p: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          const p = progressObj.p;
          const targetRect = targetTab.getBoundingClientRect();
          const vw = window.innerWidth;
          const vh = window.innerHeight;

          const currentW = vw + (targetRect.width - vw) * p;
          const currentH = vh + (targetRect.height - vh) * p;
          const currentX = (targetRect.left) * p;
          const currentY = (targetRect.top) * p;

          gsap.set(videoWrapper, {
            width: currentW,
            height: currentH,
            x: currentX,
            y: currentY,
            borderRadius: `${p * 28}px`,
          });
        },
      }, 0);
    } else {
      // No target tab: just fade/shrink the video wrapper on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=80%",
          scrub: 1,
        },
      });
      tl.to(content, { opacity: 0, y: -60, duration: 0.4 }, 0);
      tl.to(videoWrapper, {
        scale: 0.85,
        borderRadius: "28px",
        duration: 1,
        ease: "power2.inOut",
      }, 0);
    }
  }, { scope: sectionRef, dependencies: [] });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen min-h-[600px]"
      style={{ zIndex: 1 }}
    >
      {/* === VIDEO WRAPPER — GSAP positions this === */}
      <div ref={videoWrapperRef} className="overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          aria-hidden
        >
          <source src={HERO_VIDEO_SRC} type="video/mp4" />
        </video>

        {/* Subtle dark gradient overlay — no texture/grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, rgba(0,0,0,0.18) 55%, rgba(0,0,0,0.42) 100%)",
          }}
          aria-hidden
        />
      </div>

      {/* === CONTENT — sits above the video at z-20 === */}
      <div
        ref={contentRef}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
        style={{ zIndex: 20 }}
      >
        {/* Headline — large serif, white */}
        <h1
          className="font-serif text-white font-normal leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}
        >
          Fast billing that keeps<br />
          your business moving.
        </h1>

        {/* Subtext */}
        <p
          className="mt-5 text-white/80 text-lg leading-relaxed max-w-xl"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          All-in-one POS for retail stores. Billing, inventory, GST reports — all in one place.
        </p>

        {/* CTA Buttons — pill shaped like Square */}
        <div className="mt-9 flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white text-[#006aff] px-7 py-3.5 text-[0.95rem] font-semibold shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
          >
            Get started
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#006aff] text-white px-7 py-3.5 text-[0.95rem] font-semibold shadow-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
          >
            Contact sales
          </Link>
        </div>
      </div>

      {/* === BRAND LOGO STRIP — pinned to bottom of hero === */}
      <div
        ref={brandsRef}
        className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/15"
        style={{
          background: "rgba(0,0,0,0.30)",
          backdropFilter: "blur(4px)",
        }}
      >
        <div className="overflow-hidden py-4">
          <motion.div
            className="flex gap-12 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {[...BRANDS, ...BRANDS].map((brand, i) => (
              <span
                key={i}
                className="text-white/55 text-xs font-semibold tracking-widest uppercase whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
