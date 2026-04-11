"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HERO_VIDEO_SRC } from "@/lib/critical-assets";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const kick = () => {
      video.muted = true;
      void video.play().catch(() => {});
    };
    kick();
    video.addEventListener("loadeddata", kick);
    document.addEventListener("visibilitychange", kick);
    return () => {
      video.removeEventListener("loadeddata", kick);
      document.removeEventListener("visibilitychange", kick);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative z-[1] h-dvh min-h-dvh w-full overflow-hidden md:min-h-[600px] md:h-screen"
    >
      {/* Background video — contained to this section only (no fixed / scroll-driven motion) */}
      <div className="absolute inset-0 z-0 bg-[#0a0f1a]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover object-center"
            style={{ maxWidth: "none" }}
            aria-hidden
          >
            <source src={HERO_VIDEO_SRC} type="video/mp4" />
          </video>
        </div>

        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.22) 40%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.42) 100%)",
          }}
          aria-hidden
        />
      </div>

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pb-28 text-center md:pb-32">
        <div className="rounded-2xl border border-white/5 bg-black/10 px-6 py-7 backdrop-blur-[2px] md:px-10 md:py-9 max-w-4xl">
          <h1 className="font-serif text-[2rem] font-bold leading-[1.15] tracking-tight text-white drop-shadow-lg md:text-[2.5rem] lg:text-[3rem]">
            <span className="block">Fast billing that keeps</span>
            <span className="block">your business running smoothly.</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90 drop-shadow-md md:text-lg">
            All-in-one POS for retail stores. Billing, inventory, GST reports — all in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0F172A] shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-[#0F172A] hover:text-white hover:shadow-xl"
            >
              Get started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:border-[#0F172A] hover:bg-[#0F172A]"
            >
              Contact sales
            </Link>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 border-t border-white/15"
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
                className="whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-white/55"
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
