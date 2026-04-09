import { BadgeCheck, Lightbulb, Users, Flag, Rocket, Sparkles, CheckCircle, ExternalLink } from "lucide-react";
import React from "react";
import { GOOGLE_MAPS_NWT } from "@/lib/constants";

const JUSTDIAL_URL =
  "https://www.justdial.com/Ahmedabad/New-Way-Traders-Opposite-Kothawala-Flats-Pritmanagar-First-Slope-Ashram-Road/079PXX79-XX79-000137572463-C0U1_BZDET";

export default function AboutPage() {
  return (
    <div className="bg-[#faf9fc] text-[#1a1c1e] antialiased min-h-screen">
      {/* Hero Section */}
      <header className="relative overflow-hidden bg-[#002542] py-24 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <img
            className="w-full h-full object-cover"
            alt="abstract architectural blueprint lines"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk6EpypZ8r9JeSm0tbpaKsSJY7WpTWnFcN1EM_PpqegmQwpP8vJ_GVC-X8BTL_Mny0KV71vfxDMNrl5F21DlTLcnDFx4-098tCX3YFtZtQOBuVaxz_15UuusK33LnP0trcxJWoV0RynFCJQYwWEBpBM1E5MInzgPP5Gxl36fvrxK0D14lLX0EXMrh8oD5NdzlfLdGm6A8uFPdXA-y3AZ4VhseAqFuDee9MiQlTO-jxgJrNt2rzYouO_MqthY373_7fIYK-piOEahnz"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-tight mb-6">
              About New Way Traders
            </h1>
            <p className="text-xl text-[#87a5ca] max-w-lg mb-6 leading-relaxed">
              The name itself stands for innovation, honesty, and professionalism.
            </p>
            <p className="text-sm text-white/70 max-w-lg mb-8 leading-relaxed">
              Find us on{" "}
              <a
                href={GOOGLE_MAPS_NWT}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#87a5ca] underline underline-offset-2 hover:text-white inline-flex items-center gap-1"
              >
                Google <span className="sr-only">(opens in new tab)</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
              </a>
              {" · "}
              <a
                href={JUSTDIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#87a5ca] underline underline-offset-2 hover:text-white inline-flex items-center gap-1"
              >
                Justdial
                <ExternalLink className="w-3.5 h-3.5 shrink-0" aria-hidden />
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#our-story"
                className="inline-flex bg-[#d8e3f4] text-[#121c28] px-8 py-3 rounded-md font-semibold hover:bg-white transition-colors"
              >
                Our Story
              </a>
              <a
                href="/contact"
                className="inline-flex text-white border border-white/20 px-8 py-3 rounded-md font-semibold backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-[#1b3b5a]/30 blur-3xl rounded-full"></div>
              <img
                className="relative rounded-xl shadow-2xl border border-white/10 transform rotate-1"
                alt="minimalist professional workspace"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYB7gdKPL2JLg8SfGyKPGaKNlhFFJCBqGYsmRZEP32mYW3d29560aKKj9VPpMehY2QlIuYOk5FErroo4L5KIyGw0q8cFOqwiFsxUzr1zHLILH1JSiET9RqgIiq3bskYkLqdHLT-IGKbqPd6lAt75whCEOWMCtASTtmhwa2IKQ2kSHap6DriX05w8GDCbOnzQJ0K4-hyERQXAz9t5ah5CYT0Nk4V5yhsUPXpPBLsUMhQwbKWhGYqmy_do3HeM-0df0ksS5rYsORLYw-"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Our story */}
      <section id="our-story" className="py-24 bg-[#faf9fc] scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-[#002542] font-bold tracking-widest text-xs uppercase mb-4 block text-center">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#002542] tracking-tight mb-10 text-center">
            From communication to smart billing
          </h2>
          <div className="space-y-6 text-lg text-[#43474d] leading-relaxed">
            <p>
              The journey started in 1995 when young entrepreneur{" "}
              <strong className="text-[#1a1c1e] font-semibold">Ravi Bhatt</strong> entered the market of
              communication and technology. The vision began with STD, PCO, and phone booths, and grew into a
              technological shift toward billing and management systems at your fingertips.
            </p>
            <p>
              We were among the leading providers in communication for ten consecutive years, then expanded to
              bring business management solutions in the decade that followed.
            </p>
            <p>
              Today we proudly serve our clients and help them reach their goals with management approaches that
              respect their own terms, languages, and business models.
            </p>
            <p>
              As we move forward with a commitment to offering the best in business technology, we invite you to
              join us and make running your business easier.
            </p>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4">
            <a
              href={GOOGLE_MAPS_NWT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#002542]/20 bg-white px-5 py-3 text-sm font-semibold text-[#002542] shadow-sm hover:bg-[#f4f3f6] transition-colors"
            >
              New Way Traders on Google
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
            <a
              href={JUSTDIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#002542]/20 bg-white px-5 py-3 text-sm font-semibold text-[#002542] shadow-sm hover:bg-[#f4f3f6] transition-colors"
            >
              Justdial — Ashram Road
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#f4f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#d8e3f4] flex items-center justify-center rounded-full mb-6">
                <Lightbulb className="text-[#002542] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-4">Innovation</h3>
              <p className="text-[#43474d] leading-relaxed">
                We keep pace with technology—from communication infrastructure to smart billing and POS—so your
                business stays ahead.
              </p>
            </div>
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#d8e3f4] flex items-center justify-center rounded-full mb-6">
                <BadgeCheck className="text-[#002542] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-4">Honesty</h3>
              <p className="text-[#43474d] leading-relaxed">
                Straightforward guidance, fair dealing, and long-term relationships built on trust with retailers
                and partners.
              </p>
            </div>
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#d8e3f4] flex items-center justify-center rounded-full mb-6">
                <Users className="text-[#002542] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-4">Professionalism</h3>
              <p className="text-[#43474d] leading-relaxed">
                Dependable support and quality hardware, aligned with how you run your store, language, and
                workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-[#002542] tracking-tighter">Our journey</h2>
            <div className="h-1.5 w-24 bg-[#002542] mt-4 mx-auto md:mx-0"></div>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#c3c6ce] before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#002542] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20">
                <Flag className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-[#f4f3f6] border border-[#c3c6ce]/10 shadow-sm relative z-10">
                <time className="font-bold text-[#1b3b5a] text-sm">1995</time>
                <div className="text-xl font-bold text-[#002542] mt-1">The beginning</div>
                <p className="text-[#43474d] mt-2 text-sm leading-relaxed">
                  Ravi Bhatt starts in communication and technology—STD, PCO, and phone booths—laying the foundation
                  for what New Way Traders would become.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#002542] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-[#f4f3f6] border border-[#c3c6ce]/10 shadow-sm relative z-10">
                <time className="font-bold text-[#1b3b5a] text-sm">Growth</time>
                <div className="text-xl font-bold text-[#002542] mt-1">Communication &amp; management</div>
                <p className="text-[#43474d] mt-2 text-sm leading-relaxed">
                  A decade focused on communication leadership, then a shift toward business management, billing
                  machines, and POS solutions for modern retail.
                </p>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#002542] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-[#f4f3f6] border border-[#c3c6ce]/10 shadow-sm relative z-10">
                <time className="font-bold text-[#1b3b5a] text-sm">Today</time>
                <div className="text-xl font-bold text-[#002542] mt-1">Ahmedabad — Ashram Road</div>
                <p className="text-[#43474d] mt-2 text-sm leading-relaxed">
                  Opposite Kothawala Flats, Pritmanagar, first slope, Ashram Road. See our{" "}
                  <a
                    href={JUSTDIAL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#002542] underline underline-offset-2 hover:text-[#1b3b5a]"
                  >
                    Justdial listing
                  </a>{" "}
                  or find{" "}
                  <a
                    href={GOOGLE_MAPS_NWT}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#002542] underline underline-offset-2 hover:text-[#1b3b5a]"
                  >
                    New Way Traders (smart billing machines) on Google Maps
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team / today */}
      <section className="py-24 bg-[#f4f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  className="rounded-xl w-full h-64 object-cover"
                  alt="diverse group of creative professionals"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwNxa-3pZwv7gy-X-ykoNNHV7mbFSWa8Dz11DkyQZH5MmLCFviziPoATGcyrspHhbDTBhXEUUtcvCmkASE4Wp75TwDcb-wE6D7Y4mhIb9Mb-GXWZVE6WXCyk-85ppbq3p4xOJzpLDhxoev-4V9fBj1pSwfuxDv8ounmQov_4o4Ui2xlKP_RKTBIJxx2br5TG-DcFic0LxWt3Upy-vjJdbgqm6Q-HTAkT1ze1OSOX-mCaUYDRRE_fIS-t7CK_dv_EDs2TqUnDAfVsPe"
                />
                <img
                  className="rounded-xl w-full h-64 object-cover mt-8"
                  alt="portrait of a confident female engineer"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtAx78btue7ks7vgaWiZf2hGGzhpNwAF7uxRyfeA5FgHu5JBgD2eFR261Gf89oe2Qe6w1RZesTNGDm3_Vuoxw1M2z3Gs6n_a1tkQqczXoefdwu4fjxb_WUz4A2f-_mKZlU6JLIGGzNBgGFDADM0sLqmLvc3yrdQgnNfJCvRTEN8vidQrnqzyVh1nIlJSeclTtLcWmCOypgnGc-1PIUGgfdwP728yAnCMY8Ud6cVMKW1Zg7HNYVbiDAqRCv91oL-WrOBV4J_af3EFUk"
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-extrabold text-[#002542] tracking-tighter mb-6">Working with you</h2>
              <p className="text-lg text-[#43474d] mb-6 leading-relaxed">
                We celebrate our clients and adapt to your goals—whether you need billing machines, POS hardware,
                or guidance that fits your language and business model.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#002542] w-6 h-6 shrink-0" />
                  <span className="text-[#1a1c1e] font-medium">Decades of experience in communication and retail tech</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#002542] w-6 h-6 shrink-0" />
                  <span className="text-[#1a1c1e] font-medium">Solutions shaped around how you operate</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#002542] w-6 h-6 shrink-0" />
                  <span className="text-[#1a1c1e] font-medium">Visit us on Google or Justdial for hours, directions, and reviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#002542] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#002542] to-[#1b3b5a] opacity-90"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Partner with New Way Traders</h2>
          <p className="text-xl text-[#87a5ca] mb-8">
            Smart billing machines, POS, and support—so you can focus on your customers.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={GOOGLE_MAPS_NWT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#87a5ca] hover:text-white text-sm font-semibold underline underline-offset-2"
            >
              Google — New Way Traders (smart billing machines)
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
            <span className="hidden sm:inline text-white/30" aria-hidden>
              |
            </span>
            <a
              href={JUSTDIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#87a5ca] hover:text-white text-sm font-semibold underline underline-offset-2"
            >
              Justdial — Ashram Road
              <ExternalLink className="w-4 h-4" aria-hidden />
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a
              href="/contact"
              className="w-full md:w-auto inline-flex justify-center bg-white text-[#002542] px-10 py-4 rounded-md font-bold text-lg hover:bg-[#d8e3f4] transition-colors shadow-lg"
            >
              Contact Us
            </a>
            <a
              href={JUSTDIAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto inline-flex justify-center text-white border border-white/30 px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors"
            >
              View on Justdial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
