"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Headphones, Zap, Package, FileText, Store, Smile, ShieldCheck, Cloud, ClipboardList, Users, WifiOff } from "lucide-react";
import Image from "next/image";
import { HERO_VIDEO_SRC } from "@/lib/critical-assets";
import { useTranslation } from "react-i18next";

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

const MOBILE_LOGOS = [
  { name: ["PAVAGADH", "TEMPLE"], color: "text-[#D97706]", color2: "text-red-700" },
  { name: ["BHARUCHA", "TEMPLE"], color: "text-[#B45309]", color2: "text-[#92400E]" },
  { name: ["7SEAS", "MALL"], color: "text-[#0284C7]", color2: "text-[#0369A1]" },
  { name: ["ALPHA", "ONE MALL"], color: "text-red-600", color2: "text-black" },
  { name: ["GOKUL", "DAIRY"], color: "text-[#0F172A]", color2: "text-green-600" },
  { name: ["HONOUR", "RESTAURANT"], color: "text-[#78350F]", color2: "text-[#92400E]" },
  { name: ["ASHFRILAL", "ICECREAM"], color: "text-pink-600", color2: "text-blue-500" },
  { name: ["INOX", "PVR CINEMA"], color: "text-[#1E3A8A]", color2: "text-black" },
  { name: ["MAHALAXMI", "TEMPLE"], color: "text-[#EA580C]", color2: "text-[#C2410C]" },
  { name: ["TASTY", "VADAPAV"], color: "text-[#B45309]", color2: "text-[#F59E0B]" },
  { name: ["AMBICA", "FIREWORKS"], color: "text-[#E11D48]", color2: "text-[#BE123C]" },
  { name: ["FUN", "WORLD"], color: "text-[#059669]", color2: "text-[#10B981]" },
  { name: ["BAPS", "TEMPLE"], color: "text-[#EA580C]", color2: "text-[#C2410C]" },
  { name: ["TIRUPATI", "RUSHIVAN"], color: "text-[#047857]", color2: "text-[#065F46]" },
  { name: ["RARAJ", "RESTAURANT"], color: "text-[#9F1239]", color2: "text-[#BE123C]" },
  { name: ["GANDHI", "VANMALI"], color: "text-[#4338CA]", color2: "text-[#3730A3]" },
  { name: ["RAKESH", "FIREWORKS"], color: "text-[#E11D48]", color2: "text-[#F43F5E]" },
  { name: ["LION", "WATERPARK"], color: "text-[#0284C7]", color2: "text-[#0369A1]" },
  { name: ["BINA", "ICECREAM"], color: "text-[#D946EF]", color2: "text-[#C026D3]" },
  { name: ["SUNDHA", "ROPEWAY"], color: "text-[#65A30D]", color2: "text-[#4D7C0F]" },
  { name: ["KD", "HOSPITAL"], color: "text-[#0284C7]", color2: "text-[#0369A1]" },
  { name: ["NAAZ", "RESTAURANT"], color: "text-[#B45309]", color2: "text-black" },
  { name: ["RAINBOW", "FIREWORKS"], color: "text-[#7C3AED]", color2: "text-[#6D28D9]" },
  { name: ["RELIANCE", "GUESTHOUSE"], color: "text-[#0F172A]", color2: "text-[#334155]" },
  { name: ["SATYANARAYAN", "KATHIYAWADI"], color: "text-[#92400E]", color2: "text-[#B45309]" }
];

