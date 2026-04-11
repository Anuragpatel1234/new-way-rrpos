"use client";

import { useEffect, useRef, type RefObject } from "react";
import { motion } from "framer-motion";

const TRUSTINDEX_LOADER =
  "https://cdn.trustindex.io/loader.js?69ac050695a1395ded663419ba0";

const LOADER_SELECTOR =
  'script[src*="cdn.trustindex.io/loader.js"][src*="69ac050695a1395ded663419ba0"]';

/**
 * TrustIndex floating layouts append `.ti-widget` to `document.body`, which places
 * the widget after <Footer>. We re-parent those nodes into this section's mount.
 * Script is injected next to the mount so `document.currentScript` works like a normal embed.
 */
function useTrustIndexMount(mountRef: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const moveWidgetIntoMount = () => {
      if (!mount.isConnected) return;
      document.querySelectorAll("body > .ti-widget").forEach((node) => {
        if (!mount.contains(node)) {
          mount.appendChild(node);
        }
      });
    };

    let script = document.querySelector(LOADER_SELECTOR);
    if (!script) {
      script = document.createElement("script");
      script.id = "trustindex-loader-rrpos";
      (script as HTMLScriptElement).src = TRUSTINDEX_LOADER;
      (script as HTMLScriptElement).defer = true;
      (script as HTMLScriptElement).async = true;
      mount.appendChild(script);
    }

    const observer = new MutationObserver(moveWidgetIntoMount);
    observer.observe(document.body, { childList: true, subtree: false });

    window.addEventListener("widget-ready", moveWidgetIntoMount);
    const t = window.setTimeout(moveWidgetIntoMount, 50);
    const t2 = window.setTimeout(moveWidgetIntoMount, 500);

    moveWidgetIntoMount();

    return () => {
      window.clearTimeout(t);
      window.clearTimeout(t2);
      observer.disconnect();
      window.removeEventListener("widget-ready", moveWidgetIntoMount);
    };
  }, [mountRef]);
}

export default function Testimonials() {
  const trustIndexMountRef = useRef<HTMLDivElement>(null);
  useTrustIndexMount(trustIndexMountRef);

  return (
    <section className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-[1.75rem] font-bold leading-[1.15] text-gray-900 md:text-[2rem]">
            Loved by retail businesses
          </h2>
          <p className="mt-4 text-base leading-relaxed text-gray-600 md:text-lg">
            See what store owners across India have to say about RR POS.
          </p>
        </motion.div>

        <div
          id="trustindex-mount"
          ref={trustIndexMountRef}
          className="relative z-[1] mt-12 min-h-[280px] w-full overflow-x-auto"
          aria-label="Customer reviews"
        />
      </div>
    </section>
  );
}
