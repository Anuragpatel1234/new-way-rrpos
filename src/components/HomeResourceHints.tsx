import { getHomePreloadHints } from "@/lib/critical-assets";

/**
 * Injects `<link rel="preload">` for the home route so hero media and key section assets
 * start downloading immediately with the document (faster first paint / scroll).
 */
export default function HomeResourceHints() {
  const hints = getHomePreloadHints();

  return (
    <>
      {hints.map((hint) => (
        <link
          key={`${hint.as}:${hint.href}`}
          rel="preload"
          href={hint.href}
          as={hint.as}
          type={hint.type}
          crossOrigin={hint.crossOrigin}
        />
      ))}
    </>
  );
}
