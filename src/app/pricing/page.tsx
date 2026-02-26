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
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-light/20 to-white pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Pricing
            </span>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-lg text-gray-600 lg:text-xl">
              No hidden fees. No long-term contracts. Start free for 14 days,
              then pick the plan that works for your business.
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
                    ? "border-primary bg-primary/[0.02] shadow-2xl shadow-primary/10 scale-[1.02] z-10"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-5 py-1.5 text-sm font-semibold text-white">
                    Best Value
                  </div>
                )}

                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan.name}</h3>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-base text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">{plan.description}</p>
                </div>

                <div className="my-8 h-px bg-gray-100" />

                <ul className="flex flex-col gap-3.5 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
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
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-gray-400"
          >
            All prices in INR. GST extra. Annual billing available at 20% discount.
          </motion.p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-gray-50 py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
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
                className="rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <h3 className="font-semibold text-foreground">{faq.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{faq.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
