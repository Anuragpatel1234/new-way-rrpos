"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HARDWARE_PRODUCTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HardwareShowcase() {
  return (
    <section className="relative py-24 lg:py-32 bg-foreground text-white overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Hardware
          </span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Smooth checkout, every time
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Choose from a range of sleek hardware options designed for speed and
            reliability. All equally easy to use.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HARDWARE_PRODUCTS.map((product) => (
            <motion.div key={product.name} variants={staggerItem}>
              <div
                className={cn(
                  "group relative flex flex-col rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1",
                  product.highlight
                    ? "border-primary/40 bg-primary/10 hover:border-primary/60"
                    : "border-gray-700 bg-gray-800/50 hover:border-gray-600"
                )}
              >
                {product.highlight && (
                  <div className="absolute -top-3 left-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                    <Star className="h-3 w-3 fill-current" />
                    Best Seller
                  </div>
                )}

                {/* Product image placeholder */}
                <div className="flex h-40 items-center justify-center rounded-lg bg-gray-700/30 mb-4">
                  <div className="h-24 w-24 rounded-lg bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                    <span className="text-3xl font-bold text-gray-400">
                      {product.name.split(" ").pop()?.[0]}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400 flex-1">
                  {product.description}
                </p>

                <div className="mt-4 border-t border-gray-700 pt-4">
                  <div className="text-2xl font-bold">{product.price}</div>
                  <div className="text-xs text-gray-500">
                    or {product.emi} for 12 months
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link href="/hardware">
            <Button variant="white" size="lg" className="gap-2">
              View All Hardware
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
