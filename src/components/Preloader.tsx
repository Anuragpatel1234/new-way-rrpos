"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  // Official Brand Navy Filter (#04152B)
  const BRAND_FILTER = "brightness(0) saturate(100%) invert(8%) sepia(97%) saturate(1932%) hue-rotate(196deg) brightness(93%) contrast(96%)";
    // Show preloader on every initial load/refresh
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Consistent load time for every refresh

    // Listen for manual triggers (e.g. from logo clicks)
    const handleTrigger = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 1200);
    };

    window.addEventListener("trigger-preloader", handleTrigger);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("trigger-preloader", handleTrigger);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
        >
          <div className="relative">
            {/* Logo scaling animation */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{
                scale: [0.5, 1.05, 1],
                opacity: 1
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="flex flex-col items-center"
            >
              <img
                src="/NWT_Logo_2.png"
                alt="New Way Traders Logo"
                className="h-28 md:h-36 w-auto object-contain mb-4"
                style={{ filter: BRAND_FILTER }}
              />
              {/* Subtle loading line */}
              <motion.div
                className="h-0.5 bg-[#04152B] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </motion.div>

            {/* Decorative background pulse */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.5, opacity: 0.1 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
              className="absolute inset-0 bg-[#04152B] rounded-full blur-3xl -z-10"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
