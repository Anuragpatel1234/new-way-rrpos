"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { motion, type Variants } from "framer-motion";
import {
  Utensils, CheckCircle, Store, ShoppingCart, Zap,
  ChevronRight, Landmark, Car, Scissors, Package,
  Receipt, CalendarDays, ShieldCheck, Users, Layers, type LucideIcon
} from "lucide-react";

type ServiceFeatureModule = {
  title: string;
  summary: string;
  points: string[];
  icon: LucideIcon;
};

const templesModules: ServiceFeatureModule[] = [
  {
    title: "Donation & receipt management",
    summary: "End-to-end traceability from offering to ledger, with donor-ready compliance artifacts.",
    icon: Receipt,
    points: [
      "Instant 80G-ready receipts with PAN linkage, SMS, and email acknowledgments",
      "Hundi, counter, UPI, and online donation channels in one reconciled book",
      "Donor history, recurring pledges, corpus vs. general fund segregation",
    ],
  },
  {
    title: "Ritual & accommodation booking",
    summary: "Coordinate sevas, festivals, and stay inventory without double-booking or chaos at the desk.",
    icon: CalendarDays,
    points: [
      "Pooja / archana slots, priest rostering, prasad and samagri stock hooks",
      "Dharamshala & guest-room charts with check-in, tariffs, and maintenance flags",
      "Peak-season controls: token queues, seva packages, and hall capacity caps",
    ],
  },
  {
    title: "Transparent statutory tracking",
    summary: "Board-ready visibility that matches trust deeds and regulator expectations.",
    icon: ShieldCheck,
    points: [
      "Income–expenditure registers with trust-deed and resolution tagging",
      "12A / FCRA (where applicable) friendly trails; CSR and grant utilization views",
      "Role-based approvals, immutable activity logs, and year-end export packs",
    ],
  },
];

const beautyModules: ServiceFeatureModule[] = [
  {
    title: "Centralized Appointment Calendar",
    summary:
      "One schedule for chairs, rooms, and therapists—waitlists and reminders that protect revenue.",
    icon: CalendarDays,
    points: [
      "Staff- and room-aware slots with buffers, overlap checks, and walk-in holds",
      "SMS / email reminders, deposits, and no-show rules tied to the same booking",
      "Multi-location view: move guests, compare utilization, and spot idle capacity fast",
    ],
  },
  {
    title: "Tiered Staff Commissions",
    summary:
      "Payout logic that matches real salon economics—services, retail attach, and team splits.",
    icon: Users,
    points: [
      "Profiles by role, seniority, and service type with manager overrides and approvals",
      "Retail vs. service splits, package redemptions, and notes on every adjustment",
      "Period-close exports with clawbacks and sign-off trails for payroll handoff",
    ],
  },
  {
    title: "Service & Product Bundling",
    summary:
      "Sell treatments and retail as one basket—inventory and reporting stay in sync.",
    icon: Layers,
    points: [
      "Bundles (e.g. cut + color + aftercare) with automatic retail consumption on checkout",
      "Memberships, packages, and gift balances redeemable across services and POS",
      "Low-stock prompts on retail SKUs linked to your highest-volume services",
    ],
  },
];

