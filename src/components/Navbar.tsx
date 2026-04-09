"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrandLogo, type BrandLogoTone } from "@/components/BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    // check immediately on mount
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const forceSolid = pathname !== "/";
  const scrolled = isScrolled || forceSolid;
  const logoOnDark = (scrolled || pathname !== "/") && !mobileOpen;
  /** White mark on video hero & solid bar; original colors on white mobile drawer. */
  const logoTone: BrandLogoTone = mobileOpen
    ? "onLight"
    : logoOnDark || pathname === "/"
      ? "onDark"
      : "onLight";

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
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-gray-800"
          : "bg-transparent"
      )}
      style={{ zIndex: 100 }}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="relative z-50 flex items-center outline-none" aria-label="NewWay home">
          <BrandLogo tone={logoTone} priority />
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
                    ? "text-gray-300 hover:text-foreground hover:bg-gray-800"
                    : "text-foreground hover:text-white hover:bg-white/10"
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
                    <div className="w-[320px] rounded-xl border border-gray-800 bg-background p-2 shadow-xl shadow-black/50">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-4 py-3 transition-colors hover:bg-gray-800"
                        >
                          <div className="text-sm font-medium text-foreground">
                            {child.label}
                          </div>
                          <div className="mt-0.5 text-xs text-gray-400">
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



        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg lg:hidden transition-colors",
            scrolled || mobileOpen ? "text-foreground hover:bg-gray-100" : "text-white hover:bg-white/10"
          )}
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
                      className="flex items-center justify-between rounded-lg px-4 py-3 text-lg font-medium text-foreground hover:bg-gray-800 transition-colors"
                    >
                      {link.label}
                      {link.children && (
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      )}
                    </Link>
                    {link.children && (
                      <div className="ml-4 border-l border-gray-800 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-foreground hover:bg-gray-800 transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>


            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
