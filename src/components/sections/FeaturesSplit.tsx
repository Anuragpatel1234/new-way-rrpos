"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const features = [
  {
    tag: "Billing",
    title: "Lightning-fast checkout that customers love",
    description:
      "Scan, bill, and collect payment in seconds. Support for barcode scanning, quick-add favorites, split billing, multi-payment modes, and instant receipt printing.",
    stats: [
      { value: "< 2s", label: "Avg. bill time" },
      { value: "99.9%", label: "Uptime" },
    ],
    points: [
      "Barcode & search-based billing",
      "Multi-payment (Cash, UPI, Card, Credit)",
      "Hold & recall bills",
      "Instant thermal receipt printing",
    ],
  },
  {
    tag: "Inventory",
    title: "Know your stock, always",
    description:
      "Real-time inventory tracking across all stores. Never miss a sale due to stockouts and never overstock again.",
    stats: [
      { value: "30%", label: "Less dead stock" },
      { value: "Real-time", label: "Sync" },
    ],
    points: [
      "Auto low-stock alerts",
      "Batch & expiry tracking",
      "Purchase order automation",
      "Multi-warehouse support",
    ],
  },
  {
    tag: "Analytics",
    title: "Decisions powered by data, not guesswork",
    description:
      "Beautiful live dashboards that show you exactly what matters — sales trends, profit margins, top products, and staff performance.",
    stats: [
      { value: "50+", label: "Report types" },
      { value: "Live", label: "Dashboards" },
    ],
    points: [
      "Daily/weekly/monthly sales reports",
      "Profit margin analysis",
      "Staff performance tracking",
      "Export to Excel & PDF",
    ],
  },
];

export default function FeaturesSplit() {
  return (
    <section className="relative py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Features
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Everything your store needs
          </h2>
        </motion.div>

        <div className="mt-20 flex flex-col gap-32">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {feature.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                  {feature.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                  {feature.description}
                </p>

                {/* Stats */}
                <div className="mt-6 flex gap-8">
                  {feature.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Points */}
                <div className="mt-6 flex flex-col gap-2.5">
                  {feature.points.map((point) => (
                    <div key={point} className="flex items-center gap-2.5 text-sm text-gray-700">
                      <svg className="h-4 w-4 shrink-0 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {point}
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/features">
                    <Button variant="outline" className="gap-2">
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Visual */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="relative rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg">
                  <div className="space-y-3">
                    {idx === 0 && (
                      <>
                        <div className="rounded-lg bg-white border border-gray-100 p-4">
                          <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-semibold text-foreground">New Sale</span>
                            <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700">Active</span>
                          </div>
                          {["Tata Salt 1kg × 2", "Amul Butter 500g × 1", "Surf Excel 2kg × 1"].map((item, i) => (
                            <div key={item} className="flex justify-between py-1.5 text-xs border-b border-gray-50 last:border-0">
                              <span className="text-gray-600">{item}</span>
                              <span className="font-medium">₹{[48, 275, 399][i]}</span>
                            </div>
                          ))}
                          <div className="flex justify-between pt-3 mt-2 border-t border-gray-200">
                            <span className="text-sm font-semibold">Total</span>
                            <span className="text-sm font-bold text-primary">₹722</span>
                          </div>
                        </div>
                      </>
                    )}
                    {idx === 1 && (
                      <>
                        <div className="rounded-lg bg-white border border-gray-100 p-4">
                          <span className="text-sm font-semibold text-foreground">Stock Overview</span>
                          <div className="mt-3 space-y-2">
                            {[
                              { name: "Tata Salt 1kg", qty: 234, status: "In Stock" },
                              { name: "Amul Milk 1L", qty: 12, status: "Low Stock" },
                              { name: "Maggi 4-pack", qty: 0, status: "Out of Stock" },
                            ].map((item) => (
                              <div key={item.name} className="flex items-center justify-between text-xs py-1.5">
                                <span className="text-gray-600">{item.name}</span>
                                <div className="flex items-center gap-2">
                                  <span className="font-medium">{item.qty}</span>
                                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                                    item.status === "In Stock" ? "bg-green-100 text-green-700" :
                                    item.status === "Low Stock" ? "bg-yellow-100 text-yellow-700" :
                                    "bg-red-100 text-red-700"
                                  }`}>{item.status}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                    {idx === 2 && (
                      <>
                        <div className="rounded-lg bg-white border border-gray-100 p-4">
                          <span className="text-sm font-semibold text-foreground">Sales Analytics</span>
                          <div className="mt-3 flex items-end gap-1 h-24">
                            {[60, 45, 70, 55, 80, 65, 90, 75, 85, 95, 70, 88].map((h, i) => (
                              <div key={i} className="flex-1 rounded-t bg-primary/20 hover:bg-primary/40 transition-colors" style={{ height: `${h}%` }} />
                            ))}
                          </div>
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            {[{ l: "Revenue", v: "₹4.2L" }, { l: "Profit", v: "₹68K" }, { l: "Growth", v: "+18%" }].map((s) => (
                              <div key={s.l} className="text-center">
                                <div className="text-xs text-gray-400">{s.l}</div>
                                <div className="text-sm font-bold text-foreground">{s.v}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="absolute -inset-2 -z-10 rounded-3xl bg-gradient-to-r from-primary/5 to-accent/5 blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
