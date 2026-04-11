"use client";

import Link from "next/link";
import { useState, useCallback } from "react";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";
import { cn } from "@/lib/utils";

const footerDropdownNav = {
  Products: [
    { label: "Touch POS", href: "/product" },
    { label: "Handheld POS", href: "/product" },
    { label: "Barcode Scanner", href: "/product" },
    { label: "Receipt Printer", href: "/product" },
    { label: "Cash Register", href: "/product" },
  ],
  Hardware: [
    { label: "POS Terminal", href: "/hardware#terminal" },
    { label: "Barcode Scanner", href: "/hardware#scanner" },
    { label: "Thermal Printer", href: "/hardware#printer" },
    { label: "Cash Drawer", href: "/hardware#drawer" },
    { label: "Complete Setup", href: "/hardware#setup" },
  ],
  Services: [
    { label: "Industries overview", href: "/service" },
    { label: "Food & beverage", href: "/service#food-beverage" },
    { label: "Retail & supermarket", href: "/service" },
    { label: "Beauty & wellness", href: "/service" },
    { label: "Temples & trusts", href: "/service" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Book a Demo", href: "/contact" },
    { label: "Request a Quote", href: "/contact" },
    { label: `Call: ${SITE.phone}`, href: `tel:${SITE.phone}` },
    { label: "WhatsApp", href: SITE.whatsapp },
  ],
} as const;

type DropdownKey = keyof typeof footerDropdownNav;

function FooterDropdown({
  title,
  links,
  open,
  onToggle,
}: {
  title: DropdownKey;
  links: readonly { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `footer-nav-${title.toLowerCase()}`;

  return (
    <div className="border-b border-[#1E293B] pb-4 last:border-b-0 lg:border-0 lg:pb-0">
      <button
        type="button"
        id={`${panelId}-button`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-2 rounded-md py-1 text-left outline-none transition-colors hover:text-[#F8FAFC] focus-visible:ring-2 focus-visible:ring-[#87a5ca]/40 lg:pointer-events-none lg:py-0"
      >
        <h3 className="text-sm font-semibold text-[#F8FAFC]">{title}</h3>
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 text-[#94A3B8] transition-transform duration-200 lg:hidden",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
      <ul
        id={panelId}
        role="region"
        aria-labelledby={`${panelId}-button`}
        className={cn(
          "mt-2 flex flex-col gap-2",
          !open && "max-lg:hidden"
        )}
      >
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  const [openKey, setOpenKey] = useState<DropdownKey | null>(null);

  const toggle = useCallback((key: DropdownKey) => {
    setOpenKey((current) => (current === key ? null : key));
  }, []);

  return (
    <footer className="relative z-[12] border-t border-[#1E293B] bg-[#0F172A]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 md:grid-cols-3 lg:grid-cols-6 lg:py-8">
          <div className="col-span-2 flex flex-col items-center text-center md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex outline-none" aria-label="NewWay home">
              <BrandLogo
                tone="onDark"
                className="h-10 w-[min(100%,224px)] md:h-11 md:w-[min(100%,264px)]"
              />
            </Link>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#94A3B8]">
              {SITE.tagline}
            </p>
            <div className="mt-3 flex w-full flex-col items-center gap-3">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center justify-center gap-2 text-sm text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
              >
                <Phone className="h-4 w-4 shrink-0" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center justify-center gap-2 text-sm text-[#94A3B8] transition-colors hover:text-[#F8FAFC]"
              >
                <Mail className="h-4 w-4 shrink-0" />
                {SITE.email}
              </a>
              <div className="flex max-w-sm items-start justify-center gap-2 text-sm text-[#94A3B8]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span className="text-left">Ashram Road, Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>

          {(Object.entries(footerDropdownNav) as [DropdownKey, typeof footerDropdownNav[DropdownKey]][]).map(
            ([title, links]) => (
              <FooterDropdown
                key={title}
                title={title}
                links={links}
                open={openKey === title}
                onToggle={() => toggle(title)}
              />
            )
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-2 border-t border-[#1E293B] py-2 md:flex-row">
          <p className="text-xs text-[#94A3B8]">
            &copy; {new Date().getFullYear()} RR POS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-[#94A3B8] transition-colors hover:text-[#F8FAFC]">
              About
            </Link>
            <Link href="/contact" className="text-xs text-[#94A3B8] transition-colors hover:text-[#F8FAFC]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
