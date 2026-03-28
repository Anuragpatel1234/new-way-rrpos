import { Mail, Phone, Share2, Globe, Briefcase, Timer, CreditCard, Terminal, Handshake, ArrowRight } from "lucide-react";
import React from 'react';

export default function ContactPage() {
  return (
    <div className="bg-[#faf9fc] text-[#1a1c1e] antialiased min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 md:py-32 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 lg:col-span-7">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#002542] tracking-tight leading-[1.1] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[#43474d] leading-relaxed max-w-2xl">
              Our team is dedicated to providing the architectural stability your business needs to grow. From technical hurdles to scaling solutions, we're your partner in commerce.
            </p>
          </div>
          <div className="hidden md:block md:col-span-4 lg:col-span-5 relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#abc9ef]/20 rounded-full blur-3xl"></div>
            <img 
              className="rounded-xl shadow-2xl relative z-10 w-full aspect-[4/3] object-cover" 
              alt="Modern high-end retail interior" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqIuWbPZeHprK7M_OekTxa6U61McAlYOnzxl-tOnRAi1rHRV4TqCea9zQv1dsbPGr9UiIv2wGQSEp6WBzrqkl-1tJhND7qc5QjubIQg0UZkw4EK9xtJJ16he2CG7NtIbN4meXG7C9Q8nQEla0p-sIMblecIQkxYQuz_nlyGqGLRQutDuLpdUcTi2dhjH6mA2AHpHhSPvdyiQTbdvLDxIrDlNsgwbB-4EEp8KdGGwaJ61Tdd-upvr09km1IEmXLBhxbmeYlCjGpEVQj"
            />
          </div>
        </div>
      </section>

      {/* Form and Contact Details */}
      <section className="py-24 bg-[#f4f3f6]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Contact Form */}
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-[0_8px_24px_rgba(0,37,66,0.06)]">
              <h2 className="text-2xl font-bold text-[#002542] mb-8 tracking-tight">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#43474d]">Full Name</label>
                    <input className="w-full bg-[#f4f3f6] border-[#c3c6ce]/20 rounded-md focus:ring-4 focus:ring-[#abc9ef] focus:border-[#002542] px-4 py-3 text-[#1a1c1e] transition-all" placeholder="John Doe" type="text"/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-[#43474d]">Email Address</label>
                    <input className="w-full bg-[#f4f3f6] border-[#c3c6ce]/20 rounded-md focus:ring-4 focus:ring-[#abc9ef] focus:border-[#002542] px-4 py-3 text-[#1a1c1e] transition-all" placeholder="john@company.com" type="email"/>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#43474d]">Company Name</label>
                  <input className="w-full bg-[#f4f3f6] border-[#c3c6ce]/20 rounded-md focus:ring-4 focus:ring-[#abc9ef] focus:border-[#002542] px-4 py-3 text-[#1a1c1e] transition-all" placeholder="Global Enterprise Inc." type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#43474d]">Your Message</label>
                  <textarea className="w-full bg-[#f4f3f6] border-[#c3c6ce]/20 rounded-md focus:ring-4 focus:ring-[#abc9ef] focus:border-[#002542] px-4 py-3 text-[#1a1c1e] transition-all" placeholder="How can we help your business grow?" rows={5}></textarea>
                </div>
                <button className="w-full bg-gradient-to-br from-[#002542] to-[#1b3b5a] text-[#ffffff] py-4 rounded-md font-bold text-lg hover:opacity-95 transition-all shadow-lg" type="submit">
                  Send Inquiry
                </button>
              </form>
            </div>

            {/* Right: Contact Details */}
            <div className="flex flex-col justify-center space-y-12">
              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#43474d] mb-4">Immediate Assistance</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d8e3f4] p-3 rounded-lg text-[#002542]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002542]">Email Support</p>
                      <p className="text-[#43474d]">support@newway.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-[#d8e3f4] p-3 rounded-lg text-[#002542]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-[#002542]">Sales Hotline</p>
                      <p className="text-[#43474d]">+91 98765 43210</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-[#43474d] mb-4">Connect with us</h3>
                <div className="flex gap-4">
                  <a className="w-12 h-12 flex items-center justify-center bg-[#e3e2e5] rounded-full text-[#002542] hover:bg-[#002542] group transition-all" href="#">
                    <Share2 className="w-6 h-6 group-hover:stroke-white transition-colors" />
                  </a>
                  <a className="w-12 h-12 flex items-center justify-center bg-[#e3e2e5] rounded-full text-[#002542] hover:bg-[#002542] group transition-all" href="#">
                    <Globe className="w-6 h-6 group-hover:stroke-white transition-colors"/>
                  </a>
                  <a className="w-12 h-12 flex items-center justify-center bg-[#e3e2e5] rounded-full text-[#002542] hover:bg-[#002542] group transition-all" href="#">
                    <Briefcase className="w-6 h-6 group-hover:stroke-white transition-colors"/>
                  </a>
                </div>
              </div>

              <div className="p-8 bg-[#002542] text-[#ffffff] rounded-xl relative overflow-hidden">
                <div className="relative z-10">
                  <p className="text-sm opacity-80 mb-2">Current Support Wait Time</p>
                  <p className="text-3xl font-black">&lt; 15 Minutes</p>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <Timer className="w-32 h-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departmental Support Section */}
      <section className="py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002542] tracking-tight">Specialized Departments</h2>
            <p className="text-[#43474d] mt-4">Connect directly with the experts who can help you best.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Sales */}
            <div className="bg-[#ffffff] p-8 rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-12 h-12 bg-[#d3deef] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002542] group-hover:text-[#ffffff] transition-colors">
                <CreditCard className="w-6 h-6 text-[#002542] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-3">Sales & Billing</h3>
              <p className="text-[#43474d] mb-6 text-sm leading-relaxed">Questions about pricing, hardware packages, or your existing subscription billing.</p>
              <a className="text-[#002542] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Contact Sales <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* Tech Support */}
            <div className="bg-[#ffffff] p-8 rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-12 h-12 bg-[#d3deef] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002542] group-hover:text-[#ffffff] transition-colors">
                <Terminal className="w-6 h-6 text-[#002542] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-3">Technical Support</h3>
              <p className="text-[#43474d] mb-6 text-sm leading-relaxed">Integration help, software troubleshooting, or hardware setup assistance 24/7.</p>
              <a className="text-[#002542] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Open Ticket <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            {/* Partnerships */}
            <div className="bg-[#ffffff] p-8 rounded-xl transition-all hover:-translate-y-2 hover:shadow-xl group">
              <div className="w-12 h-12 bg-[#d3deef] rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#002542] group-hover:text-[#ffffff] transition-colors">
                <Handshake className="w-6 h-6 text-[#002542] group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-3">Partnerships</h3>
              <p className="text-[#43474d] mb-6 text-sm leading-relaxed">Explore reseller opportunities or API integrations for your own software ecosystem.</p>
              <a className="text-[#002542] font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                  Partner with Us <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-24 bg-[#f4f3f6] overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4">
              <h2 className="text-3xl font-bold text-[#002542] tracking-tight mb-6">Global Presence</h2>
              <p className="text-[#43474d] mb-8">Architecting commerce across continents. Visit one of our regional hubs for a physical demo.</p>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-[#002542]">New York (HQ)</h4>
                  <p className="text-sm text-[#43474d] leading-relaxed">
                      245 Park Avenue, 42nd Floor<br/>
                      New York, NY 10167, USA
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#002542]">London</h4>
                  <p className="text-sm text-[#43474d] leading-relaxed">
                      One Canada Square, Canary Wharf<br/>
                      London E14 5AB, UK
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#002542]">Tokyo</h4>
                  <p className="text-sm text-[#43474d] leading-relaxed">
                      Roppongi Hills Mori Tower<br/>
                      6-10-1 Roppongi, Tokyo, Japan
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 relative">
              <div className="rounded-xl overflow-hidden shadow-2xl h-[500px] w-full bg-[#e3e2e5]">
                <img 
                  className="w-full h-full object-cover opacity-80" 
                  alt="Abstracted world map with luminous nodes"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBETwhNRpsYjG5as_ERIqIxAbgKYgn9jC9FShK71PBDEBg2nKbsb2BeWV_PL3uilbjyguEFaAbw_-8yFFc6Ls6Fah0zSoSRtmVJKjHWc9s-iDsiJBICtWwNKTkxB0uJCpgb-PKn1bxFqrQZcZRZoP46iwTcNYzJl6JXaMNdnqCtAeZWTpqpPTGNmH1qTaJzAgRNwnAEkxEBTRyBWbX3cvkcprXhLGElnSjdZ1ySTBMXgCUXN-ocWfi_g3FJGHNVyopWzfzD1hIHnre"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
