import React from "react";

import { SITE } from "@/lib/constants";

export default function Head() {
  const title = `About New Way Traders`;
  const description =
    "Learn about New Way Traders—Ahmedabad-based billing and POS specialists behind RR POS, serving retailers with hardware, setup, and long-term support.";
  const base = SITE.url.replace(/\/+$/, "");
  const canonical = `${base}/about`;
  const ogImage = `${base}/NWT_Logo_2.png`;

  return (
    <>
      <title>{`${title} | ${SITE.name}`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="article" />
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

