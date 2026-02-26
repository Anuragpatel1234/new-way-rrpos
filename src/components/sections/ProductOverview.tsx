"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Zap,
  Package,
  BarChart3,
  Store,
  FileCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Package,
  BarChart3,
  Store,
  FileCheck,
  Users,
};

const products = [
  {
    icon: "Zap",
    title: "Billing & Payments",
    description: "Generate invoices in seconds. Multi-payment modes, split billing, and instant checkout.",
    href: "/features#billing",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: "Package",
    title: "Inventory Management",
    description: "Track stock in real-time. Auto alerts, batch management, and purchase orders.",
    href: "/features#inventory",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: "BarChart3",
    title: "Reports & Analytics",
    description: "Live dashboards with sales trends, profit margins, and staff performance.",
    href: "/features#reports",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: "Store",
    title: "Multi-Store",
    description: "Manage all branches from one place. Centralized pricing, inventory, and reporting.",
    href: "/features#multistore",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: "FileCheck",
    title: "GST & Compliance",
    description: "Auto GST calculation, e-invoicing, and GSTR-ready reports built right in.",
    href: "/features#gst",
    color: "bg-rose-50 text-rose-600",
  },
  {
    icon: "Users",
    title: "Customer Loyalty",
    description: "Points, rewards, and targeted offers. Build lasting customer relationships.",
    href: "/features#loyalty",
    color: "bg-cyan-50 text-cyan-600",
  },
];

export default function ProductOverview() {
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
            Products
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
            See your whole business click into place
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to run, manage, and grow your retail store —
            from billing to analytics, all in one platform.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => {
            const Icon = iconMap[product.icon];
            return (
              <motion.div key={product.title} variants={staggerItem}>
                <Link
                  href={product.href}
                  className="group flex flex-col rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-gray-200 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${product.color}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
