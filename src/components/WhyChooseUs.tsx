import React from "react";
import { Zap, ShieldCheck, Headphones, Award } from "lucide-react";
import { Reveal } from "./Motion";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#00C2B8]" />,
      bg: "bg-[#E0F8F6]",
      border: "border-[#00C2B8]/20",
      title: "Instant Delivery",
      description: "Receive your game credits within seconds automatically.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#061A3A]" />,
      bg: "bg-[#F6F9FC]",
      border: "border-[#E5EAF0]",
      title: "Secure Payments",
      description: "Your transactions are protected with verified local gateways.",
    },
    {
      icon: <Headphones className="w-6 h-6 text-[#D4AF37]" />,
      bg: "bg-[#FBF5DC]",
      border: "border-[#D4AF37]/20",
      title: "24/7 Support",
      description: "Get real-time assistance whenever you need it.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#00A9A2]" />,
      bg: "bg-[#E0F8F6]",
      border: "border-[#00C2B8]/20",
      title: "Trusted Service",
      description: "Verified digital marketplace for gamers across Somalia.",
    },
  ];

  return (
    <section className="w-full my-12 lg:my-16">
      {/* Section Header */}
      <Reveal direction="up">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C2B8] uppercase tracking-wider mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[#00C2B8]"></span>
            <span>Core Advantages</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] tracking-tight">
            <span className="text-[#061A3A]">Why Choose </span>
            <span className="text-[#00C2B8]">SamwadeStore?</span>
          </h2>
          <p className="text-sm sm:text-base text-[#667085] mt-2 font-medium">
            Built for gamers. Designed for speed and trust.
          </p>
        </div>
      </Reveal>

      {/* 4 Clean Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feat, i) => (
          <Reveal key={i} delay={i * 0.08} direction="up">
            <div className="bg-white rounded-[16px] p-6 border border-[#E5EAF0] shadow-sm hover:shadow-card-hover hover:-translate-y-1 hover:border-[#00C2B8]/40 transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div
                  className={`w-12 h-12 rounded-[12px] ${feat.bg} border ${feat.border} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}
                >
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-[#061A3A] mb-1.5 group-hover:text-[#00C2B8] transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

