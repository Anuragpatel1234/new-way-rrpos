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
            className="rounded-xl border border-[#c3c6ce]/40 bg-white shadow-sm transition-colors hover:border-[#87a5ca]/50"
          >
            <button
              type="button"
              onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
              aria-expanded={isOpen}
              className="group flex w-full items-start justify-between gap-3 rounded-xl p-4 text-left outline-none transition-colors hover:bg-[#fafbfc] focus-visible:ring-2 focus-visible:ring-[#002542]/25 focus-visible:ring-offset-2"
            >
              <div className="flex min-w-0 flex-1 gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f4f3f6] text-[#002542] ring-1 ring-[#c3c6ce]/25 group-hover:bg-[#e8edf5]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-[#002542] text-sm md:text-base leading-snug group-hover:text-[#1b3b5a]">
                    {title}
                  </h3>
                  <p className="mt-1 text-xs md:text-sm text-[#545f6e] leading-relaxed">
                    {summary}
                  </p>
                </div>
              </div>
              <ChevronRight
                className={`mt-0.5 h-5 w-5 shrink-0 text-[#87a5ca] transition-transform duration-200 group-hover:text-[#002542] ${isOpen ? "rotate-90" : ""}`}
                aria-hidden
              />
            </button>
            {isOpen ? (
              <ul className="space-y-1.5 border-t border-[#c3c6ce]/25 px-4 pb-4 pt-3">
                {points.map((line, j) => (
                  <li key={j} className="flex gap-2.5 text-xs md:text-sm text-[#545f6e] leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#87a5ca]" aria-hidden />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
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
    <div className="bg-[#faf9fc] text-[#1a1c1e] min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden bg-[#1b3b5a]">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay" 
            alt="Modern high-tech retail environment with soft neon lighting and sleek metallic surfaces in a deep navy color palette" 
            src="/services/hero-service.jpg"
          />
          <div className="absolute inset-0 bg-[#1b3b5a]/80"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center px-6 max-w-5xl pt-20"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span variants={fadeUp} className="text-[#87a5ca] tracking-[0.3em] font-bold text-sm mb-6 block uppercase">
            Enterprise Solutions
          </motion.span>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-white">
            Built for Every Industry.<br/>
            Engineered for Scale.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl text-[#87a5ca] max-w-2xl mx-auto mb-10 leading-relaxed">
            RR POS provides the architectural foundation for global enterprises to manage complex transactions, inventory, and operations in a single, unified ecosystem.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#food-beverage" className="bg-[#d8e3f4] text-[#121c28] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#bcc7d8] transition-all active:scale-95 shadow-lg text-center">
              Explore Modules
            </a>
            <a href="/contact" className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95 text-center">
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
          className={`${serviceCopyCol} bg-[#f4f3f6]`}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Utensils className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Food &amp; Beverage</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            High-end dining, QSRs, and cafes. From dynamic floor plans to robust kitchen display systems, our engine handles peak-hour velocity with zero latency.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <CheckCircle className="h-6 w-6 text-[#002542] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#002542] text-lg">Dynamic Floor Management</span>
                <span className="text-[#545f6e] text-sm">Real-time table status and server performance analytics.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <CheckCircle className="h-6 w-6 text-[#002542] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#002542] text-lg">Guest Experience Integration</span>
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
            <div className="absolute inset-0 bg-[#002542]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Retail */}
      <section className={serviceSectionRowReverse}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-[#ffffff]`}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Store className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Retail</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            From boutique apparel to multi-store chains. Manage thousands of SKUs, sizing matrices, and omnichannel loyalty with predictive restocking and deep trend analysis.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-[#f4f3f6] rounded-xl border border-[#c3c6ce]/30 hover:shadow-lg transition-all shadow-sm">
              <div className="text-3xl font-black text-[#002542] mb-2">99.9%</div>
              <div className="text-xs font-bold text-[#545f6e] uppercase">Inventory Accuracy</div>
            </div>
            <div className="p-6 bg-[#f4f3f6] rounded-xl border border-[#c3c6ce]/30 hover:shadow-lg transition-all shadow-sm">
              <div className="text-3xl font-black text-[#002542] mb-2">-24%</div>
              <div className="text-xs font-bold text-[#545f6e] uppercase">Sourcing Overhead</div>
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
            <div className="absolute inset-0 bg-[#002542]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Beauty */}
      <section className={serviceSectionRow}>
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className={`${serviceCopyCol} bg-[#f4f3f6]`}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Scissors className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Beauty</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
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
          className={`${serviceCopyCol} bg-[#ffffff]`}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <ShoppingCart className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Super Market</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            Bulk scanning capabilities and real-time stock orchestration. Designed for high-volume grocery environments where every second at checkout heavily impacts the bottom line.
          </p>
          <div className="bg-[#f4f3f6] p-8 rounded-2xl border border-[#c3c6ce]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h4 className="text-[#002542] font-bold mb-4 flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-[#87a5ca]" /> High Velocity Logic
            </h4>
            <p className="text-sm text-[#545f6e] italic leading-relaxed">
              &quot;The system handles 400+ transactions per hour per terminal during peak periods without any database contention. It&apos;s the backbone of our enterprise.&quot;
            </p>
            <div className="mt-4 text-xs font-bold text-[#87a5ca] uppercase">— Regional Director, Global Supermart</div>
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
          className={`${serviceCopyCol} bg-[#f4f3f6]`}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Car className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Parking</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            Commercial lots, gated complexes, and multi-story structures. Offering automated barrier control, multi-tier hourly pricing mechanisms, and license plate recognition integration for frictionless entry.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <CheckCircle className="h-6 w-6 text-[#002542] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#002542] text-lg">LPR Integration</span>
                <span className="text-[#545f6e] text-sm">Automate gates immediately upon recognition.</span>
              </div>
            </li>
            <li className="flex items-start gap-4 hover:translate-x-2 transition-transform">
              <CheckCircle className="h-6 w-6 text-[#002542] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block text-[#002542] text-lg">Dynamic Tariffs</span>
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
          className={`${serviceCopyCol} bg-[#ffffff]`}
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Package className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">FMCG</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            Fast-moving consumer goods tracking and supply chain orchestration. Take control of complex B2B distribution channels with integrated accounting, shelf-life forecasting, and sales route management.
          </p>
          <div className="bg-[#f4f3f6] p-8 rounded-2xl border border-[#c3c6ce]/30 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
            <h4 className="text-[#002542] font-bold mb-4 flex items-center gap-2 text-lg">
              <Zap className="h-5 w-5 text-[#87a5ca]" /> Predictive Insights
            </h4>
            <p className="text-sm text-[#545f6e] italic leading-relaxed">
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
          className={`${serviceCopyCol} bg-[#f4f3f6]`}
        >
          <div className="mb-3.5 inline-flex items-center gap-2 text-[#002542]">
            <Landmark className="h-8 w-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4 text-[#002542]">Temples</h2>
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
            <div className="absolute inset-0 bg-[#002542]/5"></div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-[#002542] to-[#1b3b5a] py-24 px-8 text-center relative overflow-hidden">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter text-white">
            Ready to evolve your enterprise?
          </h2>
          <p className="text-[#87a5ca] mb-12 max-w-xl mx-auto text-lg">
            Our solution architects are ready to map RR POS to your specific operational workflows.
          </p>
          <a href="/contact" className="inline-block bg-white text-[#002542] px-12 py-5 rounded-full font-bold text-xl active:scale-95 transition-all shadow-2xl hover:-translate-y-1 hover:scale-105">
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
