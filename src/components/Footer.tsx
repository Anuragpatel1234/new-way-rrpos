"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  Products: [
    { label: "Billing Management", href: "/features#billing" },
    { label: "Inventory Management", href: "/features#inventory" },
    { label: "Reports & Analytics", href: "/features#reports" },
    { label: "Multi-Store Management", href: "/features#multistore" },
    { label: "GST & Compliance", href: "/features#gst" },
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
    { label: "Contact", href: "/contact" },
    { label: "Book a Demo", href: "/contact" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "API Documentation", href: "#" },
    { label: "Partner Program", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-background">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-2 gap-8 py-16 md:grid-cols-3 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 outline-none">
              <span className="text-2xl font-bold text-foreground tracking-tight">NewWay</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {SITE.tagline}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
              <div className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Chennai, Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
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
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-800 py-6 md:flex-row">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} RR POS. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
