"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { ArrowRight, Target, Eye, Heart, Shield, Zap, Users } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Speed First",
    description: "Every feature is optimized for speed. We believe your billing software should never slow you down.",
  },
  {
    icon: Heart,
    title: "Customer Obsessed",
    description: "We build for real store owners, not boardrooms. Every update comes from listening to our users.",
  },
  {
    icon: Shield,
    title: "Reliability",
    description: "99.9% uptime with offline mode. Your POS works even when the internet doesn't.",
  },
  {
    icon: Users,
    title: "Simplicity",
    description: "Powerful doesn't mean complex. Our interface is designed for staff to learn in under an hour.",
  },
];

const milestones = [
  { year: "2020", event: "RR POS founded in Chennai with a vision to simplify retail billing" },
  { year: "2021", event: "Launched V1 with billing, inventory, and GST. First 100 stores onboarded." },
  { year: "2022", event: "Multi-store management and analytics dashboard launched. 1,000+ stores." },
  { year: "2023", event: "Hardware ecosystem launched. Partnered with top POS hardware manufacturers." },
  { year: "2024", event: "3,500+ stores. Loyalty programs, advanced reporting, and API access released." },
  { year: "2025", event: "5,000+ stores. Enterprise plans and franchise management launched." },
];

export default function AboutPage() {
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
              About Us
            </span>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              We&apos;re building the future of retail tech
            </h1>
            <p className="mt-6 text-lg text-gray-600 lg:text-xl">
              RR POS started with a simple belief: every retail store deserves
              fast, reliable, and affordable technology to grow their business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-gradient-to-br from-primary/5 to-white p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-7 w-7 text-primary" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">Our Mission</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                To empower every retail business in India with world-class billing
                and management technology — accessible, affordable, and built for
                real-world operations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl border border-gray-200 bg-gradient-to-br from-accent/5 to-white p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10">
                <Eye className="h-7 w-7 text-accent" />
              </div>
              <h2 className="mt-6 text-2xl font-bold text-foreground">Our Vision</h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                To become India&apos;s most trusted retail technology platform —
                powering 100,000+ stores with smart, integrated POS solutions by
                2028.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Why choose RR POS
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              These are the principles that guide everything we build.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.div
                key={value.title}
                variants={staggerItem}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              Our journey
            </h2>
          </motion.div>

          <div className="mt-12 mx-auto max-w-2xl">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 pb-8 last:pb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-4">
                  <div className="text-sm font-semibold text-primary">{m.year}</div>
                  <p className="mt-1 text-base text-gray-600">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to join 5,000+ stores?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Start your free trial today and see the difference.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button variant="white" size="xl" className="gap-2">
                  Book a Free Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
