"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/lib/animations";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowRight,
  Check,
  Clock,
  Shield,
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    city: "",
    businessType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-primary-light/20 to-white pt-32 pb-20 lg:pt-40 lg:pb-8">
        <div className="relative mx-auto max-w-[1320px] px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Contact Us
            </span>
            <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
              Book a free demo
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              See RR POS in action. Our team will walk you through the
              software, answer your questions, and help you get started.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="rounded-2xl border border-green-200 bg-green-50 p-12 text-center">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <Check className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-foreground">
                    Thank you!
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Your demo request has been received. Our team will contact
                    you within 2 hours during business hours.
                  </p>
                </div>
              ) : (
                <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm lg:p-10">
                  <h2 className="text-2xl font-bold text-foreground">
                    Request a Demo
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    Fill in your details and we&apos;ll get back to you within 2 hours.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="business"
                        required
                        value={formData.business}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Your business name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Business Type *
                      </label>
                      <select
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      >
                        <option value="">Select type</option>
                        <option value="grocery">Grocery / Supermarket</option>
                        <option value="pharmacy">Pharmacy</option>
                        <option value="garments">Garments / Fashion</option>
                        <option value="electronics">Electronics</option>
                        <option value="general">General Store</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="you@business.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        placeholder="Your city"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        Message (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Button type="submit" size="lg" className="w-full gap-2">
                        Book Free Demo
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Contact Info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
                <div className="mt-4 flex flex-col gap-4">
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Phone</div>
                      {SITE.phone}
                    </div>
                  </a>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      {SITE.email}
                    </div>
                  </a>
                  <a
                    href={SITE.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-primary transition-colors"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                      <MessageCircle className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">WhatsApp</div>
                      Chat with us
                    </div>
                  </a>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Office</div>
                      Chennai, Tamil Nadu, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-foreground">What to expect</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {[
                    { icon: Clock, text: "30-minute personalized demo" },
                    { icon: Shield, text: "No commitment required" },
                    { icon: Check, text: "Free setup and onboarding" },
                    { icon: Phone, text: "Response within 2 hours" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-gray-600">
                      <item.icon className="h-4 w-4 shrink-0 text-primary" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
