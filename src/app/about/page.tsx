import { BadgeCheck, Lightbulb, Users, Flag, Rocket, Sparkles, CheckCircle } from "lucide-react";
import React from 'react';

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
                Empowering Modern Hospitality
            </h1>
            <p className="text-xl text-[#87a5ca] max-w-lg mb-8 leading-relaxed">
                We bridge the gap between architectural precision and operational excellence, providing the anchor for high-growth businesses.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#d8e3f4] text-[#121c28] px-8 py-3 rounded-md font-semibold hover:bg-white transition-all">
                Our Story
              </button>
              <button className="text-white border border-white/20 px-8 py-3 rounded-md font-semibold backdrop-blur-sm hover:bg-white/10 transition-all">
                View Demo
              </button>
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

      {/* Mission Statement */}
      <section className="py-24 bg-[#faf9fc]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[#002542] font-bold tracking-widest text-xs uppercase mb-4 block">Our Mission</span>
          <h2 className="text-3xl md:text-5xl font-bold text-[#002542] tracking-tight mb-8">
              Building the backbone of business growth through intentional technology.
          </h2>
          <p className="text-lg text-[#43474d] leading-loose">
              At NewWay, we believe that point-of-sale systems shouldn't just record transactions—they should be the architectural anchor of your enterprise. We combine robust engineering with an intuitive human-centric design to ensure that as your business scales, your foundations remain unshakable. Our commitment is to provide the reliability you need to focus on what matters most: your customers.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#f4f3f6]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#d8e3f4] flex items-center justify-center rounded-full mb-6">
                <BadgeCheck className="text-[#002542] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-4">Unshakeable Trust</h3>
              <p className="text-[#43474d] leading-relaxed">
                  Security and reliability are our first principles. We build systems that never fail when you need them most.
              </p>
            </div>
            {/* Value 2 */}
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#d8e3f4] flex items-center justify-center rounded-full mb-6">
                <Lightbulb className="text-[#002542] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-4">Quiet Innovation</h3>
              <p className="text-[#43474d] leading-relaxed">
                  We don't innovate for the sake of novelty. Every feature is a calculated improvement to your workflow.
              </p>
            </div>
            {/* Value 3 */}
            <div className="bg-[#ffffff] p-10 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#d8e3f4] flex items-center justify-center rounded-full mb-6">
                <Users className="text-[#002542] w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-[#002542] mb-4">Architectural Community</h3>
              <p className="text-[#43474d] leading-relaxed">
                  We grow together with our partners, providing the support structures needed for local businesses to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones/Timeline */}
      <section className="py-24 bg-[#faf9fc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-[#002542] tracking-tighter">Our Evolution</h2>
            <div className="h-1.5 w-24 bg-[#002542] mt-4 mx-auto md:mx-0"></div>
          </div>
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#c3c6ce] before:to-transparent">
            {/* Timeline Item 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#002542] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20">
                <Flag className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-[#f4f3f6] border border-[#c3c6ce]/10 shadow-sm relative z-10">
                <time className="font-bold text-[#1b3b5a] text-sm">2018</time>
                <div className="text-xl font-bold text-[#002542] mt-1">The Founding</div>
                <p className="text-[#43474d] mt-2 text-sm leading-relaxed">NewWay was established with a vision to simplify complex retail transactions through premium hardware and software.</p>
              </div>
            </div>
            {/* Timeline Item 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#002542] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-[#f4f3f6] border border-[#c3c6ce]/10 shadow-sm relative z-10">
                <time className="font-bold text-[#1b3b5a] text-sm">2020</time>
                <div className="text-xl font-bold text-[#002542] mt-1">Global Expansion</div>
                <p className="text-[#43474d] mt-2 text-sm leading-relaxed">We expanded our services to 12 countries, providing localized tax and compliance engines for international hospitality.</p>
              </div>
            </div>
            {/* Timeline Item 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-[#002542] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-20">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl bg-[#f4f3f6] border border-[#c3c6ce]/10 shadow-sm relative z-10">
                <time className="font-bold text-[#1b3b5a] text-sm">2024</time>
                <div className="text-xl font-bold text-[#002542] mt-1">The AI Anchor</div>
                <p className="text-[#43474d] mt-2 text-sm leading-relaxed">Integrating predictive analytics into the core POS architecture to help businesses anticipate demand before it happens.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Culture */}
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
              <h2 className="text-4xl font-extrabold text-[#002542] tracking-tighter mb-6">Built by People, for People</h2>
              <p className="text-lg text-[#43474d] mb-6 leading-relaxed">
                  Our culture is defined by curiosity and a commitment to precision. We are a collection of engineers, designers, and former hospitality professionals who understand the rhythm of a busy Friday night.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#002542] w-6 h-6 shrink-0" />
                  <span className="text-[#1a1c1e] font-medium">Remote-first, collaboration-focused culture</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#002542] w-6 h-6 shrink-0" />
                  <span className="text-[#1a1c1e] font-medium">Continuous learning and professional growth</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="text-[#002542] w-6 h-6 shrink-0" />
                  <span className="text-[#1a1c1e] font-medium">Diversity in thought and background</span>
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">Ready to anchor your business?</h2>
          <p className="text-xl text-[#87a5ca] mb-10">Join thousands of businesses that trust NewWay to power their daily operations.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="w-full md:w-auto bg-white text-[#002542] px-10 py-4 rounded-md font-bold text-lg hover:bg-[#d8e3f4] transition-colors shadow-lg">
                Join the Family
            </button>
            <button className="w-full md:w-auto text-white border border-white/30 px-10 py-4 rounded-md font-bold text-lg hover:bg-white/10 transition-colors">
                Request a Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
