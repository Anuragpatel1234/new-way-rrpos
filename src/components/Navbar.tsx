"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { BrandLogo, type BrandLogoTone } from "@/components/BrandLogo";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  { code: "gu", label: "ગુજરાતી" },
  { code: "mr", label: "मराठी" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { t, i18n } = useTranslation();
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (mobileOpen) return;
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  const forceSolid = pathname !== "/";
  const scrolled = isScrolled || forceSolid;
  const logoTone: BrandLogoTone = mobileOpen ? "onLight" : "onDark";

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
        "fixed top-0 left-0 right-0 z-[1000] transition-[background-color,box-shadow,border-color] duration-300",
        mobileOpen
          ? "border-b border-[#E2E8F0] bg-white shadow-sm"
          : scrolled
            ? "border-b border-gray-800 bg-background/95 shadow-sm backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-[1320px] items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="relative z-50 flex items-center outline-none" 
          aria-label="NewWay home"
          onClick={() => {
            if (pathname === "/") {
              window.dispatchEvent(new Event("trigger-preloader"));
            }
          }}
        >
          <BrandLogo tone={logoTone} priority />
        </Link>

        {/* Desktop Nav */}

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const translatedLabel = link.label === "Home" ? t("nav.home") :
                                   link.label === "Solution" ? t("nav.solutions") :
                                   link.label === "Product" ? t("nav.product") :
                                   link.label === "Service" ? t("nav.service") :
                                   link.label === "Company" ? t("nav.company") :
                                   link.label === "Contact Us" ? t("nav.contact") : link.label;
            return (
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
                    "flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-300",
                    scrolled
                      ? "text-gray-200 hover:text-white hover:bg-white/10"
                      : "text-white/95 hover:text-white hover:bg-white/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
                  )}
                >
                  {translatedLabel}
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
                      className="absolute left-0 top-full z-50 pt-2"
                    >
                      <div className="w-[320px] rounded-xl border border-gray-800 bg-background p-2 shadow-xl shadow-black/50">
                        {link.children.map((child) => {
                          const translatedChildLabel = child.label === "Retail POS" ? t("nav.retail") :
                                                       child.label === "Inventory Tech" ? t("nav.inventory") :
                                                       child.label === "Analytics Hub" ? t("nav.analytics") :
                                                       child.label === "Multi-Store" ? t("nav.multistore") : child.label;
                          return (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block rounded-lg px-4 py-3 transition-colors hover:bg-gray-800"
                            >
                              <div className="text-sm font-medium text-foreground">
                                {translatedChildLabel}
                              </div>
                              <div className="mt-0.5 text-xs text-gray-400">
                                {child.description}
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* Vertical Divider */}
          <span className={cn(
            "h-4 w-px mx-2 transition-colors duration-300",
            scrolled ? "bg-gray-800" : "bg-white/20"
          )} />

          {/* Language Selector Dropdown */}
          <div ref={langDropdownRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-300 cursor-pointer",
                scrolled
                  ? "text-gray-200 hover:text-white hover:bg-white/10"
                  : "text-white/95 hover:text-white hover:bg-white/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
              )}
            >
              <Globe className="h-4 w-4" />
              <span>{LANGUAGES.find(l => l.code === i18n.language)?.label || "English"}</span>
              <ChevronDown className={cn("h-3 w-3 transition-transform duration-200", langOpen && "rotate-180")} />
            </button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 top-full z-50 pt-2"
                >
                  <div className="w-[180px] rounded-xl border border-gray-800 bg-background p-1.5 shadow-xl shadow-black/50">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className={cn(
                          "w-full text-left rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-800 cursor-pointer flex items-center justify-between",
                          i18n.language === lang.code ? "text-primary bg-primary/10" : "text-foreground"
                        )}
                      >
                        <span>{lang.label}</span>
                        {i18n.language === lang.code && (
                          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>



        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg lg:hidden transition-colors",
            mobileOpen
              ? "text-[#04152B] hover:bg-[#F1F5F9]"
              : "text-white hover:bg-white/15 drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)]"
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
              
              {/* Mobile Language Selector */}
              <div className="border-b border-[#E2E8F0] pb-5 pt-3 mb-2">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8] px-4 mb-3 flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" />
                  Select Language / भाषा चुनें
                </div>
                <div className="grid grid-cols-2 gap-2 px-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                      }}
                      className={cn(
                        "rounded-lg px-3 py-2 text-sm font-semibold transition-all text-center border cursor-pointer",
                        i18n.language === lang.code
                          ? "bg-primary text-white border-primary shadow-sm shadow-primary/20"
                          : "text-[#04152B] border-[#E2E8F0] hover:bg-[#F1F5F9]"
                      )}
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => {
                  const translatedLabel = link.label === "Home" ? t("nav.home") :
                                         link.label === "Solution" ? t("nav.solutions") :
                                         link.label === "Product" ? t("nav.product") :
                                         link.label === "Service" ? t("nav.service") :
                                         link.label === "Company" ? t("nav.company") :
                                         link.label === "Contact Us" ? t("nav.contact") : link.label;
                  const isExpanded = mobileExpanded === link.label;
                  return (
                    <div key={link.label}>
                      <div className="flex items-center justify-between rounded-lg px-4 hover:bg-[#F1F5F9] transition-colors">
                        <Link
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="flex-1 py-3 text-lg font-medium text-[#04152B]"
                        >
                          {translatedLabel}
                        </Link>
                        {link.children && (
                          <button
                            onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                            className="p-3 -mr-3 flex items-center justify-center text-[#94A3B8]"
                          >
                            <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} />
                          </button>
                        )}
                      </div>
                      <AnimatePresence>
                        {link.children && isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 border-l border-[#E2E8F0] pl-4 py-2">
                              {link.children.map((child) => {
                                const translatedChildLabel = child.label === "Retail POS" ? t("nav.retail") :
                                                             child.label === "Inventory Tech" ? t("nav.inventory") :
                                                             child.label === "Analytics Hub" ? t("nav.analytics") :
                                                             child.label === "Multi-Store" ? t("nav.multistore") : child.label;
                                return (
                                  <Link
                                    key={child.label}
                                    href={child.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block rounded-lg px-3 py-2 text-sm text-[#475569] hover:text-[#04152B] hover:bg-[#F1F5F9] transition-colors"
                                  >
                                    {translatedChildLabel}
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              {/* Contact info in mobile menu */}
              <div className="mt-auto border-t border-[#E2E8F0] pt-6 space-y-3">
                <a
                  href="tel:9824051360"
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[#04152B] hover:bg-[#F1F5F9] transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </span>
                  9824051360
                </a>
                <a
                  href="mailto:newwaytraders@gmail.com"
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[#04152B] hover:bg-[#F1F5F9] transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#3B82F6]/10 text-[#3B82F6]">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </span>
                  newwaytraders@gmail.com
                </a>
                <a
                  href="https://wa.me/919824051360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium text-[#04152B] hover:bg-[#F1F5F9] transition-colors"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22C55E]/10 text-[#22C55E]">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.695-6.42-1.886l-.246-.159-3.496.917.935-3.416-.174-.258A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" /></svg>
                  </span>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
