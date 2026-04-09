"use client";

import {
  Share2,
  Headphones,
  CircleDollarSign,
  MapPin,
  MoreHorizontal,
  ArrowRight,
  Check,
  Building2,
  Compass,
  Network,
  Plus,
  Minus,
  LocateFixed,
} from "lucide-react";
import React from "react";
import { GOOGLE_MAPS_NWT, SITE } from "@/lib/constants";

const NETWORK_MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB9To4oohs_8ghA98GW4mJOwhrledxbXLdPhWQiRJw6gibt8apSaDftB8Eggwj9taSlOH6Rc4ZIMtTTN0_smrugbS6Fi3GUcZlzxGW4jbMx8MBzmHcPk6Zlzs9bfvpizJuQPnLk09EUp1J6tgE-hSO8aPM4T-_l8HMIKODp5WXds5TOhGKRd5g7LE7Mywrus93P1DL31rDjPdOJlkE-wRpzQTpqZxPpYtf2ujZnqRA7oBxBmaaNOOZT9gRBqWyWYlbCKZAmyAMUUWw";

const GLOBAL_PRESENCE_HUBS = [
  {
    name: "UK",
    line1: "United Kingdom — regional hub",
    line2: "Commercial coverage, demos, and account coordination for UK retailers.",
  },
  {
    name: "Bahrain",
    line1: "Kingdom of Bahrain — regional hub",
    line2: "Gulf market presence, logistics alignment, and partner-led engagements.",
  },
  {
    name: "East Africa",
    line1: "East Africa — regional operations",
    line2: "Multi-country partner network, implementations, and in-market support.",
  },
  {
    name: "Ethiopia",
    line1: "Ethiopia — regional hub",
    line2: "Local market development, training, and field coordination.",
  },
] as const;

const MAP_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBjbCSX8gsHCEgq-EJETjO4LVZA2PihaGQjpTYAIs5a62695XbNuFHZ9K7ftj_tW86k5euLkV9b-WsdVb35ero6UM5ImG_im-BQY1-SVNzb9nQyA-X577pW4Z-6V4qcb773MylpbjBk5pfV314Qbkf-94fHNcZkgFTgw54msSLCiYWuMPL8ZIVYgNiHjb6lWLIak19n33i9C_yXuLFensta9My7SuaL_0KDakqiVsYT5HzUqjifpCUqbaGnnXJVIH7NBJNMTxFQi_g";

