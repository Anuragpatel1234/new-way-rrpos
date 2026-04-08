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
    image: "/products/touch_2302.png",
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
    image: "/products/handheld_N1.png",
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
    image: "/products/channel_1515A.png",
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
    image: "/products/cash_2307.png",
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
    image: "/products/scanner_790A.png",
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
    image: "/products/printer_XP-235B.png",
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
    image: "/products/scale_RTC1.png",
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

        {SHOWCASE_DATA.map((item, index) => (
          <div key={item.category} className={`showcase-item-${index} absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none`}>
            
            {/* Deep Parallax Echo */}
            <img src={item.image} className="absolute z-0 w-[500px] md:w-[700px] object-contain opacity-[0.03] blur-md mix-blend-darken filter grayscale transition-transform duration-100 ease-out pointer-events-none" style={{ transform: echoTransform }} alt="" />
            
            {/* Header Text */}
            <div className="absolute top-6 md:top-12 left-6 md:left-[5%] z-20 transition-transform duration-100 ease-out" style={{ transform: backgroundTransform }}>
              <h2 className="text-5xl lg:text-[7rem] font-sans font-black tracking-tighter uppercase leading-[0.85] text-black">
                {item.category}
              </h2>
              <p className="mt-8 text-[10px] md:text-xs font-bold tracking-widest max-w-[200px] leading-relaxed uppercase border-l-2 border-black pl-3">
                {item.desc.map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
              </p>
            </div>
            
            {/* Central Image */}
            <img src={item.image} alt={item.category} className="relative z-20 w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-75 ease-out pointer-events-auto" style={{ transform: productTransform }} />

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

            {/* Foreground Data Boxes */}
            <div className="absolute inset-0 w-full h-full z-20 transition-transform duration-100 ease-out" style={{ transform: foregroundTransform }}>
              
              <div className="absolute top-[45%] left-6 md:left-[12%] w-[240px] -translate-y-1/2 pointer-events-auto">
                <div className="text-[10px] font-bold bg-black text-white px-2 py-1 mb-1 inline-block">{item.box1.title}</div>
                <div className="border border-black bg-white/80 p-3 text-[10px] font-medium leading-relaxed shadow-sm">
                  <div className="flex border-b border-gray-300 pb-1 mb-1"><span className="w-6">01.</span><span className="font-bold">{item.box1.items[0].label}</span></div>
                  <div className="pl-6 pb-2 text-gray-600">{item.box1.items[0].value}</div>
                  <div className="flex border-b border-gray-300 pb-1 mb-1"><span className="w-6">02.</span><span className="font-bold">{item.box1.items[1].label}</span></div>
                  <div className="pl-6 text-gray-600">{item.box1.items[1].value}</div>
                </div>
              </div>
              
              <div className="absolute top-[35%] right-6 md:right-[15%] w-[240px] -translate-y-1/2 pointer-events-auto">
                <div className="border border-black bg-white/80 p-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-[10px]">
                  <div className="font-bold mb-2 uppercase tracking-wide border-b border-black pb-1">{item.box2.title}</div>
                  {item.box2.items.map((b2) => (
                    <div key={b2.label} className="flex justify-between mb-1">
                      <span className="text-gray-500">{b2.label}</span>
                      <span className="font-bold">{b2.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute top-[70%] right-6 md:right-[10%] w-[220px] -translate-y-1/2 pointer-events-auto">
                <div className="text-[10px] uppercase space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="block w-2 h-2 bg-black"></span>
                    <span className="font-bold">{item.box3.items[0].label}</span>
                  </div>
                  <div className="text-gray-500 pl-4 border-l border-black ml-1 mb-2 py-1">{item.box3.items[0].value}</div>
                  <div className="flex items-center gap-2">
                    <span className="block w-2 h-2 border border-black"></span>
                    <span className="font-bold">{item.box3.items[1].label}</span>
                  </div>
                  <div className="text-gray-500 pl-4 border-l border-black ml-1 py-1">{item.box3.items[1].value}</div>
                </div>
                <div className="mt-4 text-[9px] text-gray-400 uppercase tracking-widest border-t border-dashed border-gray-300 pt-2 bg-white/50">
                  {item.box3.title}
                </div>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}
