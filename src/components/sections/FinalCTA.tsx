"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary py-24 lg:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/5 blur-[80px]" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-accent/10 blur-[80px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Make your next move
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Join 5,000+ retail stores that trust RR POS to power their business.
            Start your free trial today — no credit card required.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/contact">
              <Button variant="white" size="xl" className="gap-2">
                Book a Free Demo
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
              <Button
                variant="outline"
                size="xl"
                className="gap-2 border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50"
              >
                <Phone className="h-4 w-4" />
                Contact Sales
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
