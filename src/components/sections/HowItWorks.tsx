"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ScanBarcode, Receipt, CreditCard, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: ScanBarcode,
    title: "Scan",
    description: "Scan the barcode or search by name to add items to cart instantly.",
    color: "bg-blue-50 text-blue-600 border-blue-200",
  },
  {
    icon: Receipt,
    title: "Bill",
    description: "Generate a GST-compliant invoice with one tap. Applied discounts calculated automatically.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-200",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Accept cash, UPI, card, or split payments. Everything reconciled automatically.",
    color: "bg-violet-50 text-violet-600 border-violet-200",
  },
  {
    icon: BarChart3,
    title: "Report",
    description: "Every transaction flows into real-time dashboards. Insights at your fingertips.",
    color: "bg-orange-50 text-orange-600 border-orange-200",
  },
];

export default function HowItWorks() {
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
            How it works
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            Four steps to faster billing
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            From scan to report in seconds. Here&apos;s how RR POS simplifies
            your retail workflow.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Connector Line (desktop only) */}
          <div className="pointer-events-none absolute top-24 left-[12.5%] right-[12.5%] hidden h-0.5 bg-gradient-to-r from-blue-200 via-violet-200 to-orange-200 lg:block" />

          {steps.map((step, i) => (
            <motion.div key={step.title} variants={staggerItem} className="relative text-center">
              <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                <div className={`absolute inset-0 rounded-2xl border ${step.color} opacity-30`} />
                <div className={`relative flex h-14 w-14 items-center justify-center rounded-xl ${step.color}`}>
                  <step.icon className="h-7 w-7" />
                </div>
                <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground text-xs font-bold text-white">
                  {i + 1}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
