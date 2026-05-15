"use client";

import { motion } from "framer-motion";
import Script from "next/script";

export default function Testimonials() {
  return (
    <section className="relative z-0 bg-white pt-24 pb-40 sm:pt-16 sm:pb-40 lg:pt-20 lg:pb-40">
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

        <div className="relative mt-8 min-h-[300px] w-full overflow-y-hidden px-4 md:px-10">
          <Script 
            src="https://elfsightcdn.com/platform.js" 
            strategy="afterInteractive" 
          />
          <div 
            className="elfsight-app-37e3be4a-8352-4be9-a47f-b00391c7836f" 
            data-elfsight-app-lazy 
          />
          {/* Cover branding badge */}
          <div className="absolute bottom-0 left-0 right-0 h-10 bg-white z-[5]" />
        </div>
      </div>
    </section>
  );
}
