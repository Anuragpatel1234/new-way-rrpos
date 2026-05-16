"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Monitor,
  Terminal,
  TabletSmartphone,
  CreditCard,
  ScanBarcode,
  Printer,
  Scale,
  ShoppingCart
} from "lucide-react";

import PRODUCT_CATEGORIES from "../../../updated_categories.json";
import SuteraShowcase from "../../components/SuteraShowcase";

// Map category names to icons
const getCategoryIcon = (categoryName: string) => {
  switch (categoryName) {
    case "Touch POS":
      return <Monitor className="w-5 h-5" />;
    case "Handheld POS":
      return <TabletSmartphone className="w-5 h-5" />;
    case "Channel POS":
      return <Terminal className="w-5 h-5" />;
    case "Cash Register":
      return <CreditCard className="w-5 h-5" />;
    case "Barcode Scanner":
      return <ScanBarcode className="w-5 h-5" />;
    case "Receipt Printer":
      return <Printer className="w-5 h-5" />;
    case "Scale":
      return <Scale className="w-5 h-5" />;
    default:
      return <Monitor className="w-5 h-5" />;
  }
};

export default function ProductPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (categoryName: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="bg-[#faf9fc] text-[#1a1c1e] min-h-screen font-sans">
      <main>
        {/* Hero: pt matches fixed navbar (72px) so navy fills under it — no page-bg strip */}
        {/* Hero: Increased height and updated to brand color */}
        {/* Hero: Full Screen Height and refined typography */}
        <section className="relative h-screen overflow-hidden bg-[#04152B] flex items-center px-6 sm:px-12 lg:px-24 pt-[80px]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
            <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-500/5 blur-[100px]" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] font-bold text-white tracking-tight leading-[1.05] mb-6 drop-shadow-sm">
              Elevating Transactional Intelligence
            </h1>
            <p className="text-[#94A3B8] text-base md:text-lg lg:text-xl mb-10 leading-relaxed max-w-xl opacity-90">
              Discover POS Solutions: A comprehensive ecosystem of touch terminals, handhelds, and peripherals designed for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#product-showcase" className="bg-white text-[#04152B] px-10 py-4 rounded-xl text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-xl text-center">
                Browse Catalog
              </a>
              <Link href="/contact" className="border border-white/20 text-white px-10 py-4 rounded-xl text-sm font-bold hover:bg-white/10 transition-all text-center backdrop-blur-sm">
                Request Quote
              </Link>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block select-none">
            <img
              className="w-full h-full object-cover"
              alt="sleek modern point of sale terminal"
              src="/products/hero-banner-new.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#04152B] via-[#04152B]/40 to-transparent"></div>
          </div>
        </section>

        <div id="product-showcase">
          <SuteraShowcase />
        </div>
      </main>
    </div>
  );
}
