"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "919824051360";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (digitsOnly.length < 10) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const message = `Hello RR POS, I would like to make an enquiry.\n\n*Name:* ${formData.name.trim()}\n*Email:* ${formData.email.trim()}\n*Contact:* ${formData.phone.trim()}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setIsOpen(false);
    setFormData({ name: "", email: "", phone: "" });
    setErrors({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[999] flex items-center gap-3">
        <div
          className={cn(
            "rounded-full bg-[#111b2e] border border-[#25D366]/20 px-4 py-2.5 text-sm font-medium text-white shadow-lg transition-all duration-300",
            hovered
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4 pointer-events-none"
          )}
        >
          Chat with us! 👋
        </div>

        <button
          onClick={() => setIsOpen(true)}
          aria-label="Chat on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 cursor-pointer"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <div className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping" />
          <div className="absolute -inset-1.5 rounded-full border-2 border-[#25D366]/15" />
          <svg
            className="relative h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.612.638l4.685-1.228A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.37 0-4.567-.695-6.42-1.886l-.246-.159-3.496.917.935-3.416-.174-.258A9.953 9.953 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] bg-black/75 backdrop-blur-md"
              onClick={() => {
                setIsOpen(false);
                setErrors({});
              }}
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[1001] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.4 }}
                className="w-full max-w-md bg-[#04152B]/95 border border-[#3B82F6]/20 rounded-2xl p-6 shadow-2xl relative pointer-events-auto overflow-hidden"
              >
                {/* Glow Effects */}
                <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#25D366]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setErrors({});
                  }}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/5 cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Modal Title */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                    Enquire via WhatsApp
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Enter your details to start the chat with our support team instantly.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <User className="h-4.5 w-4.5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className={cn(
                          "block w-full pl-10.5 pr-4 py-2.5 text-sm bg-[#082042]/50 text-white rounded-xl border transition-all placeholder-gray-500 focus:outline-none focus:ring-2",
                          errors.name
                            ? "border-red-500/50 focus:ring-red-500/30"
                            : "border-white/10 focus:border-[#3B82F6]/50 focus:ring-[#3B82F6]/20"
                        )}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1 pl-1">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Mail className="h-4.5 w-4.5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        className={cn(
                          "block w-full pl-10.5 pr-4 py-2.5 text-sm bg-[#082042]/50 text-white rounded-xl border transition-all placeholder-gray-500 focus:outline-none focus:ring-2",
                          errors.email
                            ? "border-red-500/50 focus:ring-red-500/30"
                            : "border-white/10 focus:border-[#3B82F6]/50 focus:ring-[#3B82F6]/20"
                        )}
                      />
                    </div>
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1 pl-1">{errors.email}</p>
                    )}
                  </div>

                  {/* Contact Number Input */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1.5">
                      Contact Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-500">
                        <Phone className="h-4.5 w-4.5" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className={cn(
                          "block w-full pl-10.5 pr-4 py-2.5 text-sm bg-[#082042]/50 text-white rounded-xl border transition-all placeholder-gray-500 focus:outline-none focus:ring-2",
                          errors.phone
                            ? "border-red-500/50 focus:ring-red-500/30"
                            : "border-white/10 focus:border-[#3B82F6]/50 focus:ring-[#3B82F6]/20"
                        )}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1 pl-1">{errors.phone}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full mt-2 cursor-pointer flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-[#2563eb] text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-[#3B82F6]/20 hover:shadow-xl hover:shadow-[#3B82F6]/30 hover:-translate-y-0.5"
                  >
                    Start Chat
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
