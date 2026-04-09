import React from "react";

import { SITE } from "@/lib/constants";

export default function Head() {
  const title = `${SITE.name} — ${SITE.tagline}`;
  const description = SITE.description;
  const canonical = SITE.url.replace(/\/+$/, "") + "/";
  const ogImage = SITE.url.replace(/\/+$/, "") + "/NWT_Logo_2.png";

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </>
  );
}

