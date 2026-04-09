import React from "react";

import { GOOGLE_MAPS_NWT, SITE } from "@/lib/constants";

type StructuredDataProps = {
  /** Absolute URL to a logo image (preferred). */
  logoUrl?: string;
};

export function StructuredData({ logoUrl }: StructuredDataProps) {
  const baseUrl = SITE.url.replace(/\/+$/, "");
  const resolvedLogoUrl = logoUrl ?? `${baseUrl}/NWT_Logo_2.png`;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: baseUrl,
    logo: resolvedLogoUrl,
    image: [resolvedLogoUrl],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "customer support",
        email: SITE.email,
        areaServed: "IN",
        availableLanguage: ["en", "hi"],
      },
    ],
  };

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "New Way Traders",
    url: baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    image: [resolvedLogoUrl],
    logo: resolvedLogoUrl,
    hasMap: GOOGLE_MAPS_NWT,
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Opposite Kothawala Flats, Pritmanagar, first slope, Ashram Road",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  };

  const jsonLd = [organization, localBusiness];

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be a string
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

