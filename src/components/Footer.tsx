"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

const footerLinks = {
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
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Solutions", href: "/solutions" },
    { label: "Services", href: "/service" },
    { label: "Contact", href: "/contact" },
  ],
  Support: [
    { label: "Book a Demo", href: "/contact" },
    { label: "Request a Quote", href: "/contact" },
    { label: `Call: ${SITE.phone}`, href: `tel:${SITE.phone}` },
    { label: "WhatsApp", href: SITE.whatsapp },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[#1E293B] bg-[#0F172A]">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Main Footer */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 py-6 md:grid-cols-3 lg:grid-cols-5 lg:py-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex outline-none" aria-label="NewWay home">
              <BrandLogo
                tone="onDark"
                className="h-9 w-[min(100%,200px)] md:h-10 md:w-[min(100%,240px)]"
              />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#94A3B8]">
              {SITE.tagline}
            </p>
            <div className="mt-3 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-[#94A3B8]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Ashram Road, Ahmedabad, Gujarat</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-[#F8FAFC]">{title}</h3>
              <ul className="mt-2 flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-2 border-t border-[#1E293B] py-2 md:flex-row">
          <p className="text-xs text-[#94A3B8]">
            &copy; {new Date().getFullYear()} RR POS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-xs text-[#94A3B8] hover:text-[#F8FAFC] transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
