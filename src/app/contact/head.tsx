import React from "react";

import { SITE } from "@/lib/constants";

export default function Head() {
  const title = "Contact";
  const description =
    "Contact New Way Traders for RR POS demos, hardware quotes, installation, and technical support. Phone and email support available during business hours.";
  const base = SITE.url.replace(/\/+$/, "");
  const canonical = `${base}/contact`;
  const ogImage = `${base}/NWT_Logo_2.png`;

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

