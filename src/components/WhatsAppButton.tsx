"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919824051360";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.695-6.42-1.886l-.246-.159-3.496.917.935-3.416-.174-.258A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
  </svg>
);

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("Hi! I'm interested in your services. Can we discuss?");

  const handleSend = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-3">
        <div
          className={cn(
            "rounded-full bg-[#111b2e] border border-[#25D366]/20 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300",
            hovered && !isOpen
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          )}
        >
          Chat with us! 👋
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle WhatsApp Chat"
          className={cn(
            "group relative flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer z-50",
            isOpen ? "bg-red-500 shadow-red-500/30 hover:shadow-red-500/40" : "bg-[#25D366] shadow-[#25D366]/30 hover:shadow-[#25D366]/40"
          )}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {!isOpen && (
            <>
              <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" />
              <div className="absolute -inset-1.5 rounded-full border-2 border-[#25D366]/15" />
            </>
          )}
          
          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0, scale: isOpen ? 0 : 1 }}
            className="absolute flex items-center justify-center"
          >
            <WhatsAppIcon className="h-7 w-7 text-white" />
          </motion.div>

          <motion.div
            initial={false}
            animate={{ rotate: isOpen ? 0 : -90, scale: isOpen ? 1 : 0 }}
            className="absolute flex items-center justify-center"
          >
            <X className="h-6 w-6 text-white" />
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed bottom-[90px] right-6 z-[998] w-[340px] max-w-[calc(100vw-48px)] bg-[#0b141a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden font-sans"
          >
            {/* Header */}
            <div className="bg-[#111b21] p-4 flex items-center gap-3 border-b border-white/5">
              <div className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                <WhatsAppIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[1.05rem] leading-tight">RR POS</h3>
                <p className="text-[#00a884] text-xs font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 bg-[#00a884] rounded-full animate-pulse" />
                  Online | Replies instantly
                </p>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 space-y-4">
              {/* Call / Email buttons */}
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:9824051360" 
                  className="flex items-center justify-center gap-2 bg-[#1f2c34] hover:bg-[#2a3942] text-white py-2.5 rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-white/5"
                >
                  <Phone className="h-4 w-4 text-[#00a884]" /> Call Now
                </a>
                <a 
                  href="mailto:newwaytraders@gmail.com" 
                  className="flex items-center justify-center gap-2 bg-[#1f2c34] hover:bg-[#2a3942] text-white py-2.5 rounded-xl text-sm font-medium transition-colors border border-transparent hover:border-white/5"
                >
                  <Mail className="h-4 w-4 text-[#00a884]" /> Email Us
                </a>
              </div>

              {/* Chat bubble */}
              <div className="bg-[#1f2c34] text-white p-3 rounded-xl rounded-tl-sm text-[0.95rem] leading-relaxed relative border border-white/5 shadow-sm">
                {/* Tail for chat bubble */}
                <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-[#1f2c34] border-l-[8px] border-l-transparent" />
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-transparent outline-none resize-none min-h-[60px] text-[#e9edef] placeholder-gray-500"
                  placeholder="Type your message..."
                />
              </div>

              {/* Send button */}
              <button 
                onClick={handleSend}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-[#111b21] py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer text-[0.95rem]"
              >
                <WhatsAppIcon className="h-5 w-5" /> Send via WhatsApp
              </button>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Get a Quote", "Book a Call", "Ask a Question"].map((chip) => (
                  <button 
                    key={chip}
                    onClick={() => setMessage(chip)}
                    className="px-3 py-1.5 bg-[#111b21] hover:bg-[#1f2c34] text-[#00a884] text-xs font-medium rounded-full border border-[#00a884]/30 transition-colors cursor-pointer"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
