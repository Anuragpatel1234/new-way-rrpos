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
        <section className="relative min-h-[450px] overflow-hidden bg-[#1b3b5a] flex items-center px-12 lg:px-24 pt-[72px]">
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-display-lg font-extrabold text-white tracking-tight mb-4 text-5xl lg:text-6xl">
              Elevating Transactional Intelligence
            </h1>
            <p className="text-[#87a5ca] text-lg mb-8 leading-relaxed">
              Discover POS Solutions: A comprehensive ecosystem of touch terminals, handhelds, and peripherals designed for the modern enterprise.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#d8e3f4] text-[#121c28] px-8 py-3 rounded-md font-bold transition-all hover:bg-[#bcc7d8]">
                Browse Catalog
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-md font-bold hover:bg-white/10">
                Request Quote
              </button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
            <img
              className="w-full h-full object-cover"
              alt="sleek modern point of sale terminal"
              src="/products/hero-banner-new.png"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#1b3b5a] via-transparent to-transparent"></div>
          </div>
        </section>

        <SuteraShowcase />
      </main>
    </div>
  );
}