export default function Hero() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const kick = () => {
      video.muted = true;
      void video.play().then(() => {
        if (typeof window !== "undefined") {
          (window as any).__heroVideoReady = true;
          window.dispatchEvent(new CustomEvent("hero-video-ready"));
        }
      }).catch(() => { });
    };

    // If already loaded/playing
    if (video.readyState >= 3) {
      kick();
    }

    video.addEventListener("canplay", kick);
    video.addEventListener("canplaythrough", kick);
    video.addEventListener("loadeddata", kick);
    document.addEventListener("visibilitychange", kick);

    return () => {
      video.removeEventListener("canplay", kick);
      video.removeEventListener("canplaythrough", kick);
      video.removeEventListener("loadeddata", kick);
      document.removeEventListener("visibilitychange", kick);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative z-[1] w-full"
    >
      {/* ==================================================== */}
      {/* MOBILE HERO (visible on < md)                          */}
      {/* ==================================================== */}
      <div className="md:hidden flex flex-col bg-gradient-to-b from-white via-[#F0F5FF] to-white pt-24 pb-8 overflow-hidden">
        
        {/* Text Section */}
        <div className="px-6 text-center z-20 relative">
          <h1 className="font-serif text-[2.2rem] font-extrabold leading-[1.2] tracking-tight text-[#04152B]">
            Fast billing that <br/>
            keeps your business <br/>
            <span className="text-[#0F3577]">running smoothly.</span>
          </h1>
          <p className="mt-4 text-[0.95rem] font-medium leading-relaxed text-[#475569] max-w-[280px] mx-auto">
            All-in-one POS for retail stores. <br/> Billing, inventory, GST reports &ndash; <br/> all in one place.
          </p>

          <div className="mt-7 flex flex-col gap-3 px-2">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#04152B] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#0F3577]"
            >
              <Rocket className="h-4 w-4" />
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#04152B] bg-white px-6 py-3.5 text-sm font-bold text-[#04152B] shadow-sm transition-all hover:bg-gray-50"
            >
              <Headphones className="h-4 w-4" />
              Contact Sales
            </Link>
          </div>
        </div>

        {/* Image & Features Section */}
        <div className="relative -mt-24 px-4 z-10 flex flex-col items-center">
          {/* Subtle glow behind image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-400/20 rounded-full blur-[60px] pointer-events-none" />
          
          <div className="relative w-[120vw] h-[105vw] max-w-[620px] sm:aspect-[4/3] sm:h-auto mb-8">
             {/* Using mobile-hero.png from public directory */}
             <Image 
               src="/mobile-hero.png" 
               alt="POS Hardware" 
               fill 
               className="object-contain drop-shadow-xl scale-110 md:scale-100 origin-bottom"
               priority
             />
          </div>

          {/* Features Grid Card */}
          <div className="w-[100vw] sm:w-full max-w-[650px] bg-white rounded-none sm:rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border-y sm:border border-gray-100 p-4 sm:p-6 -mt-24 relative z-20">
             <div className="grid grid-cols-4 gap-y-6 gap-x-2">
               {[
                 { icon: Zap, label: "Fast Billing" },
                 { icon: Package, label: "Inventory Management" },
                 { icon: FileText, label: "GST Reports" },
                 { icon: Store, label: "Multiple Stores" },
                 { icon: Users, label: "Customer Management" },
                 { icon: ShieldCheck, label: "Secure Data" },
                 { icon: WifiOff, label: "Offline & Secure" },
                 { icon: ClipboardList, label: "Advance Order Management" }
               ].map((feature, i) => (
                 <div key={i} className="flex flex-col items-center justify-start text-center gap-2">
                   <feature.icon className="h-6 w-6 text-[#1D4ED8]" strokeWidth={1.5} />
                   <span className="text-[0.65rem] font-bold leading-tight text-[#1E293B]">
                     {feature.label.split(' ').map((word, idx) => (
                       <span key={idx} className="block">{word}</span>
                     ))}
                   </span>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Trusted By Businesses */}
        <div className="mt-12 mb-6">
          <h2 className="text-center font-bold text-[#0F172A] mb-5">Trusted by Businesses</h2>
          <div className="overflow-hidden pb-4">
             <motion.div 
               className="flex gap-4 items-center pl-6"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ duration: 40, ease: "linear", repeat: Infinity }}
               style={{ width: "max-content" }}
             >
               {[...MOBILE_LOGOS, ...MOBILE_LOGOS].map((logo, i) => (
                 <div key={i} className="shrink-0 w-28 h-14 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col items-center justify-center">
                   <span className={`text-[0.7rem] font-black leading-none ${logo.color}`}>{logo.name[0]}</span>
                   <span className={`text-[0.55rem] font-bold leading-none mt-0.5 text-center ${logo.color2}`}>{logo.name[1]}</span>
                 </div>
               ))}
             </motion.div>
          </div>
        </div>

        {/* Bottom Stats Banner */}
        <div className="mt-2 bg-[#04152B] text-white py-5 px-4 rounded-t-3xl mx-2 shadow-lg">
           <div className="grid grid-cols-4 gap-2 divide-x divide-white/20">
             {[
               { icon: Rocket, stat: "1K+", label: "Happy Clients" },
               { icon: Store, stat: "10K+", label: "Stores Powered" },
               { icon: FileText, stat: "50L+", label: "Bills Generated" },
               { icon: ShieldCheck, stat: "100%", label: "Secure Data" }
             ].map((item, i) => (
               <div key={i} className="flex flex-col items-center text-center justify-center px-1">
                 <item.icon className="h-5 w-5 mb-1.5 opacity-90" />
                 <span className="text-sm font-bold leading-none">{item.stat}</span>
                 <span className="text-[0.55rem] font-medium mt-1 leading-tight text-white/80">{item.label}</span>
               </div>
             ))}
           </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* DESKTOP HERO (visible on >= md)                        */}
      {/* ==================================================== */}
      <div className="hidden md:block relative h-dvh min-h-[600px] md:h-screen w-full overflow-hidden">
        {/* Background video — contained to this section only (no fixed / scroll-driven motion) */}
      <div className="absolute inset-0 z-0 bg-[#04152B]">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-contain object-center"
            style={{ maxWidth: "none", transform: "scale(1.1)" }}
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

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pb-28 pt-16 text-center md:pb-32 md:pt-20">
        <div className="max-w-4xl translate-y-14 rounded-2xl border border-white/5 bg-black/10 px-6 py-7 backdrop-blur-[2px] md:translate-y-20 md:px-10 md:py-9 lg:translate-y-28">
          <h1 className="font-serif text-[2rem] font-bold leading-[1.15] tracking-tight text-white drop-shadow-lg md:text-[2.5rem] lg:text-[3rem]">
            <span className="block">{t("hero.title_line1")}</span>
            <span className="block">{t("hero.title_line2")}</span>
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/90 drop-shadow-md md:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#04152B] shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-[#04152B] hover:text-white hover:shadow-xl"
            >
              {t("hero.get_started")}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:border-[#04152B] hover:bg-[#04152B]"
            >
              {t("hero.contact_sales")}
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
      </div>
    </section>
  );
}
