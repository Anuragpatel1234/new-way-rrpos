"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  ShoppingBag,
  Package,
  BarChart3,
  Store,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data — one entry per nav dropdown item                             */
/* ------------------------------------------------------------------ */

interface SolutionPillar {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  icon: LucideIcon;
  color: string;
  featureHref: string;
  featureLabel: string;
}

const PILLARS: SolutionPillar[] = [
  {
    id: "retail",
    eyebrow: "Retail POS",
    title: "Sell faster at every counter",
    subtitle:
      "From single-outlet shops to multi-brand chains — the checkout experience your customers deserve.",
    description:
      "RR POS combines sub-2-second billing, barcode-first search, and multi-payment acceptance into a single register flow. Manage thousands of SKUs with size/colour matrices, run omnichannel loyalty, and keep every aisle profitable with real-time margin visibility.",
    outcomes: [
      "Checkout speed under 2 seconds per transaction",
      "Unified inventory across online and offline channels",
      "Customer loyalty and targeted promotions built in",
      "GST-compliant invoicing with zero manual effort",
      "Flexible payment: cash, UPI, card, and store credit",
    ],
    icon: ShoppingBag,
    color: "bg-blue-50 text-blue-600",
    featureHref: "/features#billing",
    featureLabel: "Explore billing capabilities",
  },
  {
    id: "inventory",
    eyebrow: "Inventory Tech",
    title: "Stock truth, not guesswork",
    subtitle:
      "Real-time visibility from warehouse to shelf — so you never lose a sale to a stockout.",
    description:
      "Track every product across every location with automatic low-stock alerts, purchase order generation, and batch/expiry management. Transfers between branches happen in a tap, and your books stay in sync without end-of-day reconciliation.",
    outcomes: [
      "Zero-surprise restocking with automatic PO suggestions",
      "Batch and expiry tracking for perishable goods",
      "One-tap inter-store transfers with full audit trail",
      "Barcode label generation and supplier management",
      "Multi-warehouse sync without manual reconciliation",
    ],
    icon: Package,
    color: "bg-emerald-50 text-emerald-600",
    featureHref: "/features#inventory",
    featureLabel: "Explore inventory capabilities",
  },
  {
    id: "analytics",
    eyebrow: "Analytics Hub",
    title: "Decisions backed by data",
    subtitle:
      "50+ report types, beautiful dashboards, scheduled exports — the insights layer your business needs.",
    description:
      "See daily sales, profit margins, top sellers, and staff performance at a glance. Drill into customer purchase patterns, compare branches, and schedule PDF/Excel reports straight to your inbox. Data-driven growth, not gut feel.",
    outcomes: [
      "Daily, weekly, and monthly sales dashboards",
      "Product-level margin and sell-through analysis",
      "Staff performance and peak-hour heatmaps",
      "Scheduled email reports in Excel, PDF, or CSV",
      "Branch comparison and consolidated P&L views",
    ],
    icon: BarChart3,
    color: "bg-violet-50 text-violet-600",
    featureHref: "/features#reports",
    featureLabel: "Explore reporting capabilities",
  },
  {
    id: "multistore",
    eyebrow: "Multi-Store",
    title: "All branches, one command centre",
    subtitle:
      "Scale from two shops to twenty without adding operational complexity.",
    description:
      "Centralize pricing, promotions, and staff roles while keeping per-store flexibility where it matters. Monitor every location from a single dashboard with real-time sync, role-based access, and consolidated reporting.",
    outcomes: [
      "Centralized product catalog and pricing control",
      "Per-store inventory with consolidated reporting",
      "Role-based access for owners, managers, and cashiers",
      "Inter-store stock transfers and promotions",
      "Real-time sync across all locations",
    ],
    icon: Store,
    color: "bg-orange-50 text-orange-600",
    featureHref: "/features#multistore",
    featureLabel: "Explore multi-store capabilities",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SolutionsPage() {
  return (
    <div className="font-sans text-[#1a1c1e]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e8edf5] to-[#f8fafc] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 bottom-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px]" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#3B82F6]/5 blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold text-[#0F172A] sm:text-5xl lg:text-6xl tracking-tight">
              Built for how you sell&nbsp;and&nbsp;scale
            </h1>
            <p className="mt-6 text-lg text-[#475569] lg:text-xl leading-relaxed">
              Purpose-built modules that work together so you can run, manage,
              and grow your retail business from a single platform.
            </p>

            {/* Jump chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {PILLARS.map((p) => (
                <a
                  key={p.id}
                  href={`#${p.id}`}
                  className="rounded-full border border-[#E2E8F0] bg-white px-5 py-2.5 text-sm font-medium text-[#475569] transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6] shadow-sm"
                >
                  {p.eyebrow}
                </a>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gap-2">
                  Book a Demo
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="gap-2">
                  See All Capabilities
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillar sections */}
      {PILLARS.map((pillar, idx) => (
        <section
          key={pillar.id}
          id={pillar.id}
          className={`scroll-mt-[5.5rem] ${idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
        >
          <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-8 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              {/* Copy */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${pillar.color}`}
                >
                  <pillar.icon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-sm font-semibold uppercase tracking-wider text-[#3B82F6]">
                  {pillar.eyebrow}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#0F172A] sm:text-4xl tracking-tight">
                  {pillar.title}
                </h2>
                <p className="mt-2 text-lg font-medium text-[#3B82F6]/80">
                  {pillar.subtitle}
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#475569] lg:text-lg">
                  {pillar.description}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link href="/contact">
                    <Button className="gap-2">
                      Book a Demo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href={pillar.featureHref}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[#3B82F6] transition-colors hover:text-[#2563EB]"
                  >
                    {pillar.featureLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Outcomes card */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
                  <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#94A3B8]">
                    Key Outcomes
                  </h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-3"
                  >
                    {pillar.outcomes.map((line) => (
                      <motion.div
                        key={line}
                        variants={staggerItem}
                        className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-[#F1F5F9]"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3B82F6]" />
                        <span className="text-sm text-[#334155]">{line}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

    </div>
  );
}
