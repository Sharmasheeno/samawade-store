import React from "react";
import { Users, CheckCircle, Clock, ShieldCheck } from "lucide-react";
import { AnimatedCounter, Reveal } from "./Motion";

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full my-12 lg:my-16">
      <Reveal direction="up">
        <div className="w-full rounded-[24px] bg-[#061A3A] text-white p-8 sm:p-10 lg:p-12 border border-[#0B2D5B] shadow-panel relative overflow-hidden">
          {/* Subtle brand glow accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00C2B8]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B2D5B]/40 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {/* Stat 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-[#00C2B8]" />
              </div>
              <div className="text-3xl sm:text-4xl font-[800] text-[#00C2B8] tracking-tight font-sans">
                <AnimatedCounter end={10000} suffix="+" duration={1600} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Happy Customers
              </div>
              <div className="w-6 h-[2px] bg-[#D4AF37] rounded-full mt-2.5 opacity-80"></div>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col items-center text-center pt-6 lg:pt-0 lg:pl-8">
              <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <CheckCircle className="w-5 h-5 text-[#00C2B8]" />
              </div>
              <div className="text-3xl sm:text-4xl font-[800] text-[#00C2B8] tracking-tight font-sans">
                <AnimatedCounter end={50000} suffix="+" duration={1800} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Successful Top-ups
              </div>
              <div className="w-6 h-[2px] bg-[#D4AF37] rounded-full mt-2.5 opacity-80"></div>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col items-center text-center pt-6 lg:pt-0 lg:pl-8">
              <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-[#00C2B8]" />
              </div>
              <div className="text-3xl sm:text-4xl font-[800] text-[#00C2B8] tracking-tight font-sans">
                99.9%
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Successful Delivery
              </div>
              <div className="w-6 h-[2px] bg-[#D4AF37] rounded-full mt-2.5 opacity-80"></div>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col items-center text-center pt-6 lg:pt-0 lg:pl-8">
              <div className="w-10 h-10 rounded-[10px] bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div className="text-3xl sm:text-4xl font-[800] text-[#00C2B8] tracking-tight font-sans">
                24/7
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-300 mt-1">
                Customer Support
              </div>
              <div className="w-6 h-[2px] bg-[#D4AF37] rounded-full mt-2.5 opacity-80"></div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