export default function ContactPage() {
  return (
    <div className="bg-[#faf9fc] text-[#1a1c1e] antialiased min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28 bg-[#faf9fc] border-b border-[#e8e6ed]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_-10%,rgba(171,201,239,0.22),transparent)]" aria-hidden />
        <div className="relative max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 xl:col-span-7">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] font-extrabold text-[#002542] tracking-tight leading-[1.08] mb-4">
                Get in touch
              </h1>
              <p className="mb-6 max-w-2xl border-l-[3px] border-[#abc9ef] pl-4 md:pl-5 text-base md:text-lg font-medium leading-relaxed tracking-tight text-[#002542]/88">
                Experience the precision of architectural commerce. Our team of specialists is ready to help you
                curate your enterprise operations with unmatched technical clarity.
              </p>
              <p className="text-lg md:text-xl text-[#43474d] leading-relaxed max-w-xl">
                Talk to us about <strong className="font-semibold text-[#002542]">RR POS</strong> software, checkout
                hardware, training, and support. We handle single-store setups and multi-branch rollouts—from demos
                and quotes to installation and after-sales care.
              </p>
              <ul className="mt-6 space-y-2.5 max-w-xl">
                {[
                  "GST-ready billing, inventory, and reports tailored for Indian retail",
                  "POS terminals, barcode scanners, thermal printers, and cash drawers",
                ].map((line) => (
                  <li key={line} className="flex gap-2.5 text-sm md:text-[0.9375rem] text-[#43474d] leading-snug">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d3deef]/80 text-[#002542]">
                      <Check className="h-3 w-3 stroke-[3]" aria-hidden />
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                <div
                  className="absolute -right-6 -top-8 h-48 w-48 rounded-full bg-[#abc9ef]/25 blur-3xl md:h-56 md:w-56"
                  aria-hidden
                />
                <figure className="relative z-10">
                  <div className="overflow-hidden rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,37,66,0.18)] ring-1 ring-[#002542]/[0.06]">
                    <img
                      className="aspect-[4/3] w-full object-cover"
                      alt="Reception area at our Ahmedabad office"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqIuWbPZeHprK7M_OekTxa6U61McAlYOnzxl-tOnRAi1rHRV4TqCea9zQv1dsbPGr9UiIv2wGQSEp6WBzrqkl-1tJhND7qc5QjubIQg0UZkw4EK9xtJJ16he2CG7NtIbN4meXG7C9Q8nQEla0p-sIMblecIQkxYQuz_nlyGqGLRQutDuLpdUcTi2dhjH6mA2AHpHhSPvdyiQTbdvLDxIrDlNsgwbB-4EEp8KdGGwaJ61Tdd-upvr09km1IEmXLBhxbmeYlCjGpEVQj"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connect + Send Inquiry (dark layout) */}
      <section className="py-10 md:py-14 bg-[#060e20]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,280px)_1fr] lg:grid-cols-[minmax(0,300px)_1fr] gap-0 bg-[#131b2e] rounded-lg md:rounded-xl overflow-hidden shadow-xl shadow-black/30 border border-[#44474d]/20">
            {/* Left: channels + map */}
            <aside className="bg-[#171f33] p-5 md:p-7 flex flex-col gap-6 md:gap-7 border-b md:border-b-0 md:border-r border-[#44474d]/15">
              <div>
                <h2 className="text-xl md:text-2xl font-extrabold tracking-tight text-[#a4c9ff] mb-2">
                  Connect with our experts.
                </h2>
                <p className="text-[#c4c6cd] leading-snug text-xs md:text-sm">
                  Choose the channel that fits you—support, sales, or stay in touch for updates.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:gap-5">
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="group flex gap-3 items-start cursor-pointer rounded-lg -m-1 p-1.5 hover:bg-[#222a3d]/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#222a3d] group-hover:bg-[#002d56] transition-colors duration-300">
                    <Headphones className="w-5 h-5 text-[#a4c9ff]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#dae2fd] text-sm mb-0.5">Technical Support</h3>
                    <p className="text-xs text-[#c4c6cd] leading-snug">Help with POS, printers, and setup. Call {SITE.phone}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex gap-3 items-start cursor-pointer rounded-lg -m-1 p-1.5 hover:bg-[#222a3d]/50 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[#222a3d] group-hover:bg-[#002d56] transition-colors duration-300">
                    <CircleDollarSign className="w-5 h-5 text-[#a4c9ff]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#dae2fd] text-sm mb-0.5">Sales &amp; quotes</h3>
                    <p className="text-xs text-[#c4c6cd] leading-snug">Hardware packages and pricing. {SITE.email}</p>
                  </div>
                </a>
                <div className="group flex gap-3 items-start">
                  <div className="p-2 rounded-lg bg-[#222a3d]">
                    <Share2 className="w-5 h-5 text-[#a4c9ff]" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#dae2fd] text-sm mb-0.5">Community &amp; updates</h3>
                    <p className="text-xs text-[#c4c6cd] leading-snug">Follow {SITE.name} for product news and tips.</p>
                  </div>
                </div>
              </div>
              <div className="mt-auto pt-4">
                <div className="relative h-32 md:h-36 w-full rounded-lg overflow-hidden border border-[#44474d]/20">
                  <div className="absolute inset-0 bg-[#a4c9ff]/10 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-[#a4c9ff]/50" aria-hidden />
                  </div>
                  <img
                    className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
                    alt="Office building exterior"
                    src={MAP_IMAGE}
                  />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#a4c9ff]">Visit us</p>
                    <p className="text-xs text-[#dae2fd] leading-tight">Ashram Road, Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>
            </aside>

            {/* Right: form */}
            <section className="bg-[#0b1326] p-5 md:p-8 lg:p-10 flex flex-col">
              <div className="flex justify-between items-center mb-5 md:mb-6 gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#222a3d] border border-[#44474d]/20">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" aria-hidden />
                  <span className="text-[9px] sm:text-[10px] font-medium text-[#c4c6cd] uppercase tracking-wider">
                    Typical reply:{" "}
                    <span className="text-[#a4c9ff]">&lt; 4 min</span>{" "}
                    <span className="normal-case">(business hours)</span>
                  </span>
                </div>
                <MoreHorizontal className="w-5 h-5 text-[#c4c6cd]/30 shrink-0 hidden sm:block" aria-hidden />
              </div>
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-[#dae2fd] mb-1">Send inquiry</h2>
                <p className="text-[#c4c6cd] mb-6 text-xs md:text-sm leading-snug">
                  Tell us about your store, hardware needs, or support request.
                </p>
                <form
                  className="space-y-6"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                    <div className="group relative">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#c4c6cd] group-focus-within:text-[#a4c9ff] transition-colors mb-1">
                        Full name
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-[#44474d]/40 py-2 px-0 text-sm focus:ring-0 focus:border-[#a4c9ff] outline-none transition-all text-[#dae2fd] placeholder:text-[#2d3449]"
                        placeholder="Your name"
                        type="text"
                        name="name"
                        autoComplete="name"
                      />
                    </div>
                    <div className="group relative">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#c4c6cd] group-focus-within:text-[#a4c9ff] transition-colors mb-1">
                        Email
                      </label>
                      <input
                        className="w-full bg-transparent border-0 border-b border-[#44474d]/40 py-2 px-0 text-sm focus:ring-0 focus:border-[#a4c9ff] outline-none transition-all text-[#dae2fd] placeholder:text-[#2d3449]"
                        placeholder="you@company.com"
                        type="email"
                        name="email"
                        autoComplete="email"
                      />
                    </div>
                  </div>
                  <div className="group relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#c4c6cd] group-focus-within:text-[#a4c9ff] transition-colors mb-1">
                      Topic
                    </label>
                    <select
                      className="w-full bg-transparent border-0 border-b border-[#44474d]/40 py-2 px-0 text-sm focus:ring-0 focus:border-[#a4c9ff] outline-none transition-all text-[#dae2fd] appearance-none cursor-pointer"
                      name="topic"
                      defaultValue="hardware"
                    >
                      <option value="hardware" className="bg-[#2d3449] text-[#dae2fd]">
                        Hardware &amp; POS
                      </option>
                      <option value="integration" className="bg-[#2d3449] text-[#dae2fd]">
                        Software / integration
                      </option>
                      <option value="partnership" className="bg-[#2d3449] text-[#dae2fd]">
                        Partnership / reseller
                      </option>
                      <option value="support" className="bg-[#2d3449] text-[#dae2fd]">
                        Technical support
                      </option>
                    </select>
                  </div>
                  <div className="group relative">
                    <label className="block text-xs font-bold uppercase tracking-widest text-[#c4c6cd] group-focus-within:text-[#a4c9ff] transition-colors mb-1">
                      Message
                    </label>
                    <textarea
                      className="w-full bg-transparent border-0 border-b border-[#44474d]/40 py-2 px-0 text-sm focus:ring-0 focus:border-[#a4c9ff] outline-none transition-all text-[#dae2fd] placeholder:text-[#2d3449] resize-none min-h-[88px]"
                      placeholder={`How can ${SITE.name} help your business?`}
                      rows={3}
                      name="message"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
                    <p className="text-[10px] sm:text-xs text-[#c4c6cd] max-w-[200px] leading-snug">
                      By submitting, you agree we may use your details to respond to this inquiry.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-[#a4c9ff] to-[#002d56] px-6 py-2.5 rounded-lg text-[#00315d] font-black uppercase tracking-wider text-[10px] sm:text-xs hover:opacity-95 active:scale-[0.98] transition-all shrink-0"
                    >
                      Send message
                      <ArrowRight className="w-4 h-4" aria-hidden />
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Departmental Support Section */}
      <section className="py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#002542] tracking-tight">Specialized departments</h2>
            <p className="text-[#43474d] mt-4 max-w-2xl mx-auto leading-relaxed">
              Route your request to the right specialists—enterprise sales, technical architecture, or channel
              partnerships.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <article className="flex flex-col rounded-2xl border border-[#e8e6ed] bg-white p-8 shadow-[0_12px_40px_-12px_rgba(0,37,66,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(0,37,66,0.15)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d3deef]">
                <Building2 className="h-6 w-6 text-[#002542]" aria-hidden />
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#43474d]/75">
                Global markets
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#002542]">
                Strategic sales &amp; enterprise billing
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#43474d]">
                Large-scale rollouts, custom hardware packages, and structured billing for multi-location retail.
                We shape quotes and contracts around how your stores actually run.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Enterprise%20sales%20inquiry`}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#002542] px-4 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-md shadow-[#002542]/20 transition hover:bg-[#003a5c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002542]"
              >
                Contact sales
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>

            <article className="relative flex flex-col rounded-2xl border border-[#b8c9df]/60 bg-[#e8eef6] p-8 shadow-[0_16px_48px_-12px_rgba(0,37,66,0.14)] ring-1 ring-[#002542]/[0.04] transition-all hover:-translate-y-1 md:scale-[1.02]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[#002542]/[0.06]">
                <Compass className="h-6 w-6 text-[#002542]" aria-hidden />
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#43474d]/75">
                System integrity
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#002542]">
                Technical architecture &amp; support
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#43474d]">
                Direct line to our technical team for deployment, deep troubleshooting, peripherals, and integrations.
                Clear escalation paths when your checkout stack needs engineering-level attention.
              </p>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#002542]/20 bg-white px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#002542] shadow-sm transition hover:border-[#002542]/35 hover:bg-[#fafbfc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002542]"
              >
                Access support
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>

            <article className="flex flex-col rounded-2xl border border-[#e8e6ed] bg-white p-8 shadow-[0_12px_40px_-12px_rgba(0,37,66,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(0,37,66,0.15)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#d3deef]">
                <Network className="h-6 w-6 text-[#002542]" aria-hidden />
              </div>
              <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#43474d]/75">
                Ecosystem growth
              </p>
              <h3 className="mt-2 text-xl font-bold tracking-tight text-[#002542]">
                Strategic partnerships &amp; alliances
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#43474d]">
                Resellers, regional distributors, and technology partners extending {SITE.name} across markets.
                We align on training, margins, and joint go-to-market where it fits.
              </p>
              <a
                href={`mailto:${SITE.email}?subject=Partnership%20inquiry`}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#d3deef] px-4 py-3.5 text-xs font-bold uppercase tracking-[0.12em] text-[#002542] transition hover:bg-[#c5d8ef] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#002542]"
              >
                Partner with us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Global presence + network map — mono / technical typography */}
      <section className="overflow-hidden bg-[#060e20] py-8 font-mono-tech text-[#dae2fd] md:py-10 [&_h2]:font-semibold [&_h3]:font-semibold">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-5 md:mb-6">
            <h2 className="mb-3 text-xl font-semibold tracking-[0.08em] text-[#e8ecff] md:text-2xl lg:text-3xl">
              GLOBAL PRESENCE
            </h2>
            <p className="max-w-2xl text-[11px] leading-relaxed text-[#a8b0c4] md:text-xs">
              <span className="text-[#7dd3fc]/90">// </span>
              Architecting commerce across continents. Visit one of our regional hubs for a physical demo.
            </p>
          </div>

          <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-12 lg:gap-6">
            <div className="lg:col-span-4">
              <div className="space-y-5 border-l border-[#a4c9ff]/25 pl-4 md:space-y-6 md:pl-5">
                {GLOBAL_PRESENCE_HUBS.map((hub, i) => (
                  <div key={hub.name} className="relative">
                    <div className="mb-1.5 flex items-baseline gap-2">
                      <span className="select-none text-[9px] tabular-nums text-[#5b6578] md:text-[10px]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a4c9ff] md:text-sm">
                        {hub.name}
                      </h3>
                    </div>
                    <p className="mt-0.5 pl-6 text-[11px] font-normal leading-relaxed text-[#9ca3b8] md:text-xs">
                      <span className="text-[#64748b]">{">"} </span>
                      {hub.line1}
                      <br />
                      <span className="text-[#64748b]">{">"} </span>
                      {hub.line2}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[200px] overflow-hidden rounded-md border border-[#44474d]/20 bg-[#0b1326] shadow-lg shadow-black/30 sm:min-h-[220px] lg:col-span-8 lg:h-auto lg:min-h-[300px]">
              <img
                alt="Stylized global network map"
                className="absolute inset-0 h-full w-full object-cover opacity-60 mix-blend-luminosity"
                src={NETWORK_MAP_IMAGE}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#060e20] via-transparent to-transparent"
                aria-hidden
              />
              <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-3 md:p-3.5 lg:flex-row lg:items-start">
                <div className="max-w-[240px] rounded-md border border-white/5 bg-[#31394d]/40 p-2.5 shadow-md backdrop-blur-md sm:max-w-[260px] md:p-3">
                  <div className="mb-0 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a4c9ff] sm:text-[10px]">
                    Support status
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" aria-hidden />
                    <span className="text-sm font-bold tracking-tight text-white">Desk online</span>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
                    <div>
                      <div className="text-[9px] font-bold uppercase text-[#c4c6cd] sm:text-[10px]">Phone</div>
                      <a
                        href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                        className="pointer-events-auto text-[11px] font-bold leading-tight text-white underline-offset-2 hover:underline sm:text-xs"
                      >
                        {SITE.phone}
                      </a>
                    </div>
                    <div>
                      <div className="text-[9px] font-bold uppercase text-[#c4c6cd] sm:text-[10px]">Email</div>
                      <a
                        href={`mailto:${SITE.email}`}
                        className="pointer-events-auto break-all text-[11px] font-bold leading-tight text-white underline-offset-2 hover:underline sm:text-xs"
                      >
                        {SITE.email}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-auto mt-2 flex flex-col gap-1 self-end lg:mt-0 lg:self-start">
                  <a
                    href={GOOGLE_MAPS_NWT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-md bg-[#171f33] text-[#dae2fd] shadow-sm ring-1 ring-white/5 transition-colors hover:bg-[#a4c9ff] hover:text-[#00315d]"
                    aria-label="Open headquarters in Google Maps"
                  >
                    <LocateFixed className="h-3.5 w-3.5" />
                  </a>
                  <span
                    className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-md bg-[#171f33]/80 text-[#c4c6cd]/50 ring-1 ring-white/5"
                    aria-hidden
                  >
                    <Plus className="h-3.5 w-3.5" />
                  </span>
                  <span
                    className="flex h-8 w-8 cursor-not-allowed items-center justify-center rounded-md bg-[#171f33]/80 text-[#c4c6cd]/50 ring-1 ring-white/5"
                    aria-hidden
                  >
                    <Minus className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
