import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RR POS — Fast Billing. Smart Control. Real Growth.",
  description:
    "All-in-one POS system for modern retail stores. Simplify billing, inventory, reporting, and hardware into one seamless system.",
  keywords: [
    "POS software",
    "billing software",
    "retail POS",
    "inventory management",
    "GST billing",
    "point of sale",
    "RR POS",
  ],
  openGraph: {
    title: "RR POS — Fast Billing. Smart Control. Real Growth.",
    description:
      "All-in-one POS system for modern retail stores.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
