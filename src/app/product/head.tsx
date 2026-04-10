import React from "react";

import { SITE } from "@/lib/constants";

export default function Head() {
  const title = "Product";
  const description =
    "Explore RR POS product ecosystem: touch POS terminals, handheld devices, and POS peripherals designed for modern retail billing and store operations.";
  const base = SITE.url.replace(/\/+$/, "");
  const canonical = `${base}/product`;
  const ogImage = `${base}/icon-512.png`;

  return (
    <>
      <title>{`${title} | ${SITE.name}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={`${title} | ${SITE.name}`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${SITE.name}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

