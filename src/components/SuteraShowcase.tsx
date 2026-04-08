"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

// Ensure plugins are registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const SHOWCASE_DATA = [
  {
    category: "TOUCH POS",
    desc: ["From deep roots,", "efficiency draws", "its strength"],
    models: [
      { name: "2302 Core", image: "/products/touch_2302.png" },
      { name: "1701 Slim", image: "/products/touch_1701.png" },
      { name: "1715 Max", image: "/products/touch_1715.png" },
      { name: "1902 Wide", image: "/products/touch_1902.png" },
      { name: "2310 Cast", image: "/products/touch_2310.png" },
      { name: "D3 Mini", image: "/products/touch_D3mini.png" },
      { name: "TE02 Pro", image: "/products/touch_TE02.png" },
      { name: "TS02 Hub", image: "/products/touch_TS02.png" }
    ],
    box1: {
      title: "[CORE ARCHITECTURE]",
      items: [
        { label: "PROCESSOR ///", value: "Intel Celeron J6412 / J4125" },
        { label: "FREQUENCY ///", value: "Up to 2.60 GHz" }
      ]
    },
    box2: {
      title: "Primary Display Unit",
      items: [
        { label: "FORMAT", value: "15\" / 15.6\"" },
        { label: "MATRIX", value: "LED Touch" },
        { label: "RES", value: "1024x768 / 1920x1080" }
      ]
    },
    box3: {
      title: "Foundation designed for speed and reliability.",
      items: [
        { icon: true, label: "SYS.MEMORY", value: "DDRIV 8G/16G" },
        { icon: 'border', label: "SYS.STORAGE", value: "SSD 128G/256G/512G" }
      ]
    }
  },
  {
    category: "HANDHELD",
    desc: ["Portability engineered,", "for infinite space", "and time"],
    models: [
      { name: "N1 Base", image: "/products/handheld_N1.png" },
      { name: "Q1 Pro", image: "/products/handheld_Q1.png" },
      { name: "Q3 Max", image: "/products/handheld_Q3.png" },
      { name: "Q6 Ultra", image: "/products/handheld_Q6.png" },
      { name: "Z1 List", image: "/products/handheld_Z1LIST.png" }
    ],
    box1: {
      title: "[MOBILE COMPUTE]",
      items: [
        { label: "PROCESSOR ///", value: "Quad-Core ARM Cortex A53" },
        { label: "OS ///", value: "Android 11/12/13" }
      ]
    },
    box2: {
      title: "Mobile Interface",
      items: [
        { label: "FORMAT", value: "6.0\" HD IPS" },
        { label: "NETWORK", value: "4G + Dual-Band WiFi" },
        { label: "BATTERY", value: "7.4V / 5200mAh" }
      ]
    },
    box3: {
      title: "Built-in thermal printing options",
      items: [
        { icon: true, label: "INTEGRATION", value: "Built-in 58mm Printer" },
        { icon: 'border', label: "SCANNER", value: "1D/2D Barcode Engine" }
      ]
    }
  },
  {
    category: "CHANNEL POS",
    desc: ["Seamless Integration,", "Limitless Potential,", "True Scalability"],
    models: [
      { name: "Channel 1515A", image: "/products/channel_1515A.png" },
      { name: "Channel 1515B", image: "/products/channel_1515B.png" },
      { name: "Channel 1515C", image: "/products/channel_1515C.png" }
    ],
    box1: {
      title: "[WORKSTATION]",
      items: [
        { label: "PROCESSOR ///", value: "Intel Core i3 / i5" },
        { label: "INTERFACE ///", value: "Multi-Touch Capacitive" }
      ]
    },
    box2: {
      title: "Modular Display",
      items: [
        { label: "FORMAT", value: "15.6\" Widescreen" },
        { label: "SUPPORT", value: "Dual Screen Setup" },
        { label: "BASE", value: "Solid Aluminum Chassis" }
      ]
    },
    box3: {
      title: "Built for heavy retail traffic",
      items: [
        { icon: true, label: "NETWORK", value: "Gigabit Ethernet" },
        { icon: 'border', label: "PORTS", value: "Multiple USB / RS232" }
      ]
    }
  },
  {
    category: "REGISTER",
    desc: ["The secure vault", "for high-frequency", "transactions."],
    models: [
      { name: "Cash 2307", image: "/products/cash_2307.png" },
      { name: "Cash 1515F", image: "/products/cash_1515F.png" },
      { name: "Cash 1515G", image: "/products/cash_1515G.png" }
    ],
    box1: {
      title: "[SECURITY COMPUTE]",
      items: [
        { label: "PROCESSOR ///", value: "RK3568 Core" },
        { label: "LOCK ///", value: "3-position mechanical" }
      ]
    },
    box2: {
      title: "Cash Management",
      items: [
        { label: "COMPONENTS", value: "Heavy-Gauge Steel" },
        { label: "TRAYS", value: "4/5 Bill, 8 Coin" },
        { label: "INTERFACE", value: "RJ11/RJ12 12V/24V" }
      ]
    },
    box3: {
      title: "Reliable mechanical endurance",
      items: [
        { icon: true, label: "LIFECYCLE", value: "1,000,000+ operations" },
        { icon: 'border', label: "WEIGHT", value: "5.5 kg" }
      ]
    }
  },
  {
    category: "SCANNER",
    desc: ["Laser precision,", "Omnidirectional,", "Unfailing sight."],
    models: [
      { name: "Scanner 790A", image: "/products/scanner_790A.png" },
      { name: "Scanner 4800", image: "/products/scanner_4800.png" },
      { name: "Scanner 680", image: "/products/scanner_680.png" },
      { name: "Scanner 710", image: "/products/scanner_710.png" },
      { name: "Scanner VS6760", image: "/products/scanner_VS6760.png" }
    ],
    box1: {
      title: "[OPTICS ENGINE]",
      items: [
        { label: "SENSOR ///", value: "CMOS Global Shutter" },
        { label: "ILLUMINATION ///", value: "White LED" }
      ]
    },
    box2: {
      title: "Capture Interface",
      items: [
        { label: "TYPE", value: "1D / 2D Codes" },
        { label: "SPEED", value: "High-frame Decode" },
        { label: "ACCURACY", value: "3 mil precision" }
      ]
    },
    box3: {
      title: "Maximum decoding throughput",
      items: [
        { icon: true, label: "INTERFACE", value: "USB/RS-232" },
        { icon: 'border', label: "FEEDBACK", value: "Buzzer + LED Ring" }
      ]
    }
  },
  {
    category: "PRINTER",
    desc: ["High-speed thermal,", "Clear lines,", "Zero lag."],
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
    ],
    box1: {
      title: "[THERMAL ENGINE]",
      items: [
        { label: "PRINT METHOD ///", value: "Direct Line Thermal" },
        { label: "DENSITY ///", value: "576 dots/line" }
      ]
    },
    box2: {
      title: "Output Delivery",
      items: [
        { label: "SPEED", value: "80-160mm/sec" },
        { label: "WIDTH", value: "58mm / 80mm" },
        { label: "CUTTER", value: "Auto-Cutter Included" }
      ]
    },
    box3: {
      title: "Continuous operation guaranteed",
      items: [
        { icon: true, label: "INTERFACE", value: "LAN, USB, Serial" },
        { icon: 'border', label: "LIFESPAN", value: "150km Print Head" }
      ]
    }
  },
  {
    category: "SCALE",
    desc: ["Gram accuracy,", "Instant sync,", "Heavy duty."],
    models: [
      { name: "NewWay RTC1", image: "/products/scale_RTC1.png" },
      { name: "NewWay DAHUA", image: "/products/scale_DAHUA.png" }
    ],
    box1: {
      title: "[SENSORY COMPUTE]",
      items: [
        { label: "SENSOR ///", value: "High-precision Load Cell" },
        { label: "DISPLAY ///", value: "Dual LED/LCD" }
      ]
    },
    box2: {
      title: "Weight Interface",
      items: [
        { label: "CAPACITY", value: "Up to 30 KG" },
        { label: "ACCURACY", value: "2g / 5g Steps" },
        { label: "MATERIAL", value: "Stainless Steel Platter" }
      ]
    },
    box3: {
      title: "Trade approved calibration",
      items: [
        { icon: true, label: "INTERFACE", value: "RS-232 to POS" },
        { icon: 'border', label: "POWER", value: "Battery Backup" }
      ]
    }
  }
];

