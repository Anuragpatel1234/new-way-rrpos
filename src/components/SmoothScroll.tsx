"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    // 1. Register ScrollTrigger with GSAP
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 2. Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // 3. Sync Lenis scroll events with GSAP ScrollTrigger
    lenis.on("scroll", () => {
      ScrollTrigger.update();
    });

    // 4. Register update loop with GSAP ticker for performance
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    // 5. Watch document body size changes (e.g. accordion expansions, dynamic route renders, late-loading images)
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
      ScrollTrigger.refresh();
    });
    if (document.body) {
      resizeObserver.observe(document.body);
    }

    // 6. Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(updateTicker);
      resizeObserver.disconnect();
    };
  }, []);

  // 6. Handle page transitions
  useEffect(() => {
    if (lenisRef.current) {
      // Instantly scroll back to the top of the viewport
      lenisRef.current.scrollTo(0, { immediate: true });
      
      // Recalculate dimensions of the page layout
      lenisRef.current.resize();
      
      // Allow DOM to settle, then recalculate dimensions and refresh all ScrollTriggers
      const timer = setTimeout(() => {
        if (lenisRef.current) {
          lenisRef.current.resize();
        }
        ScrollTrigger.refresh();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return <>{children}</>;
}
