"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PRICING_PLANS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes! All plans come with a 14-day free trial. No credit card required. Cancel anytime.",
  },
  {
    q: "Can I switch plans later?",
    a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
  },
  {
    q: "Is there a setup fee?",
    a: "No. There are zero setup fees. We also provide free onboarding and training for all plans.",
  },
  {
    q: "Do you offer hardware bundles with plans?",
    a: "Yes, we offer discounted hardware bundles with our Pro and Enterprise plans. Contact us for custom quotes.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, credit/debit cards, net banking, and bank transfers. Annual plans get a 20% discount.",
  },
  {
    q: "Is my data secure?",
    a: "Your data is encrypted at rest and in transit. We use bank-grade security with daily backups and 99.9% uptime.",
  },
];

export default function PricingPage() {
  return (
    <div className="font-sans text-[#1a1c1e]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e8edf5] to-[#f8fafc] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-[#3B82F6]">
              Plans
            </span>
            <h1 className="mt-3 text-[2.5rem] md:text-[3rem] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Simple plans for every stage
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#475569] leading-relaxed">
              Choose the plan that fits your business. Contact us for a quote and
              onboarding support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="bg-white py-4 lg:py-8">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {PRICING_PLANS.map((plan) => (
              <motion.div
                key={plan.name}
                variants={staggerItem}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 lg:p-10 transition-all duration-300",
                  plan.popular
                    ? "border-[#3B82F6] bg-[#3B82F6]/[0.02] shadow-2xl shadow-[#3B82F6]/10 scale-[1.02] z-10"
                    : "border-[#E2E8F0] bg-white hover:border-[#CBD5E1] hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#3B82F6] px-5 py-1.5 text-sm font-semibold text-white">
                    Best Value
                  </div>
                )}

                <div>
                  <h3 className="text-[1.375rem] md:text-[1.5rem] font-semibold leading-[1.2] text-[#0F172A]">{plan.name}</h3>
                  <p className="mt-3 text-sm text-[#64748B]">{plan.description}</p>
                </div>

                <div className="my-8 h-px bg-[#E2E8F0]" />

                <ul className="flex flex-col gap-3.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-[#334155]">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3B82F6]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-10">
                  <Link href="/contact" className="block">
                    <Button
                      variant={plan.popular ? "default" : "outline"}
                      className="w-full gap-2"
                      size="lg"
                    >
                      Contact for quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-[#F8FAFC] py-20 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Frequently asked questions
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 mx-auto max-w-3xl grid grid-cols-1 gap-4"
          >
            {faqs.map((faq) => (
              <motion.div
                key={faq.q}
                variants={staggerItem}
                className="rounded-xl border border-[#E2E8F0] bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#3B82F6]" />
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
