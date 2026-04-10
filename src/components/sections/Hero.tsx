"use client";

import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HERO_VIDEO_SRC = "/POS_system_components_202604101116 (1).mp4";

const BRANDS = [
  "Pavagdh Maha Kali Temple",
  "Bharucha Ji Temple",
  "7Seas Mall, Vadodara",
  "Alpha One Mall, Ahmedabad",
  "Gokul Dairy, Ahmedabad",
  "Honour Restaurant, Ahmedabad",
  "Ashfrilal Icecream, Ahmedabad",
  "INOX PVR Cinema",
  "Mahalaxmi Swaminarayan Temple, Mumbai",
  "Tasty Vadapav",
  "Ambica Fireworks, Ahmedabad",
  "Fun World, Rajkot",
  "BAPS Swaminarayan, Sarangpur",
  "Tirupati Rushivan, Ahmedabad",
  "RaRaj Restaurant, Ahmedabad",
  "Gandhi Vanmali, Ahmedabad",
  "Rakesh Fireworks, Vadodara",
  "The Lion Waterpark, Rajkot",
  "Bina Icecream, Mumbai",
  "Sundha Mata Ropeway, Rajasthan",
  "KD Hospital, Ahmedabad",
  "NAAZ Indian Restaurant, Leicester UK",
  "Rainbow Fireworks, Vadodara",
  "Reliance Guesthouse, Jamnagar",
  "Satyanarayan Kathiyawadi, Vasad",
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
      let currentP = 0;

      const updatePos = () => {
        const p = currentP;
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
          borderRadius: `${p * 20}px`,
        });
      };

      gsap.ticker.add(updatePos);

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
          currentP = progressObj.p;
        },
      }, 0);

      return () => {
        gsap.ticker.remove(updatePos);
      };
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

        {/* Dark gradient overlay — stronger at top for navbar readability */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.42) 100%)",
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
        <div className="rounded-2xl bg-black/10 backdrop-blur-[2px] border border-white/5 px-6 py-7 md:px-10 md:py-9 max-w-4xl">
          <h1
            className="font-serif text-white font-bold leading-[1.15] tracking-tight drop-shadow-lg text-[2rem] md:text-[2.5rem] lg:text-[3rem]"
          >
            <span className="block">Fast billing that keeps</span>
            <span className="block">your business running smoothly.</span>
          </h1>

          <p className="mt-4 text-white/90 text-base md:text-lg leading-relaxed max-w-lg mx-auto drop-shadow-md">
            All-in-one POS for retail stores. Billing, inventory, GST reports — all in one place.
          </p>

          <div className="mt-8 flex items-center gap-3 flex-wrap justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white text-[#0F172A] px-6 py-3 text-sm font-semibold shadow-lg hover:bg-[#0F172A] hover:text-white transition-all duration-200 hover:shadow-xl hover:scale-[1.02]"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 text-white px-6 py-3 text-sm font-semibold hover:bg-[#0F172A] hover:border-[#0F172A] transition-all duration-200 hover:scale-[1.02]"
            >
              Contact sales
            </Link>
          </div>
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
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
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
