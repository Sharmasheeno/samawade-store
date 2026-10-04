import React from "react";
import { PAYMENT_PARTNERS } from "../data/storeData";
import { Reveal } from "./Motion";

export const PaymentPartners: React.FC = () => {
  return (
    <section className="w-full my-12 lg:my-16">
      {/* Header matching reference */}
      <Reveal direction="up">
        <div className="text-center sm:text-left mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] tracking-tight">
            <span className="text-[#061A3A]">Secure </span>
            <span className="text-[#00C2B8]">Local Payments</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#667085] mt-1 font-medium">
            Pay easily using your preferred payment provider.
          </p>
        </div>
      </Reveal>

      {/* Grid of 6 Clean White Payment Cards matching reference */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
        {PAYMENT_PARTNERS.map((p, idx) => (
          <Reveal key={idx} delay={idx * 0.05} direction="up">
            <div className="bg-white rounded-[16px] p-4 sm:p-5 border border-[#E5EAF0] shadow-sm hover:shadow-hover hover:-translate-y-1 hover:border-[#00C2B8]/40 transition-all duration-300 flex items-center justify-center text-center group cursor-default h-[76px] sm:h-[84px] active:scale-98">
              <img
                src={p.image}
                alt={p.name}
                className="max-h-9 sm:max-h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};


