import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Motion";

interface CTASectionProps {
  onBrowseGames: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onBrowseGames }) => {
  return (
    <section className="w-full my-12 lg:my-16">
      <Reveal direction="up">
        <div className="w-full rounded-[24px] bg-[#061A3A] text-white p-8 sm:p-12 lg:p-14 border border-[#0B2D5B] shadow-panel relative overflow-hidden">
          {/* Exact Brand Curves & Accents matching reference */}
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-transparent via-[#00C2B8]/5 to-[#00C2B8]/20 pointer-events-none"></div>

          <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Left Content */}
            <div className="space-y-3 max-w-xl">
              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-[800] text-white tracking-tight leading-[1.12]">
                Ready to <span className="text-[#00C2B8]">Top Up?</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                Choose your favorite game and receive your credits in minutes.
              </p>

              <div className="pt-2 flex justify-center md:justify-start">
                <button
                  onClick={onBrowseGames}
                  className="px-8 py-3.5 bg-[#00C2B8] hover:bg-[#00A9A2] text-white font-bold text-sm rounded-[10px] shadow-sm hover:shadow-md transition-all duration-200 active:scale-98 cursor-pointer flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-[#00C2B8]"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 7H8v3H6v-3H3v-2h3V8h2v3h3v2zm4.5 2c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4-3c-.83 0-1.5-.67-1.5-1.5S20.17 9 21 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                  </svg>
                  <span>Browse Games</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right: High-Definition 3D Pro Gaming Controller */}
            <div className="shrink-0 animate-subtle-float flex items-center justify-center">
              <div className="relative overflow-hidden rounded-[20px] border border-white/15 shadow-2xl bg-[#0B2D5B]/40 group">
                <img
                  src="/cta-controller.png"
                  alt="Pro Gaming Controller"
                  className="w-full max-w-[280px] sm:max-w-[340px] h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};


