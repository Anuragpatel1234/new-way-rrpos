"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HARDWARE_PRODUCTS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  ArrowRight,
  Star,
  Monitor,
  ScanBarcode,
  Printer,
  Lock,
  Package,
  Check,
  Wifi,
  Battery,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

const hardwareDetails = [
  {
    id: "terminal",
    icon: Monitor,
    name: "RR POS Terminal",
    tagline: "The all-in-one billing powerhouse",
    description:
      "A purpose-built POS terminal with a 15.6\" dual touchscreen, built-in thermal printer, and powerful processor. Customer-facing display for transparency. Designed for all-day retail operations.",
    price: "₹32,999",
    emi: "₹2,750/mo for 12 months",
    specs: [
      "15.6\" + 10.1\" dual touchscreen",
      "Built-in 80mm thermal printer",
      "Quad-core processor, 4GB RAM",
      "Wi-Fi, Ethernet, Bluetooth",
      "Customer-facing display",
      "Cash drawer port",
      "Android 12 / Windows option",
      "2-year warranty",
    ],
    highlight: true,
  },
  {
    id: "scanner",
    icon: ScanBarcode,
    name: "Barcode Scanner",
    tagline: "Scan at the speed of retail",
    description:
      "High-speed 1D/2D barcode scanner with wireless connectivity. Ergonomic design for comfortable all-day use. Reads damaged and screen barcodes.",
    price: "₹3,499",
    emi: "₹292/mo for 12 months",
    specs: [
      "1D and 2D barcode support",
      "2.4GHz wireless + Bluetooth",
      "12-hour battery life",
      "100m wireless range",
      "Reads screen barcodes",
      "IP54 dust/water resistant",
      "Plug-and-play USB",
      "1-year warranty",
    ],
    highlight: false,
  },
  {
    id: "printer",
    icon: Printer,
    name: "Thermal Printer",
    tagline: "Fast receipts, zero ink costs",
    description:
      "80mm high-speed thermal printer with auto-cutter. USB, Bluetooth, and Wi-Fi connectivity. Print complete receipts in under a second.",
    price: "₹5,999",
    emi: "₹500/mo for 12 months",
    specs: [
      "80mm thermal printing",
      "250mm/s print speed",
      "Auto-cutter",
      "USB + Bluetooth + Wi-Fi",
      "ESC/POS compatible",
      "Paper near-end sensor",
      "Wall-mount support",
      "1-year warranty",
    ],
    highlight: false,
  },
  {
    id: "drawer",
    icon: Lock,
    name: "Cash Drawer",
    tagline: "Secure cash management",
    description:
      "Heavy-duty metal cash drawer with 5 bill and 8 coin compartments. Auto-opens on sale completion. RJ11 and USB trigger support.",
    price: "₹3,999",
    emi: "₹334/mo for 12 months",
    specs: [
      "Heavy-duty steel construction",
      "5 bill + 8 coin compartments",
      "Auto-open on sale",
      "RJ11 + USB trigger",
      "Key lock for security",
      "Removable coin tray",
      "Under-counter mountable",
      "2-year warranty",
    ],
    highlight: false,
  },
];

const bundles = [
  {
    name: "Starter Bundle",
    items: ["POS Terminal", "Barcode Scanner"],
    originalPrice: "₹36,498",
    bundlePrice: "₹33,999",
    save: "Save ₹2,499",
  },
  {
    name: "Pro Bundle",
    items: ["POS Terminal", "Barcode Scanner", "Thermal Printer"],
    originalPrice: "₹42,497",
    bundlePrice: "₹38,999",
    save: "Save ₹3,498",
    popular: true,
  },
  {
    name: "Complete Bundle",
    items: ["POS Terminal", "Barcode Scanner", "Thermal Printer", "Cash Drawer"],
    originalPrice: "₹46,496",
    bundlePrice: "₹41,999",
    save: "Save ₹4,497",
  },
];

export default function HardwarePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-foreground pt-32 pb-20 lg:pt-40 lg:pb-28 text-white">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/15 blur-[150px]" />
          <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Hardware
            </span>
            <h1 className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl">
              Built for speed. Designed for retail.
            </h1>
            <p className="mt-6 text-lg text-gray-400 lg:text-xl">
              Purpose-built hardware that works seamlessly with RR POS software.
              Reliable, fast, and designed for all-day retail operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hardware Products */}
      {hardwareDetails.map((product, idx) => (
        <section
          key={product.id}
          id={product.id}
          className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
        >
          <div className="mx-auto max-w-[1320px] px-6 py-24 lg:px-8 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2"
            >
              {/* Visual */}
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-12 lg:p-16">
                  <div className="flex h-48 w-48 items-center justify-center rounded-2xl bg-white shadow-lg border border-gray-100">
                    <product.icon className="h-24 w-24 text-gray-300" strokeWidth={1} />
                  </div>
                  {product.highlight && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
                      <Star className="h-3 w-3 fill-current" />
                      Best Seller
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
                  {product.name}
                </h2>
                <p className="mt-2 text-lg font-medium text-primary">
                  {product.tagline}
                </p>
                <p className="mt-4 text-base leading-relaxed text-gray-600 lg:text-lg">
                  {product.description}
                </p>

                <div className="mt-6 flex items-baseline gap-3">
                  <span className="text-3xl font-bold text-foreground">{product.price}</span>
                  <span className="text-sm text-gray-500">or {product.emi}</span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {product.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check className="h-4 w-4 shrink-0 text-primary" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">
                  <Link href="/contact">
                    <Button className="gap-2">
                      Get a Quote
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline">Book Demo</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Hardware Bundles */}
      <section id="setup" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Bundles
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
              Save more with hardware bundles
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get everything you need in one package at a discounted price.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {bundles.map((bundle) => (
              <motion.div
                key={bundle.name}
                variants={staggerItem}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-lg",
                  bundle.popular
                    ? "border-primary bg-primary/[0.02] shadow-xl shadow-primary/10"
                    : "border-gray-200 bg-white"
                )}
              >
                {bundle.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-foreground">{bundle.name}</h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {bundle.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-gray-100 pt-4">
                  <div className="text-sm text-gray-400 line-through">{bundle.originalPrice}</div>
                  <div className="text-3xl font-bold text-foreground">{bundle.bundlePrice}</div>
                  <div className="mt-1 text-sm font-medium text-green-600">{bundle.save}</div>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="block">
                    <Button
                      variant={bundle.popular ? "default" : "outline"}
                      className="w-full gap-2"
                    >
                      Get This Bundle
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
