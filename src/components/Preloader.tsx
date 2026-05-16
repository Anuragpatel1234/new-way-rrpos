"use client";

import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Only show the preloader if it hasn't been shown in this session
    const hasShown = sessionStorage.getItem("preloader-shown");
    
    if (!hasShown) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem("preloader-shown", "true");
      }, 1800); // Premium slow load for first entry
      return () => clearTimeout(timer);
    }
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
                scale: [0.5, 1.1, 1],
                opacity: 1
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
                times: [0, 0.7, 1]
              }}
              className="flex flex-col items-center"
            >
              <img
                src="/NWT_Logo_New.png"
                alt="New Way Traders Logo"
                className="h-28 md:h-36 w-auto object-contain mb-4"
              />
              {/* Subtle loading line */}
              <motion.div
                className="h-0.5 bg-[#04152B] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1, delay: 0.5 }}
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
