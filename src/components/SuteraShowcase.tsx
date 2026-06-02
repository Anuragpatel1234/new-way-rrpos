"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Package,
  FileText,
  CloudLightning,
  Users,
  Calendar,
  Cpu,
  Activity,
  RefreshCw,
  ShieldCheck,
  Settings,
  Sparkles,
  Network,
  Lock,
  Layers,
  Zap,
  CheckCircle,
  Truck,
  HelpCircle,
  Compass
} from "lucide-react";

// Tailored content for every single category, matching the tech datasheet aesthetic in the mockup image
const SHOWCASE_DATA = [
  {
    category: "TOUCH POS",
    tagline: "Streamline Your Business with Our Advanced Point of Sale Software. Engineered for the precision of modern retail.",
    leftCardTitle: "SOFTWARE FEATURES",
    leftCardItems: [
      "Real-Time Inventory Management",
      "Detailed Sales Reporting",
      "Cloud Data Sync & Backup",
      "CRM & Loyalty Programs",
      "Employee Scheduling"
    ],
    rightTopCardTitle: "SYSTEM COMPATIBILITY",
    rightTopCardItems: [
      "Windows & Linux OS Support",
      "Touchscreen Optimization",
      "Barcode Scanner Integration",
      "Thermal Receipt Printers",
      "Electronic Cash Drawers",
      "Integrated Payment Terminals"
    ],
    rightBottomCardTitle: "LOCAL SUPPORT & INSTALLATION",
    rightBottomCardItems: [
      "On-Site Setup & Team Training",
      "24/7 Priority Technical Assistance",
      "Regular Automated Software Updates",
      "Full Hardware Defect Warranties"
    ],
    models: [
      { name: "2302 Core", image: "/products/touch_2302.png" },
      { name: "1701 Slim", image: "/products/touch_1701.png" },
      { name: "1715 Max", image: "/products/touch_1715.png" },
      { name: "1902 Wide", image: "/products/touch_1902.png" },
      { name: "2310 Cast", image: "/products/touch_2310.png" },
      { name: "D3 Mini", image: "/products/touch_D3mini.png" },
      { name: "TE02 Pro", image: "/products/touch_TE02.png" },
      { name: "TS02 Hub", image: "/products/touch_TS02.png" }
    ]
  },
  {
    category: "HANDHELD",
    tagline: "Mobilize Your Sales Force. High-performance portable billing systems engineered for speed, convenience, and tableside operations.",
    leftCardTitle: "MOBILE CAPABILITIES",
    leftCardItems: [
      "Instant Queue Busting Capabilities",
      "Table-Side Order Taking & Dispatch",
      "Digital Payment Receipt Processing",
      "Real-Time Stock Query Engine",
      "Fully Functional Offline Billing"
    ],
    rightTopCardTitle: "HARDWARE ADVANTAGES",
    rightTopCardItems: [
      "Android OS Native Integration",
      "High-Capacity Battery Lifecycle",
      "Built-in 58mm Thermal Printer",
      "Integrated 1D/2D Barcode Scanner",
      "Dual-Band Wi-Fi & 4G Connectivity",
      "Ruggedized Anti-Drop Design Frame"
    ],
    rightBottomCardTitle: "SUPPORT & DEPLOYMENT",
    rightBottomCardItems: [
      "Over-The-Air Wireless App Updates",
      "Centralized Cloud Management Portal",
      "Remote Troubleshooting & Diagnostics",
      "1-Year Fast Replacement Warranty"
    ],
    models: [
      { name: "N1 Base", image: "/products/handheld_N1.png" },
      { name: "Q1 Pro", image: "/products/handheld_Q1.png" },
      { name: "Q3 Max", image: "/products/handheld_Q3.png" },
      { name: "Q6 Ultra", image: "/products/handheld_Q6.png" },
      { name: "Z1 List", image: "/products/handheld_Z1LIST.png" }
    ]
  },
  {
    category: "CHANNEL POS",
    tagline: "Heavy-duty billing workstations built for high-traffic supermarkets, apparel hubs, and high-frequency retail outlets.",
    leftCardTitle: "MANAGEMENT TOOLS",
    leftCardItems: [
      "Multi-Lane Queue Management",
      "Centralized Store Control Panel",
      "Advanced Batching & Gifting Tools",
      "Multi-Operator Login Accounts",
      "Live Automatic Store Syncing"
    ],
    rightTopCardTitle: "SYSTEM SPECIFICATIONS",
    rightTopCardItems: [
      "High-Performance Intel Core Tech",
      "Dual Display Panel Option Ready",
      "Heavy-Duty Aluminum Base Stand",
      "High-Speed SSD Storage Drive",
      "Multiple USB / RS232 Connectors",
      "VESA Mount Pattern Compatibility"
    ],
    rightBottomCardTitle: "SERVICE & WARRANTY",
    rightBottomCardItems: [
      "Professional In-Lane Setup",
      "Local Field Engineering Coverage",
      "Custom ERP System Integration",
      "Extendable Hardware Protection Plan"
    ],
    models: [
      { name: "Channel 1515A", image: "/products/channel_1515A.png" },
      { name: "Channel 1515B", image: "/products/channel_1515B.png" },
      { name: "Channel 1515C", image: "/products/channel_1515C.png" }
    ]
  },
  {
    category: "REGISTER",
    tagline: "Heavy-gauge steel secure vaults designed for high-frequency cash drawer operations and robust physical transaction protection.",
    leftCardTitle: "SECURITY FEATURES",
    leftCardItems: [
      "Heavy-Duty Steel Body Shell",
      "Three-Position Mechanical Key Lock",
      "Removable Inserts & Coin Trays",
      "Emergency Release Bottom Lever",
      "Scratch-Resistant Textured Finish"
    ],
    rightTopCardTitle: "HARDWARE COMPATIBILITY",
    rightTopCardItems: [
      "Standard RJ11 / RJ12 Connectors",
      "12V / 24V Printer Driven Interface",
      "Universal POS Terminal Sync Hookups",
      "Dual Media Slot Front Openings",
      "Reinforced Steel Roller Bearings",
      "Anti-Slip Heavy Rubber Feet Pads"
    ],
    rightBottomCardTitle: "RELIABILITY STANDARDS",
    rightBottomCardItems: [
      "1,000,000+ Cycles Certified Lifespan",
      "Under-Counter Secure Mount Options",
      "24-Month Structural Warranty Plan",
      "Direct Original Replacement Parts"
    ],
    models: [
      { name: "Cash 2307", image: "/products/cash_2307.png" },
      { name: "Cash 1515F", image: "/products/cash_1515F.png" },
      { name: "Cash 1515G", image: "/products/cash_1515G.png" }
    ]
  },
  {
    category: "SCANNER",
    tagline: "Omnidirectional barcode scan engines that deliver lightning-fast decodes under any environmental lighting condition.",
    leftCardTitle: "SCANNING TECHNOLOGY",
    leftCardItems: [
      "CMOS Global Shutter Scan Sensor",
      "Instant 1D & 2D Code Decodes",
      "Damaged & Smudged Label Reading",
      "Mobile Screen Barcode Optimization",
      "Auto-Sense Trigger Smart Modes"
    ],
    rightTopCardTitle: "INTERFACE & SYSTEM",
    rightTopCardItems: [
      "Plug-and-Play USB Interface Setup",
      "Virtual COM / RS232 Option Boards",
      "All Major Operating Systems Support",
      "Audible Configurable Buzzer Feedback",
      "Vibrant LED Ring Scan Indicator",
      "Anti-Glare Optics Lens Layering"
    ],
    rightBottomCardTitle: "PROTECTION & SERVICE",
    rightBottomCardItems: [
      "IP52 Dust & Water Resistance Rating",
      "1.5m Concrete Drop Crash Protection",
      "Life-Time Technical Helpline Support",
      "2-Year Full Hardware Warranty Coverage"
    ],
    models: [
      { name: "Scanner 790A", image: "/products/scanner_790A.png" },
      { name: "Scanner 4800", image: "/products/scanner_4800.png" },
      { name: "Scanner 680", image: "/products/scanner_680.png" },
      { name: "Scanner 710", image: "/products/scanner_710.png" },
      { name: "Scanner VS6760", image: "/products/scanner_VS6760.png" }
    ]
  },
  {
    category: "PRINTER",
    tagline: "High-speed direct thermal printers engineered for silent, quick, and jam-free billing receipt generation.",
    leftCardTitle: "PRINTING FUNCTIONS",
    leftCardItems: [
      "Direct Line Thermal Printing Tech",
      "High-Speed Output (up to 250mm/s)",
      "Automatic Embedded Receipt Cutter",
      "Easy Paper Drop-In Loading Design",
      "Compact & Space-Saving Footprint"
    ],
    rightTopCardTitle: "CONNECTIVITY OPTIONS",
    rightTopCardItems: [
      "Triple Interface: USB + LAN + Serial",
      "Wireless Bluetooth / Wi-Fi Support",
      "Windows, Linux, macOS Drivers Ready",
      "ESC/POS Command Emulation Protocol",
      "OPOS & JPOS Driver Compatibility",
      "Wall Mount Design Hanging Slots"
    ],
    rightBottomCardTitle: "DURABILITY RATING",
    rightBottomCardItems: [
      "150 KM Print Head Lifespan Rating",
      "1.5 Million Clean Cutter Cuts",
      "Print Head Overheat Safety Protection",
      "Standard 1-Year Full Warranty"
    ],
    models: [
      { name: "XP-235B", image: "/products/printer_XP-235B.png" },
      { name: "G200", image: "/products/printer_G200.png" },
      { name: "GP1324T", image: "/products/printer_GP1324T.png" },
      { name: "GP3120TL", image: "/products/printer_GP3120TL.png" },
      { name: "SPRT 8811", image: "/products/printer_SPRT_8811.png" },
      { name: "SPRT 887", image: "/products/printer_SPRT_887.png" },
      { name: "SPRT S200", image: "/products/printer_SPRT_S200.png" },
      { name: "SPRT TL25", image: "/products/printer_SPRT_TL25.png" },
      { name: "XP-365B", image: "/products/printer_XP-365B.png" }
    ]
  },
  {
    category: "SCALE",
    tagline: "Trade-approved, high-precision weighing scales that interface directly with your billing terminal for instant pricing calculation.",
    leftCardTitle: "METRIC FEATURES",
    leftCardItems: [
      "High-Precision Load Cell Sensor Tech",
      "Dual-Sided LED/LCD Backlit Displays",
      "Stainless Steel Heavy Platter Plate",
      "Tare & Zero Weight Functions",
      "Auto-Power Off / Battery Save Modes"
    ],
    rightTopCardTitle: "INTEGRATION DATA",
    rightTopCardItems: [
      "RS232 Direct Serial Cable Link",
      "Seamless POS Software Data Syncing",
      "Up to 30 KG Capacity Weight Rating",
      "Dual Accuracy Precision Calibration",
      "Internal Rechargeable Battery Backup",
      "Water-Resistant Control Keypad Face"
    ],
    rightBottomCardTitle: "COMPLIANCE & SUPPORT",
    rightBottomCardItems: [
      "Government Weights & Measures Verified",
      "Anti-Vibration Stabilization System",
      "On-Site Verification Stamping Help",
      "12-Month Calibration Stability Plan"
    ],
    models: [
      { name: "NewWay RTC1", image: "/products/scale_RTC1.png" },
      { name: "NewWay DAHUA", image: "/products/scale_DAHUA.png" }
    ]
  }
];

