"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Zap,
  Package,
  BarChart3,
  Store,
  FileCheck,
  Users,
  ArrowRight,
  Check,
  ScanBarcode,
  CreditCard,
  Receipt,
  Bell,
  Shield,
  Smartphone,
} from "lucide-react";

const features = [
  {
    id: "billing",
    icon: Zap,
    color: "bg-blue-50 text-blue-600",
    title: "Billing Management",
    subtitle: "Generate invoices in under 2 seconds",
    description:
      "The fastest billing engine for retail. Barcode scanning, quick search, smart cart, and multi-payment support make every checkout a breeze.",
    capabilities: [
      "Barcode & name-based product search",
      "Quick-add favorites and recent items",
      "Split billing and hold/recall",
      "Multi-payment: Cash, UPI, Card, Credit",
      "Instant thermal receipt printing",
      "Custom invoice templates",
      "Return and exchange management",
      "Discount and coupon support",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    color: "bg-emerald-50 text-emerald-600",
    title: "Inventory Management",
    subtitle: "Real-time stock control across all stores",
    description:
      "Never miss a sale due to stockouts. Track every product, get automatic alerts, and manage purchase orders — all from one dashboard.",
    capabilities: [
      "Real-time stock tracking",
      "Auto low-stock alerts and notifications",
      "Batch and expiry date management",
      "Purchase order automation",
      "Multi-warehouse and store sync",
      "Stock transfer between branches",
      "Barcode label generation",
      "Supplier management",
    ],
  },
  {
    id: "reports",
    icon: BarChart3,
    color: "bg-violet-50 text-violet-600",
    title: "Reports & Analytics",
    subtitle: "Data-driven decisions, not guesswork",
    description:
      "Beautiful dashboards with 50+ report types. From daily sales to profit margins, staff performance, and trends — everything you need to grow.",
    capabilities: [
      "Daily, weekly, and monthly sales reports",
      "Profit margin analysis by product",
      "Top-selling products ranking",
      "Staff performance tracking",
      "Customer purchase analytics",
      "Inventory valuation reports",
      "Export to Excel, PDF, and CSV",
      "Scheduled email reports",
    ],
  },
  {
    id: "multistore",
    icon: Store,
    color: "bg-orange-50 text-orange-600",
    title: "Multi-Store Management",
    subtitle: "All branches, one dashboard",
    description:
      "Manage pricing, inventory, and staff across all your stores from a single control panel. Scale without complexity.",
    capabilities: [
      "Centralized product and pricing control",
      "Per-store inventory tracking",
      "Branch-level staff management",
      "Consolidated reporting",
      "Inter-store stock transfers",
      "Role-based access control",
      "Store-specific promotions",
      "Real-time sync across locations",
    ],
  },
  {
    id: "gst",
    icon: FileCheck,
    color: "bg-rose-50 text-rose-600",
    title: "GST & Compliance",
    subtitle: "Tax complexity, simplified",
    description:
      "Automatic GST calculation on every transaction. Generate GSTR-ready reports, e-invoices, and stay 100% compliant without manual effort.",
    capabilities: [
      "Automatic GST calculation (CGST, SGST, IGST)",
      "HSN code management",
      "GSTR-1 and GSTR-3B ready reports",
      "E-invoicing support",
      "E-way bill generation",
      "Tax-inclusive and exclusive pricing",
      "Multi-tax rate support",
      "Audit-ready transaction logs",
    ],
  },
  {
    id: "loyalty",
    icon: Users,
    color: "bg-cyan-50 text-cyan-600",
    title: "Customer Management",
    subtitle: "Build relationships that last",
    description:
      "Loyalty points, purchase history, targeted offers, and smart segmentation help you retain customers and increase repeat visits.",
    capabilities: [
      "Customer database with profiles",
      "Points-based loyalty program",
      "Purchase history tracking",
      "Targeted SMS and WhatsApp offers",
      "Customer segmentation",
      "Credit and dues management",
      "Birthday and anniversary rewards",
      "Feedback collection",
    ],
  },
];

export default function FeaturesPage() {
  return (
    <div className="font-sans text-[#1a1c1e]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e8edf5] to-[#f8fafc] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6]/5 blur-[120px]" />
        </div>
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-[2.5rem] md:text-[3rem] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
              Everything your store needs to thrive
            </h1>
            <p className="mt-6 text-base md:text-lg text-[#475569] leading-relaxed">
              From lightning-fast billing to deep analytics, RR POS gives you
              every tool to run, manage, and grow your retail business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {features.map((f) => (
                <a
                  key={f.id}
                  href={`#${f.id}`}
                  className="rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-sm font-medium text-[#475569] hover:border-[#3B82F6] hover:text-[#3B82F6] transition-colors shadow-sm"
                >
                  {f.title}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, idx) => (
        <section
          key={feature.id}
          id={feature.id}
          className={`scroll-mt-[5.5rem] ${idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}`}
        >
          <div className="mx-auto max-w-[1320px] px-6 py-20 lg:px-8 lg:py-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}>
                  <feature.icon className="h-7 w-7" />
                </div>
                <h2 className="mt-5 text-[1.75rem] md:text-[2rem] font-bold text-[#0F172A] tracking-tight leading-[1.15]">
                  {feature.title}
                </h2>
                <p className="mt-2 text-lg font-medium text-[#3B82F6]">
                  {feature.subtitle}
                </p>
                <p className="mt-4 text-base md:text-lg leading-relaxed text-[#475569]">
                  {feature.description}
                </p>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="gap-2">
                      Book a Demo
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Capabilities List */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#94A3B8] mb-5">
                    Capabilities
                  </h3>
                  <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 gap-3"
                  >
                    {feature.capabilities.map((cap) => (
                      <motion.div
                        key={cap}
                        variants={staggerItem}
                        className="flex items-start gap-3 rounded-lg p-2 transition-colors hover:bg-[#F1F5F9]"
                      >
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#3B82F6]" />
                        <span className="text-sm text-[#334155]">{cap}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-[#0F172A] py-20">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold text-white tracking-tight leading-[1.15]">
              Ready to transform your store?
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#94A3B8] leading-relaxed">
              Start your 14-day free trial. No credit card required.
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
    </div>
  );
}
