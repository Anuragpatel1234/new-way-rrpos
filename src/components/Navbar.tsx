"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 transition-all duration-500",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
      style={{ zIndex: 100 }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-base font-bold text-white">RR</span>
          </div>
          <span
            className={cn(
              "text-xl font-bold transition-colors duration-300",
              scrolled || mobileOpen ? "text-foreground" : "text-white"
            )}
          >
            POS
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.children && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={link.href}
                className={cn(
                  "flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200",
                  scrolled
                    ? "text-gray-700 hover:text-foreground hover:bg-gray-50"
                    : "text-white/95 hover:text-white hover:bg-white/10"
                )}
              >
                {link.label}
                {link.children && (
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === link.label && "rotate-180"
                    )}
                  />
                )}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2"
                  >
                    <div className="w-[320px] rounded-xl border border-gray-100 bg-white p-2 shadow-xl shadow-black/5">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-4 py-3 transition-colors hover:bg-gray-50"
                        >
                          <div className="text-sm font-medium text-foreground">
                            {child.label}
                          </div>
                          <div className="mt-0.5 text-xs text-gray-500">
                            {child.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors",
              scrolled
                ? "text-gray-600 hover:text-foreground"
                : "text-white/95 hover:text-white"
            )}
          >
            <Phone className="h-4 w-4" />
            {SITE.phone}
          </Link>
          <Link href="/contact">
            <Button
              size="default"
              className={cn(
                scrolled ? "" : "bg-white text-gray-900 hover:bg-gray-50 border-0"
              )}
            >
              Book Demo
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg lg:hidden hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto pt-[72px] px-6 pb-8">
              <div className="flex flex-col gap-1 py-6">
                {NAV_LINKS.map((link) => (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-foreground hover:bg-gray-50 transition-colors"
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      )}
                    </Link>
                    {link.children && (
                      <div className="ml-4 border-l border-gray-100 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:text-foreground hover:bg-gray-50 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto flex flex-col gap-3 border-t border-gray-100 pt-6">
                <Link href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full" size="lg">
                    Book Demo
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
