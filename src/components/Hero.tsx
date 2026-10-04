import React from "react";
import { Zap, ShieldCheck, Headphones, ArrowRight } from "lucide-react";
import { Reveal } from "./Motion";

interface HeroProps {
  onBrowseGames: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBrowseGames }) => {
  return (
    <section className="relative w-full rounded-[24px] bg-white border border-[#E5EAF0] shadow-card overflow-hidden my-6 lg:my-8 transition-all">
      {/* Subtle brand geometry & wash background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F9FC] via-white to-[#E0F8F6]/25 pointer-events-none"></div>
      
      {/* Curved brand glow accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#00C2B8]/8 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-20 w-80 h-80 bg-[#0B2D5B]/6 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-12 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headlines, CTAs, Trust indicators */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            {/* Small Gold Eyebrow Pill */}
            <Reveal delay={0.05} direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-[8px] bg-[#FBF5DC] border border-[#D4AF37]/30 text-[#0B2D5B] text-xs font-bold uppercase tracking-wider shadow-subtle">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span className="text-[#0B2D5B] font-extrabold tracking-wide">FAST &amp; SECURE TOP-UP</span>
              </div>
            </Reveal>

            {/* Main Headline */}
            <Reveal delay={0.15} direction="up">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-[800] text-[#061A3A] tracking-tight leading-[1.08]">
                  Top Up Your <br />
                  Favorite Games <br />
                  <span className="text-[#00C2B8]">Instantly</span>
                </h1>
                <p className="text-xs sm:text-sm font-semibold text-[#667085] mt-2">
                  Ku shubo ciyaaraha aad jeceshahay si degdeg ah oo ammaan ah. <br className="hidden sm:inline" />
                  Buy game credits, coins and digital products with fast delivery and secure local payments.
                </p>
              </div>
            </Reveal>

            {/* CTAs matching the image */}
            <Reveal delay={0.25} direction="up">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
                <button
                  onClick={onBrowseGames}
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#00C2B8] hover:bg-[#00A9A2] text-white font-bold text-sm rounded-[10px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 cursor-pointer flex items-center justify-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#00C2B8]"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S20.17 9 21 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                  <span>Browse Games</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <a
                  href="#orders"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white border border-[#E5EAF0] hover:bg-[#F6F9FC] text-[#061A3A] font-bold text-sm rounded-[10px] shadow-subtle hover:shadow-sm transition-all duration-200 active:scale-98 cursor-pointer text-center flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#0B2D5B]"
                >
                  <svg className="w-4 h-4 text-[#061A3A]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="18" height="18" x="3" y="3" rx="2" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <span>Check Order</span>
                </a>
              </div>
            </Reveal>

            {/* Trust Row */}
            <Reveal delay={0.35} direction="up">
              <div className="pt-4 border-t border-[#E5EAF0] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#061A3A]">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#061A3A] text-white flex items-center justify-center shadow-subtle">
                    <Zap className="w-3.5 h-3.5 fill-[#00C2B8] text-[#00C2B8]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-[#061A3A] block leading-tight">Instant Delivery</span>
                    <span className="text-[11px] text-[#667085]">Within seconds</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#061A3A] text-white flex items-center justify-center shadow-subtle">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#00C2B8]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-[#061A3A] block leading-tight">Secure Payment</span>
                    <span className="text-[11px] text-[#667085]">Verified &amp; safe</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#061A3A] text-white flex items-center justify-center shadow-subtle">
                    <Headphones className="w-3.5 h-3.5 text-[#D4AF37]" />
                  </div>
                  <div className="text-left">
                    <span className="font-bold text-[#061A3A] block leading-tight">24/7 Support</span>
                    <span className="text-[11px] text-[#667085]">Always here for you</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: High-Definition 3D Gaming Showcase with floating live cards */}
          <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
            <Reveal delay={0.2} direction="none">
              <div className="relative group max-w-lg w-full">
                {/* Subtle outer glow matching brand colors */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#00C2B8]/25 via-[#D4AF37]/20 to-[#00C2B8]/25 rounded-[26px] blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>

                {/* Main 3D Artwork Card */}
                <div className="relative overflow-hidden rounded-[22px] border border-[#0B2D5B]/30 shadow-2xl bg-[#061A3A] transition-transform duration-500 hover:scale-[1.01]">
                  <img
                    src="/hero-banner.jpg"
                    alt="SamwadeStore Gaming Top-Up"
                    className="w-full h-auto object-cover max-h-[360px] sm:max-h-[400px] transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle dark gradient overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A]/90 via-[#061A3A]/20 to-transparent pointer-events-none"></div>

                  {/* Bottom status bar inside the showcase */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-[12px] bg-[#061A3A]/85 backdrop-blur-md border border-white/10 text-white text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00C2B8] animate-pulse"></span>
                      <span className="font-bold tracking-wide">Popular Games Top-Up</span>
                    </div>
                    <span className="text-[11px] font-bold text-[#D4AF37] bg-[#D4AF37]/15 px-2.5 py-0.5 rounded-full border border-[#D4AF37]/30 flex items-center gap-1">
                      <Zap className="w-3 h-3 fill-[#D4AF37]" />
                      <span>Instant Auto-Delivery</span>
                    </span>
                  </div>
                </div>

                {/* Floating Game Card 1: Top-Left PUBG Mobile */}
                <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-[14px] bg-white/95 backdrop-blur-md border border-[#E5EAF0] shadow-card-hover animate-subtle-float">
                  <img
                    src="/game-pubg.png"
                    alt="PUBG Mobile"
                    className="w-9 h-9 rounded-[8px] object-cover shadow-sm"
                  />
                  <div className="text-left leading-tight">
                    <div className="text-[12px] font-extrabold text-[#061A3A]">PUBG Mobile</div>
                    <div className="text-[10px] font-bold text-[#00C2B8] flex items-center gap-0.5 mt-0.5">
                      <Zap className="w-2.5 h-2.5 fill-[#00C2B8]" /> Instant UC
                    </div>
                  </div>
                </div>

                {/* Floating Game Card 2: Bottom-Right Free Fire */}
                <div
                  className="absolute -bottom-3 -right-3 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-[14px] bg-white/95 backdrop-blur-md border border-[#E5EAF0] shadow-card-hover animate-subtle-float"
                  style={{ animationDelay: "1.2s" }}
                >
                  <img
                    src="/game-freefire.png"
                    alt="Free Fire"
                    className="w-9 h-9 rounded-[8px] object-cover shadow-sm"
                  />
                  <div className="text-left leading-tight">
                    <div className="text-[12px] font-extrabold text-[#061A3A]">Free Fire</div>
                    <div className="text-[10px] font-bold text-[#D4AF37] flex items-center gap-0.5 mt-0.5">
                      <Zap className="w-2.5 h-2.5 fill-[#D4AF37]" /> Diamond Pass
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};


