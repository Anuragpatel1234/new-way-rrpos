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
  ShoppingCart,
  X
} from "lucide-react";

import PRODUCT_CATEGORIES from "../../../updated_categories.json";

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
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  const toggleSection = (categoryName: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <div className="bg-[#faf9fc] text-[#1a1c1e] min-h-screen font-sans">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[450px] overflow-hidden bg-[#1b3b5a] flex items-center px-12 lg:px-24">
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

        <div className="flex max-w-[1320px] mx-auto">
          {/* SideNavBar (Category Filter) */}
          <aside className="hidden lg:flex flex-col gap-2 p-4 pt-12 h-screen sticky top-20 w-64 bg-[#f4f3f6] border-r-0">
            <div className="px-4 mb-6">
              <h3 className="text-[#002542] font-bold text-lg">Categories</h3>
              <p className="text-[#43474d] text-xs uppercase tracking-widest font-semibold">
                Browse Catalog
              </p>
            </div>
            <nav className="flex flex-col gap-1 overflow-y-auto pb-24 max-h-[calc(100vh-160px)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {PRODUCT_CATEGORIES.map((category) => (
                <Link
                  key={category.name}
                  href={`#${category.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex items-center gap-3 p-3 text-[#545f6e] hover:bg-[#e9e8eb] hover:text-[#002542] rounded-lg transition-transform hover:translate-x-1"
                >
                  {getCategoryIcon(category.name)}
                  <span className="font-medium text-sm">{category.name}</span>
                </Link>
              ))}
            </nav>
          </aside>

          {/* Product Canvas */}
          <div className="flex-1 p-8 lg:p-12 space-y-24">
            {PRODUCT_CATEGORIES.map((category) => {
              const isExpanded = expandedSections[category.name];
              const displayedProducts = isExpanded
                ? category.products
                : category.products.slice(0, 4);

              return (
                <section key={category.name} id={category.name.toLowerCase().replace(/\s+/g, "-")}>
                  <div className="flex items-baseline gap-4 mb-10">
                    <h2 className="text-3xl font-black text-[#002542] tracking-tighter">
                      {category.name}
                    </h2>
                    <span className="h-px flex-1 bg-[#c3c6ce]/20"></span>
                    {category.products.length > 4 && (
                      <button
                        onClick={() => toggleSection(category.name)}
                        className="text-sm font-bold text-[#002542] hover:underline"
                      >
                        {isExpanded ? "Show Less" : "View All"}
                      </button>
                    )}
                  </div>

                  {/* Unified Card Grid for all categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {displayedProducts.map((product) => (
                      <div
                        key={product.name}
                        onClick={() => setSelectedProduct({ ...product, categoryName: category.name })}
                        className="bg-[#ffffff] p-6 rounded-xl shadow-sm hover:shadow-xl hover:shadow-[#002542]/5 transition-all group flex flex-col h-full cursor-pointer"
                      >
                        <div className="aspect-square bg-[#f4f3f6] rounded-lg mb-6 overflow-hidden flex items-center justify-center p-4">
                          <img
                            className="w-full h-full object-center object-contain mix-blend-multiply group-hover:scale-110 transition-transform"
                            alt={`${product.name} ${category.name}`}
                            src={product.image}
                          />
                        </div>
                        <span className="text-xs font-bold text-[#43474d] uppercase tracking-widest">
                          {category.name}
                        </span>
                        <h3 className="text-xl font-bold text-[#002542] mt-1 mb-2">
                          NewWay {product.name}
                        </h3>
                        <p className="text-sm text-[#545f6e] line-clamp-2 mb-4 flex-grow">
                          High-performance commercial {category.name.toLowerCase()} for seamless operations.
                        </p>
                        <div className="flex justify-between items-center mt-auto border-t border-[#f4f3f6] pt-4">
                          <span className="text-lg font-black text-[#002542]">Quote</span>
                          <button className="p-2 rounded-full bg-[#d3deef] text-[#002542] transition-colors hover:bg-[#002542] hover:text-white">
                            <ShoppingCart className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              );
            })}

            {/* Call to Action Banner */}
            <section className="bg-gradient-to-br from-[#002542] to-[#1b3b5a] rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-4xl font-black tracking-tight">
                  Ready to Upgrade Your Business?
                </h2>
                <p className="text-[#87a5ca] text-lg">
                  Partner with NewWay for industry-leading hardware and 24/7 technical support. Bulk discounts available for regional distributors.
                </p>
                <div className="pt-4">
                  <button className="bg-white text-[#002542] px-10 py-4 rounded-xl font-black text-lg transition-transform hover:scale-105 active:scale-95">
                    Download Full Catalog
                  </button>
                </div>
              </div>
              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
            </section>
          </div>
        </div>
      </main>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col lg:flex-row overflow-hidden animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-20 p-2 bg-gray-100/80 hover:bg-gray-200 text-gray-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Left Sidebar: Images & Core Info */}
            <div className="w-full lg:w-2/5 bg-[#f4f3f6] p-8 lg:p-12 flex flex-col justify-center relative items-center">
              <span className="absolute top-8 left-8 bg-[#002542] text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                {selectedProduct.categoryName}
              </span>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-h-[350px] object-contain mix-blend-multiply mb-8 mt-12 drop-shadow-lg"
              />
              <div className="text-center w-full">
                <h2 className="text-3xl lg:text-4xl font-black text-[#002542] mb-3">
                  NewWay {selectedProduct.name}
                </h2>
                <p className="text-gray-500 text-sm max-w-xs mx-auto mb-8">
                  State-of-the-art POS technology crafted for modern enterprise environments.
                </p>
                <button className="w-full bg-[#002542] hover:bg-[#1b3b5a] text-white py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-[0.98]">
                  Request Formal Quote
                </button>
              </div>
            </div>
            
            {/* Modal Right Area: Specifications Table */}
            <div className="w-full lg:w-3/5 p-8 lg:p-12 overflow-y-auto custom-scrollbar bg-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-[#002542] mb-8 pb-4 border-b border-gray-100 flex items-center gap-3">
                  <Terminal className="w-6 h-6 text-[#87a5ca]" />
                  Specification Parameters
                </h3>
                
                <div className="space-y-0 divide-y divide-gray-100/80">
                  {selectedProduct.specs && Object.keys(selectedProduct.specs).length > 0 ? (
                    Object.entries(selectedProduct.specs).map(([key, value]) => (
                      <div key={key} className="flex py-4">
                        <div className="w-1/3 sm:w-40 font-bold text-[#002542] shrink-0 text-xs uppercase tracking-wide">
                          {key}
                        </div>
                        <div className="flex-1 text-[#545f6e] text-sm break-words leading-relaxed sm:pl-4 pl-2">
                          {String(value)}
                        </div>
                      </div>
                    ))
                  ) : selectedProduct.specs && Object.keys(selectedProduct.specs).length === 0 ? (
                    <div className="py-8 text-center text-gray-400 italic">No detailed specifications available.</div>
                  ) : (
                    <>
                      <div className="flex animate-pulse py-4">
                        <div className="w-32 bg-gray-200 h-4 rounded-full mr-12"></div>
                        <div className="flex-1 bg-gray-100 h-4 rounded-full"></div>
                      </div>
                      <div className="flex animate-pulse py-4">
                        <div className="w-32 bg-gray-200 h-4 rounded-full mr-12"></div>
                        <div className="flex-1 bg-gray-100 h-4 rounded-full"></div>
                      </div>
                      <div className="flex animate-pulse py-4">
                        <div className="w-32 bg-gray-200 h-4 rounded-full mr-12"></div>
                        <div className="flex-1 bg-gray-100 h-4 rounded-full"></div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
