"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { INDUSTRIES } from "@/lib/constants";
import { ShoppingCart, Pill, Shirt, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShoppingCart,
  Pill,
  Shirt,
  Monitor,
};

export default function IndustryTabs() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 lg:py-32 bg-gray-50">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Built for every industry
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Keep your business growing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Purpose-built solutions for the industries that matter most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          {/* Tab Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {INDUSTRIES.map((ind, i) => {
              const Icon = iconMap[ind.icon];
              return (
                <button
                  key={ind.name}
                  onClick={() => setActive(i)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 cursor-pointer",
                    active === i
                      ? "bg-primary text-white shadow-lg shadow-primary/25"
                      : "bg-white text-gray-600 hover:text-foreground border border-gray-200 hover:border-gray-300"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {ind.name}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="mt-12 grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                  {INDUSTRIES[active].stats}
                </div>
                <h3 className="mt-4 text-3xl font-bold text-foreground">
                  {INDUSTRIES[active].name}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                  {INDUSTRIES[active].description}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {[
                    "Tailored billing workflows",
                    "Industry-specific inventory tools",
                    "Custom reporting dashboards",
                    "Specialized compliance features",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-700">
                      <svg className="h-5 w-5 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="gap-2">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Visual */}
              <div className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-xl shadow-black/5">
                <div className="rounded-lg bg-gray-50 p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-foreground">Quick Dashboard</h4>
                    <span className="text-xs text-gray-400">Live</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Today Sales", value: "₹87,450" },
                      { label: "Products", value: "2,340" },
                      { label: "Orders", value: "189" },
                      { label: "Revenue", value: "+18.2%" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-lg bg-white p-3 border border-gray-100">
                        <p className="text-[11px] text-gray-400">{s.label}</p>
                        <p className="mt-0.5 text-lg font-bold text-foreground">{s.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 rounded-lg bg-white p-3 border border-gray-100">
                    <p className="text-[11px] text-gray-400 mb-2">Recent Transactions</p>
                    {[
                      { name: "Invoice #1247", amount: "₹2,340" },
                      { name: "Invoice #1246", amount: "₹890" },
                      { name: "Invoice #1245", amount: "₹5,600" },
                    ].map((t) => (
                      <div key={t.name} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
                        <span className="text-xs text-gray-600">{t.name}</span>
                        <span className="text-xs font-medium text-foreground">{t.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