function ServiceFeatureAccordion({
  modules,
  openIndex,
  setOpenIndex,
}: {
  modules: ServiceFeatureModule[];
  openIndex: number | null;
  setOpenIndex: Dispatch<SetStateAction<number | null>>;
}) {
  return (
    <div className="space-y-2.5">
      {modules.map(({ title, summary, points, icon: Icon }, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`group rounded-xl border border-[#c3c6ce]/40 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-[#04152B]/30 ${isOpen ? "ring-1 ring-[#04152B]/10 shadow-lg" : ""}`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
              aria-expanded={isOpen}
              className={`flex w-full items-start justify-between gap-3 rounded-xl p-4 text-left outline-none transition-all duration-300 ${isOpen ? "bg-gradient-to-br from-white to-[#f0f7ff]" : "hover:bg-gradient-to-br hover:from-white hover:to-[#f8fafc]"} focus-visible:ring-2 focus-visible:ring-[#04152B]/25 focus-visible:ring-offset-2`}
            >
              <div className="flex min-w-0 flex-1 gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-[#c3c6ce]/25 transition-all duration-300 ${isOpen ? "bg-[#04152B] text-white shadow-inner" : "bg-[#f4f3f6] text-[#04152B] group-hover:bg-[#e8edf5]"}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className={`font-bold text-sm md:text-base leading-snug transition-colors ${isOpen ? "text-[#04152B]" : "text-[#04152B] group-hover:text-[#1b3b5a]"}`}>
                    {title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-[#545f6e] leading-relaxed">
                    {summary}
                  </p>
                </div>
              </div>
              <ChevronRight
                className={`mt-0.5 h-5 w-5 shrink-0 text-[#87a5ca] transition-transform duration-300 group-hover:text-[#04152B] ${isOpen ? "rotate-90 text-[#04152B]" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="space-y-1.5 border-t border-[#c3c6ce]/25 px-4 pb-4 pt-3"
              >
                {points.map((line, j) => (
                  <li key={j} className="flex gap-2.5 text-xs md:text-sm text-[#545f6e] leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#04152B]/60" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </motion.ul>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

// Reusable animation variants (explicit Variants — avoids ease: string inference on CI)
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

/** Same vertical band as Temples: viewport-relative min height + aligned image stack. */
const serviceSectionRow =
  "flex flex-col lg:flex-row items-stretch border-t border-[#c3c6ce]/20 min-h-[76dvh] lg:min-h-[min(560px,82dvh)]";
const serviceSectionRowReverse =
  "flex flex-col lg:flex-row-reverse items-stretch border-t border-[#c3c6ce]/20 min-h-[76dvh] lg:min-h-[min(560px,82dvh)]";
const serviceCopyCol =
  "lg:w-1/2 p-9 lg:py-12 lg:px-14 xl:px-16 flex flex-col justify-center lg:min-h-0";
const serviceImageShell =
  "lg:w-1/2 relative min-h-[280px] h-60 sm:h-72 lg:h-auto lg:min-h-0 overflow-hidden";
const serviceImageMotion = "absolute inset-0 w-full h-full";

export default function ServicesPage() {
  const [templesOpenIndex, setTemplesOpenIndex] = useState<number | null>(null);
  const [beautyOpenIndex, setBeautyOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-[#faf9fc] text-[#1a1c1e] min-h-screen font-sans relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-[#d8e3f4]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-[#e8e9ed]/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[40%] right-[5%] w-[20%] h-[20%] bg-[#f0f7ff]/40 rounded-full blur-[80px]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[680px] lg:h-[780px] flex items-center justify-center overflow-hidden bg-[#0a1219]">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover object-center"
            alt="Modern high-tech retail environment with soft neon lighting and sleek metallic surfaces in a deep navy color palette"
            src="/services/hero-service.jpg"
          />
        </div>

        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 variants={fadeUp} className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight leading-[1.15] mb-8 text-white">
            Built for Every Industry.<br />
            Engineered for Scale.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-base md:text-lg text-[#87a5ca] max-w-2xl mx-auto mb-10 leading-relaxed">
            RR POS provides the architectural foundation for global enterprises to manage complex transactions, inventory, and operations in a single, unified ecosystem.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#food-beverage" className="bg-[#d8e3f4] text-[#121c28] px-10 py-4 rounded-xl text-sm font-semibold hover:bg-[#bcc7d8] transition-all active:scale-95 shadow-lg text-center">
              Explore Modules
            </a>
            <a href="/contact" className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl text-sm font-semibold hover:bg-white/10 transition-all active:scale-95 text-center">
              Book a Demo
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* The Immersive Scroll Sections */}

      {/* Section 1: Food & Beverage */}
      <section id="food-beverage" className={`${serviceSectionRow} relative z-10 scroll-mt-[5.5rem]`}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-br from-[#f4f3f6] to-[#e8e9ed]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-white/40 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-white/20">
              <Utensils className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">Food &amp; Beverage</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-12 leading-relaxed">
            High-end dining, QSRs, and cafes. From dynamic floor plans to robust kitchen display systems, our engine handles peak-hour velocity with zero latency.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform group/item">
              <div className="bg-white p-2 rounded-lg shadow-sm ring-1 ring-[#c3c6ce]/25 group-hover/item:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-[#04152B] shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-[#04152B] text-lg">Dynamic Floor Management</span>
                <span className="text-[#545f6e] text-sm">Real-time table status and server performance analytics.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform group/item">
              <div className="bg-white p-2 rounded-lg shadow-sm ring-1 ring-[#c3c6ce]/25 group-hover/item:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-[#04152B] shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-[#04152B] text-lg">Guest Experience Integration</span>
                <span className="text-[#545f6e] text-sm">Unified guest profiles and order history tracking.</span>
              </div>
            </li>
          </ul>
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={serviceImageMotion}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Fine dining and food presentation"
              src="/services/food-beverage.jpg"
            />
            <div className="absolute inset-0 bg-[#04152B]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Retail */}
      <section className={serviceSectionRowReverse}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-tr from-[#ffffff] to-[#f8fbff]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-[#f4f3f6]/50 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-[#04152B]/5">
              <Store className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">Retail</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-12 leading-relaxed">
            From boutique apparel to multi-store chains. Manage thousands of SKUs, sizing matrices, and omnichannel loyalty with predictive restocking and deep trend analysis.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-gradient-to-br from-white to-[#f4f3f6] rounded-xl border border-[#c3c6ce]/30 hover:shadow-lg transition-all shadow-sm hover:-translate-y-1">
              <div className="text-3xl font-black text-[#04152B] mb-2">99.9%</div>
              <div className="text-xs font-bold text-[#545f6e] uppercase tracking-wider">Inventory Accuracy</div>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-[#f4f3f6] rounded-xl border border-[#c3c6ce]/30 hover:shadow-lg transition-all shadow-sm hover:-translate-y-1">
              <div className="text-3xl font-black text-[#04152B] mb-2">-24%</div>
              <div className="text-xs font-bold text-[#545f6e] uppercase tracking-wider">Sourcing Overhead</div>
            </div>
          </div>
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={serviceImageMotion}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Sleek boutique retail apparel store"
              src="/services/retail.jpg"
            />
            <div className="absolute inset-0 bg-[#04152B]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Beauty */}
      <section className={serviceSectionRow}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-bl from-[#f4f3f6] to-[#e8e9ed]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-white/40 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-white/20">
              <Scissors className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">Beauty</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-12 leading-relaxed">
            Salons, spas, and wellness centers. Enjoy seamless appointment scheduling, precise staff commission tracking, and specialized product retail integration within a refined, clean interface.
          </p>
          <ServiceFeatureAccordion
            modules={beautyModules}
            openIndex={beautyOpenIndex}
            setOpenIndex={setBeautyOpenIndex}
          />
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={serviceImageMotion}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover opacity-90"
              alt="High-end beauty salon interior"
              src="/services/beauty.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 4: Super Market */}
      <section className={serviceSectionRowReverse}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-r from-[#ffffff] to-[#fdfdff]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-[#f4f3f6]/50 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-[#04152B]/5">
              <ShoppingCart className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">Super Market</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-12 leading-relaxed">
            Bulk scanning capabilities and real-time stock orchestration. Designed for high-volume grocery environments where every second at checkout heavily impacts the bottom line.
          </p>
          <div className="bg-gradient-to-br from-[#f4f3f6] to-[#e8e9ed] p-8 rounded-2xl border border-[#c3c6ce]/30 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform"></div>
            <h4 className="text-[#04152B] font-bold mb-4 flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-[#87a5ca]" /> High Velocity Logic
            </h4>
            <p className="text-sm text-[#545f6e] italic leading-relaxed relative z-10">
              &quot;The system handles 400+ transactions per hour per terminal during peak periods without any database contention. It&apos;s the backbone of our enterprise.&quot;
            </p>
            <div className="mt-4 text-xs font-bold text-[#87a5ca] uppercase tracking-wider relative z-10">— Regional Director, Global Supermart</div>
          </div>
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={serviceImageMotion}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Well-stocked produce section in a super market"
              src="/services/supermarket.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 5: Parking */}
      <section className={serviceSectionRow}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-br from-[#f4f3f6] to-[#e8e9ed]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-white/40 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-white/20">
              <Car className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">Parking</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-12 leading-relaxed">
            Commercial lots, gated complexes, and multi-story structures. Offering automated barrier control, multi-tier hourly pricing mechanisms, and license plate recognition integration for frictionless entry.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform group/item">
              <div className="bg-white p-2 rounded-lg shadow-sm ring-1 ring-[#c3c6ce]/25 group-hover/item:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-[#04152B] shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-[#04152B] text-lg">LPR Integration</span>
                <span className="text-[#545f6e] text-sm">Automate gates immediately upon recognition.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform group/item">
              <div className="bg-white p-2 rounded-lg shadow-sm ring-1 ring-[#c3c6ce]/25 group-hover/item:shadow-md transition-shadow">
                <CheckCircle className="h-6 w-6 text-[#04152B] shrink-0" />
              </div>
              <div>
                <span className="font-bold block text-[#04152B] text-lg">Dynamic Tariffs</span>
                <span className="text-[#545f6e] text-sm">Automatically adjust fees for diverse timings or vehicle types.</span>
              </div>
            </li>
          </ul>
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={serviceImageMotion}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Aerial view of a structured parking lot"
              src="/services/parking.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 6: FMCG */}
      <section className={serviceSectionRowReverse}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-tr from-[#ffffff] to-[#f8fbff]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-[#f4f3f6]/50 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-[#04152B]/5">
              <Package className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">FMCG</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-12 leading-relaxed">
            Fast-moving consumer goods tracking and supply chain orchestration. Take control of complex B2B distribution channels with integrated accounting, shelf-life forecasting, and sales route management.
          </p>
          <div className="bg-gradient-to-br from-[#f4f3f6] to-[#e8e9ed] p-8 rounded-2xl border border-[#c3c6ce]/30 shadow-sm hover:shadow-md transition-all relative overflow-hidden group">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/20 rounded-full -ml-16 -mb-16 blur-2xl group-hover:scale-150 transition-transform"></div>
            <h4 className="text-[#04152B] font-bold mb-4 flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-[#87a5ca]" /> Predictive Insights
            </h4>
            <p className="text-sm text-[#545f6e] italic leading-relaxed relative z-10">
              &quot;By aligning our B2B orders with inventory flow forecasts, our out-of-stock incidents dropped by 85% in just two quarters.&quot;
            </p>
          </div>
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={`${serviceImageMotion} flex items-center justify-center bg-[#f4f3f6]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover"
              alt="Fast-moving consumer products in a modern distribution context"
              src="/services/fmcg.jpg"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 7: Temples — image: Arasuri Ambaji (CC0, Wikimedia Commons) */}
      <section className={serviceSectionRow}>
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-gradient-to-br from-[#f4f3f6] to-[#e8e9ed]`}
        >
          <div className="mb-8 flex items-center gap-4">
            <div className="inline-flex items-center justify-center text-[#04152B] bg-white/40 p-3 rounded-2xl backdrop-blur-sm shadow-sm ring-1 ring-white/20">
              <Landmark className="h-8 w-8" />
            </div>
            <h2 className="text-[1.75rem] md:text-[2rem] font-bold tracking-tight leading-tight text-[#04152B]">Temples</h2>
          </div>
          <p className="text-base md:text-lg text-[#545f6e] mb-8 leading-relaxed">
            Religious trusts and large-scale institutions. Ensure secure donation management, effortless ritual and pooja booking portals, and generate beautifully transparent audit-ready reports.
          </p>
          <ServiceFeatureAccordion
            modules={templesModules}
            openIndex={templesOpenIndex}
            setOpenIndex={setTemplesOpenIndex}
          />
        </motion.div>
        <div className={serviceImageShell}>
          <motion.div
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className={serviceImageMotion}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="w-full h-full object-cover object-center"
              alt="Arasuri Ambaji temple complex, Ambaji, Gujarat — marble mandapa and Shakti Peeth architecture"
              src="/services/temples.jpg"
            />
            <div className="absolute inset-0 bg-[#04152B]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#04152B] to-[#1e293b] py-20 lg:py-24 px-8 text-center relative overflow-hidden">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-[1.75rem] md:text-[2rem] font-bold mb-8 tracking-tight leading-[1.15] text-white">
            Ready to evolve your enterprise?
          </h2>
          <p className="text-[#94A3B8] mb-12 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
            Our solution architects are ready to map RR POS to your specific operational workflows.
          </p>
          <a href="/contact" className="inline-block bg-white text-[#04152B] px-12 py-5 rounded-full text-sm font-semibold active:scale-95 transition-all shadow-2xl hover:-translate-y-1 hover:scale-105">
            Request a Custom Brief
          </a>
        </motion.div>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
      </section>
    </div>
  );
}