export default function SuteraShowcase() {
  const containerRef = useRef<HTMLElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Track active sub-model index per category
  const [activeModelIndices, setActiveModelIndices] = useState<number[]>(SHOWCASE_DATA.map(() => 0));

  // Auto-rotate sub-models every 10 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveModelIndices(prev => prev.map((idx, categoryIndex) => {
        const numModels = SHOWCASE_DATA[categoryIndex].models.length;
        if (numModels > 1) {
          return (idx + 1) % numModels;
        }
        return idx;
      }));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    if (!containerRef.current) return;

    // Set initial states
    SHOWCASE_DATA.forEach((_, index) => {
      gsap.set(`.showcase-item-${index}`, {
        y: index === 0 ? "0vh" : "100vh",
        opacity: index === 0 ? 1 : 0
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${SHOWCASE_DATA.length * 100}%`, // e.g. 700vh duration
        pin: true,
        scrub: 1,
      }
    });

    // Staggered sequence
    for (let i = 0; i < SHOWCASE_DATA.length - 1; i++) {
      // Outgoing item
      tl.to(`.showcase-item-${i}`, {
        y: "-100vh",
        opacity: 0,
        duration: 1,
        ease: "power2.inOut"
      }, i); // Starts at time corresponding to index

      // Incoming item
      tl.to(`.showcase-item-${i + 1}`, {
        y: "0vh",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
      }, i + 0.2); // Overlaps transition perfectly
    }
  }, { scope: containerRef });

  // Mouse Parallax Logic
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 45; 
    const y = -(e.clientY - rect.top - rect.height / 2) / 45;
    setRotation({ x, y });
  };
  const handleMouseLeave = () => setRotation({ x: 0, y: 0 });

  // Transforms computation for 3D interactions
  const productTransform = `perspective(1000px) rotateX(${rotation.y}deg) rotateY(${rotation.x}deg) scale3d(1.05, 1.05, 1.05)`;
  const foregroundTransform = `translate3d(${rotation.x * -1.5}px, ${rotation.y * 1.5}px, 0)`;
  const backgroundTransform = `translate3d(${rotation.x * 0.5}px, ${rotation.y * -0.5}px, 0)`;
  const echoTransform = `translate3d(${rotation.x * 3}px, ${rotation.y * -3}px, 0) scale(1.4)`;

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-white border-y border-[#e5e7eb] font-mono text-[#111111] overflow-hidden"
    >
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-full h-screen relative flex justify-center items-center"
        style={{ perspective: "1200px" }}
      >
        
        {/* Persistent Crosshairs */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 border-r border-b border-[#000] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 border-l border-b border-[#000] translate-x-1/2 -translate-y-1/2 pointer-events-none z-[100]" />
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 border-r border-t border-[#000] -translate-x-1/2 translate-y-1/2 pointer-events-none z-[100]" />
        <div className="absolute bottom-1/4 right-1/4 w-3 h-3 border-l border-t border-[#000] translate-x-1/2 translate-y-1/2 pointer-events-none z-[100]" />
        <div className="absolute top-1/2 left-[10%] text-xs text-gray-400 font-sans tracking-widest pointer-events-none z-[100]">+</div>
        <div className="absolute top-1/2 right-[10%] text-xs text-gray-400 font-sans tracking-widest pointer-events-none z-[100]">+</div>

        {SHOWCASE_DATA.map((item, index) => {
          const activeModelIndex = activeModelIndices[index];
          const activeModel = item.models[activeModelIndex];

          return (
            <div key={item.category} className={`showcase-item-${index} absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none`}>
              
              {/* Deep Parallax Echo */}
              <img src={activeModel.image} className="absolute z-0 w-[500px] md:w-[700px] object-contain opacity-[0.03] blur-[15px] mix-blend-darken filter grayscale transition-all duration-[1500ms] ease-out pointer-events-none" style={{ transform: echoTransform }} alt="" />
              
              {/* Header Text */}
              <div className="absolute top-24 md:top-12 left-6 md:left-[5%] z-20 transition-transform duration-100 ease-out" style={{ transform: backgroundTransform }}>
                <h2 className="text-[11vw] md:text-6xl lg:text-[7rem] font-sans font-black tracking-tighter uppercase leading-[0.85] text-[#0F172A] break-words md:whitespace-nowrap max-w-[90vw]">
                  {item.category}
                </h2>
                <p className="mt-4 md:mt-8 text-[10px] md:text-sm font-bold tracking-widest max-w-[200px] md:max-w-[280px] leading-relaxed uppercase border-l-2 border-black pl-3 md:pl-4 text-gray-800">
                  {item.desc.map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                </p>
              </div>
              
              {/* Central Images container (for crossfade auto-rotation logic) */}
              <div className="absolute inset-0 m-auto flex items-center justify-center w-full h-full pointer-events-auto">
                {item.models.map((model, mIdx) => {
                  const isActive = mIdx === activeModelIndex;
                  const isPast = mIdx < activeModelIndex;

                  // Keep 3D transform locked on container or apply individually, applying individually lets them pop properly
                  return (
                    <img 
                      key={model.name}
                      src={model.image} 
                      alt={model.name} 
                      className={`absolute left-0 right-0 m-auto top-[25vh] md:inset-0 z-20 w-[280px] h-[280px] md:w-[600px] md:h-[600px] md:mb-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] ${isActive ? 'opacity-100 translate-x-0 blur-none' : 'opacity-0 blur-sm ' + (isPast ? '-translate-x-12' : 'translate-x-12')}`} 
                      style={isActive ? { transform: productTransform } : {}} 
                    />
                  );
                })}
              </div>

            {/* Foreground SVG Connectors */}
            <div className="absolute inset-0 w-full h-full z-10 transition-transform duration-100 ease-out" style={{ transform: foregroundTransform }}>
              <svg className="w-full h-full" preserveAspectRatio="none">
                <polyline points="25%,45% 42%,55%" fill="none" stroke="black" strokeWidth="1" />
                <rect x="25%" y="45%" width="6" height="6" fill="white" stroke="black" transform="translate(-3, -3)" />
                <polyline points="75%,35% 65%,45% 58%,45%" fill="none" stroke="black" strokeWidth="1" />
                <rect x="75%" y="35%" width="6" height="6" fill="white" stroke="black" transform="translate(-3, -3)" />
                <polyline points="80%,70% 65%,65%" fill="none" stroke="black" strokeWidth="1" />
                <rect x="80%" y="70%" width="6" height="6" fill="black" stroke="black" transform="translate(-3, -3)" />
              </svg>
            </div>
            {/* Foreground SVG Connectors & Data Boxes */}
            <div className="absolute inset-0 w-full h-full z-20 transition-transform duration-100 ease-out" style={{ transform: foregroundTransform }}>
              
              <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none">
                <polyline points="200,500 200,600 350,600" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <polyline points="800,200 900,200 900,300" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                <polyline points="750,700 850,700 850,750" fill="none" stroke="rgba(0,0,0,0.1)" strokeWidth="1" />
              </svg>

              <div className="hidden md:block absolute top-1/4 left-[20%] w-4 h-4 border-t border-l border-black overflow-hidden pointer-events-none"></div>
              <div className="hidden md:block absolute top-1/4 right-[25%] w-4 h-4 border-t border-l border-black overflow-hidden pointer-events-none"></div>
              <div className="hidden md:block absolute bottom-1/4 left-[20%] w-4 h-4 border-t border-l border-black overflow-hidden rotate-180 pointer-events-none"></div>
              <div className="hidden md:block absolute bottom-1/4 right-[25%] w-4 h-4 border-t border-l border-black overflow-hidden rotate-180 pointer-events-none"></div>
              <div className="hidden md:block absolute top-[40%] right-[30%] w-1.5 h-1.5 border border-black pointer-events-none"></div>
              <div className="hidden md:block absolute top-[50%] left-[20%] w-1.5 h-1.5 border border-black pointer-events-none z-[100]"></div>
              
              <div className="hidden md:block absolute top-1/2 left-[10%] text-xs text-gray-400 font-sans tracking-widest pointer-events-none z-[100]">+</div>
              <div className="hidden md:block absolute top-1/2 right-[10%] text-xs text-gray-400 font-sans tracking-widest pointer-events-none z-[100]">+</div>
              
              {/* Box 1: Left */}
              <div className="hidden md:block absolute top-1/2 left-6 md:left-[8%] w-[240px] md:w-[280px] -translate-y-1/2 border border-black p-5 bg-white/50 backdrop-blur-md pointer-events-auto shadow-sm">
                <div className="text-xs md:text-sm font-black uppercase bg-[#0F172A] text-white px-3 py-1.5 inline-block mb-5">
                  {item.box1.title}
                </div>
                <div className="space-y-4">
                  <div className="text-xs uppercase tracking-widest border-b border-black/20 pb-3">
                    <div className="font-bold text-black mb-1.5">01. {item.box1.items[0].label}</div>
                    <div className="text-gray-700 pl-4">{item.box1.items[0].value}</div>
                  </div>
                  <div className="text-xs uppercase tracking-widest">
                    <div className="font-bold text-black mb-1.5">02. {item.box1.items[1].label}</div>
                    <div className="text-gray-700 pl-4">{item.box1.items[1].value}</div>
                  </div>
                </div>
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-white border border-black"></div>
              </div>

              {/* Box 2: Right Top */}
              <div className="hidden md:block absolute top-[30%] right-6 md:right-[12%] w-[220px] md:w-[260px] -translate-y-1/2 border-2 border-[#0F172A] p-4 bg-white/70 backdrop-blur-md shadow-[6px_6px_0_#0F172A] pointer-events-auto">
                <div className="text-xs font-bold uppercase tracking-widest border-b-2 border-[#0F172A] pb-2 mb-3 text-[#0F172A]">
                  {item.box2.title}
                </div>
                <div className="space-y-3 text-xs uppercase font-semibold text-gray-800">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{item.box2.items[0].label}</span>
                    <span className="text-right">{item.box2.items[0].value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{item.box2.items[1].label}</span>
                    <span className="text-right">{item.box2.items[1].value}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500">{item.box2.items[2].label}</span>
                    <span className="text-right">{item.box2.items[2].value}</span>
                  </div>
                </div>
              </div>

              {/* Box 3: Right Bottom */}
              <div className="hidden md:block absolute top-[70%] right-6 md:right-[10%] w-[260px] -translate-y-1/2 pointer-events-auto">
                <div className="text-xs uppercase space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="block w-2.5 h-2.5 bg-[#0F172A]"></span>
                    <span className="font-bold text-[#0F172A]">{item.box3.items[0].label}</span>
                  </div>
                  <div className="text-gray-600 font-medium pl-5 border-l-2 border-[#0F172A] ml-1 mb-3 py-1">{item.box3.items[0].value}</div>
                  <div className="flex items-center gap-3">
                    <span className="block w-2.5 h-2.5 border-2 border-[#0F172A]"></span>
                    <span className="font-bold text-[#0F172A]">{item.box3.items[1].label}</span>
                  </div>
                  <div className="text-gray-600 font-medium pl-5 border-l-2 border-[#0F172A] ml-1 py-1">{item.box3.items[1].value}</div>
                </div>
                <div className="mt-5 text-xs text-gray-500 font-bold uppercase tracking-wider border-t-2 border-dashed border-gray-300 pt-3">
                  {item.box3.title}
                </div>
              </div>

              {/* Mobile Spec Block (Only visible on small screens) */}
              <div className="md:hidden absolute top-[65vh] left-0 w-full px-6 flex flex-col gap-3 pointer-events-auto">
                <div className="bg-white/80 backdrop-blur-md border border-[#0F172A]/10 p-4 rounded-xl shadow-2xl shadow-black/10">
                  <div className="flex items-center justify-between border-b border-gray-200 pb-2.5 mb-2.5">
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">{item.box1.items[0].label}</span>
                    <span className="text-xs font-black text-[#0F172A]">{item.box1.items[0].value}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-gray-200 pb-2.5 mb-2.5">
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">{item.box2.items[0].label}</span>
                    <span className="text-xs font-black text-[#0F172A]">{item.box2.items[0].value}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase">{item.box3.items[0].label}</span>
                    <span className="text-xs font-black text-[#0F172A]">{item.box3.items[0].value}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Sub-Model Hover Ribbon Navigator (only visible if there are multiple models for this sub-category) */}
            {item.models.length > 1 && (
              <div className="absolute bottom-8 md:bottom-12 left-0 w-full z-[200] pointer-events-auto">
                <div className="relative w-full max-w-[100vw] overflow-hidden flex items-center h-16 md:h-20 mask-image-[linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
                  
                  {/* The shifting continuous ribbon track */}
                  <div 
                    className="flex items-center absolute transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] h-full" 
                    style={{ transform: `translateX(calc(50vw - ${activeModelIndex * 180}px - 90px))` }}
                  >
                    {item.models.map((model, mIdx) => {
                      const isActive = activeModelIndex === mIdx;
                      return (
                        <div 
                          key={model.name}
                          onMouseEnter={() => {
                            setActiveModelIndices(prev => {
                              const next = [...prev];
                              next[index] = mIdx;
                              return next;
                            });
                          }}
                          className={`w-[180px] h-full flex-shrink-0 flex items-center justify-center cursor-pointer transition-all duration-300 group`}
                        >
                          <div className={`relative px-4 py-2 rounded-full transition-all duration-300 ${isActive ? 'bg-[#002542] text-white shadow-xl scale-110 drop-shadow-[0_8px_16px_rgba(0,37,66,0.4)]' : 'bg-transparent text-gray-400 group-hover:text-[#002542] group-hover:bg-black/5 group-hover:scale-105'}`}>
                            {isActive && (
                              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00e5ff] rounded-full shadow-[0_0_8px_#00e5ff]" />
                            )}
                            <span className="text-xs md:text-sm font-bold tracking-widest uppercase">
                              {model.name}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                
                {/* Center Focal Indicator Graphic */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#002542] shadow-[0_0_12px_rgba(0,37,66,0.6)] pointer-events-none" />
              </div>
            )}

          </div>
        );
        })}

      </div>
    </section>
  );
}