export default function SuteraShowcase() {
  // Track active sub-model index per category index
  const [activeModelIndices, setActiveModelIndices] = useState<number[]>(
    SHOWCASE_DATA.map(() => 0)
  );

  // Track active category index for the sticky sub-nav highlight
  const [activeCategory, setActiveCategory] = useState(0);

  // Hover 3D Tilt state for each category's center product box
  const [tilts, setTilts] = useState<Array<{ x: number; y: number }>>(
    SHOWCASE_DATA.map(() => ({ x: 0, y: 0 }))
  );

  // Smooth scroll logic for sub-nav buttons
  const scrollToSection = (idx: number) => {
    const el = document.getElementById(`category-section-${idx}`);
    if (el) {
      // 72px main navbar + 54px sub-navbar + padding offset
      const offset = el.offsetTop - 142;
      window.scrollTo({
        top: offset,
        behavior: "smooth"
      });
    }
  };

  // ScrollSpy to highlight category in navigation as user scrolls down
  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 180;
      const elements = SHOWCASE_DATA.map((_, idx) =>
        document.getElementById(`category-section-${idx}`)
      );

      for (let i = elements.length - 1; i >= 0; i--) {
        const el = elements[i];
        if (el && el.offsetTop <= scrollPosition) {
          setActiveCategory(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    // Run once initially to capture load state
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  // 3D image tilt interaction logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 16;
    const y = -(e.clientY - rect.top - rect.height / 2) / 16;
    setTilts((prev) => {
      const next = [...prev];
      next[idx] = { x, y };
      return next;
    });
  };

  const handleMouseLeave = (idx: number) => {
    setTilts((prev) => {
      const next = [...prev];
      next[idx] = { x: 0, y: 0 };
      return next;
    });
  };

  // Switch between left card dynamic icons
  const getLeftCardIcon = (category: string, idx: number) => {
    switch (category) {
      case "TOUCH POS":
        return [
          <Package className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="0" />,
          <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="1" />,
          <CloudLightning className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="2" />,
          <Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="3" />,
          <Calendar className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="4" />
        ][idx] || <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="d" />;
      case "HANDHELD":
        return [
          <Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="0" />,
          <Compass className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="1" />,
          <FileText className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="2" />,
          <Package className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="3" />,
          <Activity className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="4" />
        ][idx] || <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="d" />;
      case "CHANNEL POS":
        return [
          <Network className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="0" />,
          <Settings className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="1" />,
          <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="2" />,
          <Users className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="3" />,
          <RefreshCw className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="4" />
        ][idx] || <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="d" />;
      case "REGISTER":
        return [
          <Lock className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="0" />,
          <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="1" />,
          <Layers className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="2" />,
          <Activity className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="3" />,
          <Sparkles className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="4" />
        ][idx] || <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="d" />;
      default:
        return [
          <Cpu className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="0" />,
          <Zap className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="1" />,
          <Layers className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="2" />,
          <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="3" />,
          <Settings className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="4" />
        ][idx] || <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="d" />;
    }
  };

  // Switch between right bottom card dynamic icons
  const getRightBottomCardIcon = (idx: number) => {
    return [
      <Truck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="0" />,
      <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="1" />,
      <RefreshCw className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="2" />,
      <ShieldCheck className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="3" />
    ][idx] || <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" key="d" />;
  };

  return (
    <section className="bg-[#faf9fc] font-sans text-gray-900 border-t border-gray-200">
      {/* Sticky sub-navigation bar below header */}
      <div className="sticky top-[72px] z-40 bg-[#faf9fc]/90 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm select-none">
        <div className="mx-auto max-w-7xl px-6 flex gap-2 md:gap-4 overflow-x-auto scrollbar-none justify-start md:justify-center">
          {SHOWCASE_DATA.map((item, idx) => {
            const isActive = activeCategory === idx;
            return (
              <button
                key={item.category}
                onClick={() => scrollToSection(idx)}
                className={`px-4 py-2 rounded-full text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? "bg-[#04152B] text-white shadow-md scale-105"
                    : "bg-white border border-gray-200 text-gray-500 hover:text-[#04152B] hover:border-[#04152B]"
                }`}
              >
                {item.category}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main product showcase blocks */}
      <div className="mx-auto max-w-7xl px-6 py-12 space-y-16 md:space-y-24">
        {SHOWCASE_DATA.map((item, index) => {
          const activeModelIndex = activeModelIndices[index];
          const activeModel = item.models[activeModelIndex];
          const tilt = tilts[index];

          return (
            <div
              key={item.category}
              id={`category-section-${index}`}
              className="relative py-12 md:py-16 border-b border-gray-200/60 last:border-0"
            >
              {/* Retro decorative layout elements */}
              <div className="absolute top-4 left-4 w-3 h-3 border-r border-b border-gray-200 pointer-events-none" />
              <div className="absolute top-4 right-4 w-3 h-3 border-l border-b border-gray-200 pointer-events-none" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-r border-t border-gray-200 pointer-events-none" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-l border-t border-gray-200 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                
                {/* 1. Left Column: Title, Description, and Left Card */}
                <div className="lg:col-span-4 space-y-6">
                  <div>
                    {/* Status indicator badge */}
                    <div className="inline-flex items-center gap-1.5 bg-white border border-gray-200 px-3 py-1.5 rounded-md text-[9px] font-mono font-bold text-gray-500 mb-4 shadow-sm select-none">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                      ▼ SYSTEM STATUS: ACTIVE
                    </div>
                    
                    {/* Category Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#04152B] tracking-tight uppercase mb-4">
                      {item.category}
                    </h2>
                    
                    {/* Product description sentence */}
                    <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed max-w-md">
                      {item.tagline}
                    </p>
                  </div>

                  {/* Card: Left Bottom [SOFTWARE FEATURES] */}
                  <div className="relative border border-cyan-200/80 bg-white/70 backdrop-blur-sm p-6 pt-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-3 left-6 bg-[#04152B] text-white text-[9px] font-mono tracking-widest px-3 py-1 font-bold uppercase select-none rounded-sm">
                      [{item.leftCardTitle}]
                    </div>
                    <ul className="space-y-4">
                      {item.leftCardItems.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3">
                          {getLeftCardIcon(item.category, fIdx)}
                          <span className="text-xs md:text-sm font-semibold text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* 2. Center Column: Main Product Image Display & Model ribbon */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center">
                  <div
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    className="relative bg-white border border-gray-200/50 p-8 rounded-2xl shadow-xl shadow-black/5 flex items-center justify-center w-full aspect-square max-w-[340px] md:max-w-[400px] cursor-pointer overflow-hidden group"
                    style={{ perspective: "1000px" }}
                  >
                    {/* Grid background effect */}
                    <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none" />
                    
                    {/* Inner frame */}
                    <div className="absolute inset-4 border border-dashed border-gray-200 rounded-xl pointer-events-none" />

                    {/* Active product photo */}
                    <img
                      src={activeModel.image}
                      alt={activeModel.name}
                      className="w-4/5 h-4/5 object-contain drop-shadow-[0_16px_32px_rgba(0,0,0,0.15)] transition-all duration-300 pointer-events-none group-hover:scale-105"
                      style={{
                        transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                      }}
                    />
                  </div>

                  {/* Model Selector Ribbon */}
                  {item.models.length > 1 && (
                    <div className="mt-6 flex flex-wrap gap-1.5 justify-center max-w-[340px] md:max-w-[400px] bg-white border border-gray-200/80 p-2 rounded-xl shadow-sm">
                      {item.models.map((model, mIdx) => {
                        const isActive = activeModelIndex === mIdx;
                        return (
                          <button
                            key={model.name}
                            onClick={() => {
                              setActiveModelIndices((prev) => {
                                const next = [...prev];
                                next[index] = mIdx;
                                return next;
                              });
                            }}
                            className={`px-3 py-1.5 rounded-lg text-[9px] font-mono font-bold tracking-wider uppercase transition-all cursor-pointer ${
                              isActive
                                ? "bg-[#04152B] text-white shadow-sm scale-[1.02]"
                                : "bg-transparent text-gray-500 hover:text-[#04152B] hover:bg-gray-50"
                            }`}
                          >
                            {model.name}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 3. Right Column: Stacked Cards [SYSTEM COMPATIBILITY] & [LOCAL SUPPORT] */}
                <div className="lg:col-span-4 space-y-6">
                  
                  {/* Card: Right Top [SYSTEM COMPATIBILITY] */}
                  <div className="relative border border-cyan-200/80 bg-white/70 backdrop-blur-sm p-6 pt-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-3 left-6 bg-[#04152B] text-white text-[9px] font-mono tracking-widest px-3 py-1 font-bold uppercase select-none rounded-sm">
                      [{item.rightTopCardTitle}]
                    </div>
                    <ul className="space-y-3">
                      {item.rightTopCardItems.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center text-xs md:text-sm font-semibold text-gray-700">
                          <span className="text-[#3B82F6] font-bold text-sm leading-none mr-2">▪</span>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card: Right Bottom [LOCAL SUPPORT & INSTALLATION] */}
                  <div className="relative border border-cyan-200/80 bg-white/70 backdrop-blur-sm p-6 pt-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="absolute -top-3 left-6 bg-[#04152B] text-white text-[9px] font-mono tracking-widest px-3 py-1 font-bold uppercase select-none rounded-sm">
                      [{item.rightBottomCardTitle}]
                    </div>
                    <ul className="space-y-4">
                      {item.rightBottomCardItems.map((supportItem, spIdx) => (
                        <li key={spIdx} className="flex items-start gap-3">
                          {getRightBottomCardIcon(spIdx)}
                          <span className="text-xs md:text-sm font-semibold text-gray-700">
                            {supportItem}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
