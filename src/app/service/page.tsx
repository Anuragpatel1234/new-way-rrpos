"use client";

import { motion } from "framer-motion";
import { 
  Utensils, CheckCircle, Store, ShoppingCart, Zap, 
  ChevronRight, Landmark, Car, Scissors, Package
} from "lucide-react";

// Reusable animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function ServicesPage() {
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
            <button className="bg-[#d8e3f4] text-[#121c28] px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#bcc7d8] transition-all active:scale-95 shadow-lg">
              Explore Modules
            </button>
            <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all active:scale-95">
              Watch Platform Overview
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* The Immersive Scroll Sections */}

      {/* Section 1: Food & Beverage */}
      <section className="min-h-screen flex flex-col lg:flex-row items-stretch border-t border-[#c3c6ce]/20 relative z-10">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#f4f3f6]"
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
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full"
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
      <section className="min-h-screen flex flex-col lg:flex-row-reverse items-stretch border-t border-[#c3c6ce]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#ffffff]"
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
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full"
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
      <section className="min-h-screen flex flex-col lg:flex-row items-stretch border-t border-[#c3c6ce]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#f4f3f6]"
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Scissors className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Beauty</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            Salons, spas, and wellness centers. Enjoy seamless appointment scheduling, precise staff commission tracking, and specialized product retail integration within a refined, clean interface.
          </p>
          <div className="space-y-4">
            {[
              "Centralized Appointment Calendar",
              "Tiered Staff Commissions",
              "Service & Product Bundling"
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-[#c3c6ce]/30 hover:bg-[#c3c6ce]/10 px-4 rounded-lg transition-colors cursor-pointer group">
                <span className="font-bold text-[#002542] group-hover:text-[#1b3b5a] transition-colors">{item}</span>
                <ChevronRight className="h-5 w-5 text-[#87a5ca] group-hover:text-[#002542] transition-colors group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full"
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
      <section className="min-h-screen flex flex-col lg:flex-row-reverse items-stretch border-t border-[#c3c6ce]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#ffffff]"
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
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full"
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
      <section className="min-h-screen flex flex-col lg:flex-row items-stretch border-t border-[#c3c6ce]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#f4f3f6]"
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
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full"
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
      <section className="min-h-screen flex flex-col lg:flex-row-reverse items-stretch border-t border-[#c3c6ce]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#ffffff]"
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
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full flex items-center justify-center bg-[#f4f3f6]"
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

      {/* Section 7: Temples */}
      <section className="min-h-screen flex flex-col lg:flex-row items-stretch border-t border-[#c3c6ce]/20">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-[#f4f3f6]"
        >
          <div className="mb-6 inline-flex items-center gap-2 text-[#002542]">
            <Landmark className="h-8 w-8" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 text-[#002542]">Temples</h2>
          <p className="text-xl text-[#545f6e] mb-12 leading-relaxed">
            Religious trusts and large-scale institutions. Ensure secure donation management, effortless ritual and pooja booking portals, and generate beautifully transparent audit-ready reports.
          </p>
          <div className="space-y-4">
            {[
              "Donation & receipt management",
              "Ritual & accommodation booking",
              "Transparent statutory tracking"
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-[#c3c6ce]/30 hover:bg-[#c3c6ce]/10 px-4 rounded-lg transition-colors cursor-pointer group">
                <span className="font-bold text-[#002542] group-hover:text-[#1b3b5a] transition-colors">{item}</span>
                <ChevronRight className="h-5 w-5 text-[#87a5ca] group-hover:text-[#002542] transition-colors group-hover:translate-x-1" />
              </div>
            ))}
          </div>
        </motion.div>
        <div className="lg:w-1/2 relative min-h-[400px] overflow-hidden">
          <motion.div 
            whileHover={{ scale: 1.05 }} transition={{ duration: 0.8 }}
            className="w-full h-full"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              className="w-full h-full object-cover" 
              alt="Majestic and tranquil temple architecture" 
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
          <button className="bg-white text-[#002542] px-12 py-5 rounded-full font-bold text-xl active:scale-95 transition-all shadow-2xl hover:-translate-y-1 hover:scale-105">
            Request a Custom Brief
          </button>
        </motion.div>
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24"></div>
      </section>
    </div>
  );
}
