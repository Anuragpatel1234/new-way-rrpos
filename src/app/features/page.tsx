"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Package,
  BarChart3,
  Store,
  FileCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    id: "billing",
    icon: Zap,
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
    image: "/images/features/billing.png",
  },
  {
    id: "inventory",
    icon: Package,
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
    image: "/images/features/inventory.png",
  },
  {
    id: "reports",
    icon: BarChart3,
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
    image: "/images/features/analytics.png",
  },
  {
    id: "multistore",
    icon: Store,
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
    image: "/images/features/multistore.png",
  },
  {
    id: "gst",
    icon: FileCheck,
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
    image: "/images/features/gst.png",
  },
  {
    id: "loyalty",
    icon: Users,
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
    image: "/images/features/loyalty.png",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as any,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export default function FeaturesPage() {
  return (
    <div className="font-sans text-[#1a1c1e] relative overflow-hidden bg-[#04152B]">
      {/* Redesigned Hero Section */}
      <section
        className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#04152B] pt-40 pb-10"
      >
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 10 L90 10 L90 90 L10 90 Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3Ccircle cx='10' cy='10' r='1' fill='white'/%3E%3Ccircle cx='90' cy='10' r='1' fill='white'/%3E%3Ccircle cx='90' cy='90' r='1' fill='white'/%3E%3Ccircle cx='10' cy='90' r='1' fill='white'/%3E%3Cpath d='M10 50 L30 50 L40 40 L60 40 L70 50 L90 50' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
              backgroundSize: '200px 200px'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#04152B] via-[#04152B]/95 to-[#061e3d]" />
          
          {/* Animated Glow Orbs */}
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-indigo-600/10 blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container relative z-10 mx-auto px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center"
          >
            {/* Logo/Brand Text */}
            <motion.div
              variants={fadeInUp}
              className="mb-8 flex items-center justify-center"
            >
              <span className="text-2xl font-black uppercase tracking-[0.5em] text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                RR POS
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="max-w-4xl text-[2.25rem] font-bold leading-[1.1] tracking-tight text-white md:text-[3rem] lg:text-[4rem]"
            >
              Everything your store needs <br className="hidden md:block" />
              to thrive
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 max-w-2xl text-lg leading-relaxed text-[#94A3B8] md:text-xl opacity-80"
            >
              From lightning-fast billing to deep analytics, RR POS gives you every tool 
              to run, manage, and grow your retail business.
            </motion.p>

            {/* Feature Chips Grid */}
            <motion.div
              variants={fadeInUp}
              className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {features.map((feature) => (
                <motion.a
                  key={feature.id}
                  href={`#${feature.id}`}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.12)" }}
                  className="group relative flex items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 px-10 py-4 backdrop-blur-md transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_25px_rgba(59,130,246,0.25)]"
                >
                  <span className="text-sm font-bold tracking-wide text-white/90 transition-colors group-hover:text-white">
                    {feature.title}
                  </span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </motion.a>
              ))}
            </motion.div>

            {/* Bottom Tech Illustration */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 flex flex-col items-center"
            >
              <div className="relative h-32 w-48">
                <svg viewBox="0 0 160 120" className="h-full w-full overflow-visible">
                  <defs>
                    <linearGradient id="hexGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                    <filter id="glow-large" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                      <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>
                  <g stroke="white" strokeWidth="0.5" strokeOpacity="0.15">
                    <line x1="80" y1="60" x2="30" y2="20" />
                    <line x1="80" y1="60" x2="130" y2="20" />
                    <line x1="80" y1="60" x2="30" y2="100" />
                    <line x1="80" y1="60" x2="130" y2="100" />
                    <line x1="80" y1="60" x2="150" y2="60" />
                    <line x1="80" y1="60" x2="10" y2="60" />
                  </g>
                  {[
                    {x:30, y:20}, {x:130, y:20}, {x:30, y:100}, 
                    {x:130, y:100}, {x:150, y:60}, {x:10, y:60}
                  ].map((node, i) => (
                    <motion.circle
                      key={i}
                      cx={node.x}
                      cy={node.y}
                      r="1.5"
                      fill="#3B82F6"
                      animate={{ opacity: [0.2, 1, 0.2], scale: [1, 2, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                    />
                  ))}
                  <g filter="url(#glow-large)">
                    <motion.path
                      d="M80 35 L93 42.5 L93 57.5 L80 65 L67 57.5 L67 42.5 Z"
                      fill="url(#hexGradient)"
                      animate={{ fillOpacity: [0.5, 0.8, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.path
                      d="M65 55 L78 62.5 L78 77.5 L65 85 L52 77.5 L52 62.5 Z"
                      fill="url(#hexGradient)"
                      animate={{ fillOpacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    />
                    <motion.path
                      d="M95 55 L108 62.5 L108 77.5 L95 85 L82 77.5 L82 62.5 Z"
                      fill="url(#hexGradient)"
                      animate={{ fillOpacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    />
                  </g>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature Sections */}
      {features.map((feature, idx) => {
        const isDark = idx % 2 === 1;
        return (
          <section
            key={feature.id}
            id={feature.id}
            className={`scroll-mt-[4.5rem] relative overflow-hidden min-h-screen flex flex-col justify-center ${isDark ? "bg-[#04152B] text-white" : "bg-white text-[#1a1c1e]"}`}
          >
            <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-8 lg:py-32 relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2"
              >
                {/* Content */}
                <div className={isDark ? "lg:order-2" : ""}>
                  <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl ${isDark ? "bg-white/10 text-[#94A3B8] ring-1 ring-white/20" : "bg-[#f4f3f6] text-[#04152B] shadow-sm"}`}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h2 className={`mt-8 text-[2rem] md:text-[2.5rem] font-bold tracking-tight leading-tight ${isDark ? "text-white" : "text-[#04152B]"}`}>
                    {feature.title}
                  </h2>
                  <h3 className={`mt-3 text-xl font-semibold ${isDark ? "text-[#94A3B8]" : "text-[#3B82F6]"}`}>
                    {feature.subtitle}
                  </h3>
                  <p className={`mt-6 text-base md:text-lg leading-relaxed ${isDark ? "text-[#94A3B8]" : "text-[#545f6e]"}`}>
                    {feature.description}
                  </p>
                  <div className="mt-10">
                    <Link href="/contact">
                      <Button
                        variant={isDark ? "white" : "default"}
                        className="gap-2 h-12 px-8 text-base font-bold transition-all shadow-lg"
                      >
                        Book a Demo
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Visual - Feature Image */}
                <div className={isDark ? "lg:order-1" : ""}>
                  <div className="relative group">
                    <div className={`absolute -inset-4 rounded-[3rem] blur-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 ${isDark ? "bg-blue-600/20" : "bg-blue-400/10"}`} />
                    <div className={`relative overflow-hidden rounded-[2rem] border transition-transform duration-700 group-hover:scale-[1.02] shadow-2xl ${isDark ? "bg-[#0a1628] border-white/10" : "bg-white border-[#e2e8f0]"}`}>
                      <img 
                        src={(feature as any).image} 
                        alt={feature.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
