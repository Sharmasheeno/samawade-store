import React, { useState } from "react";
import { Gamepad2, UserCheck, Zap, Play, X, ArrowRight } from "lucide-react";
import { Reveal } from "./Motion";

export const HowItWorks: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);

  const steps = [
    {
      num: "01",
      badgeColor: "bg-[#FBF5DC] text-[#D4AF37] border-[#D4AF37]/30",
      icon: <Gamepad2 className="w-5 h-5 text-[#00C2B8]" />,
      title: "Choose Your Game",
      desc: "Select your desired game, credit amount, or top-up package from our catalog.",
    },
    {
      num: "02",
      badgeColor: "bg-[#E0F8F6] text-[#00C2B8] border-[#00C2B8]/30",
      icon: <UserCheck className="w-5 h-5 text-[#061A3A]" />,
      title: "Enter Player Details",
      desc: "Provide your in-game Player ID, User ID, or account details safely and securely.",
    },
    {
      num: "03",
      badgeColor: "bg-[#FBF5DC] text-[#D4AF37] border-[#D4AF37]/30",
      icon: <Zap className="w-5 h-5 text-[#D4AF37] fill-[#D4AF37]" />,
      title: "Pay & Receive Instantly",
      desc: "Pay easily using local mobile money and receive your game credits within seconds.",
    },
  ];

  return (
    <section className="w-full my-12 lg:my-16">
      {/* Section Header */}
      <Reveal direction="up">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C2B8] uppercase tracking-wider mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#00C2B8]"></span>
              <span>Simple Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] text-[#061A3A] tracking-tight">
              How SamwadeStore Works
            </h2>
            <p className="text-sm sm:text-base text-[#667085] mt-1 font-medium">
              Top up in just 3 simple steps.
            </p>
          </div>

          {/* Optional Watch Guide Button */}
          <button
            onClick={() => setShowVideoModal(true)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-white border border-[#E5EAF0] text-[#061A3A] hover:border-[#00C2B8] text-xs font-bold transition-all shadow-subtle hover:shadow-sm cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 text-[#00C2B8] fill-[#00C2B8]" />
            <span>Watch Guide</span>
          </button>
        </div>
      </Reveal>

      {/* 3-Step Flow with Desktop Connecting Line */}
      <div className="relative">
        {/* Desktop Connector Line between step 1, 2, 3 */}
        <div className="hidden md:block absolute top-[48px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#D4AF37]/30 via-[#00C2B8]/40 to-[#D4AF37]/30 pointer-events-none z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={idx * 0.1} direction="up">
              <div className="bg-white rounded-[16px] p-6 sm:p-7 border border-[#E5EAF0] shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative flex flex-col justify-between h-full group">
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-[12px] bg-[#F6F9FC] border border-[#E5EAF0] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {step.icon}
                    </div>
                    {/* Numbered Circular Badge: Gold / Teal / Gold */}
                    <span
                      className={`w-9 h-9 rounded-full border flex items-center justify-center text-xs font-[800] tracking-tight ${step.badgeColor} shadow-subtle`}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-[#061A3A] mb-2 group-hover:text-[#00C2B8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#667085] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Step Bottom Indicator Line */}
                <div className="mt-6 pt-4 border-t border-[#E5EAF0] flex items-center justify-between text-xs text-[#667085]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#00C2B8]"></span>
                    <span className="text-[11px] font-bold text-[#0B2D5B]/70 uppercase tracking-wider">
                      Step {step.num}
                    </span>
                  </div>
                  {idx < 2 && (
                    <ArrowRight className="w-3.5 h-3.5 text-[#98A2B3] hidden md:block" />
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Video Guide Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[120] bg-[#061A3A]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-2xl bg-white rounded-[20px] overflow-hidden shadow-2xl border border-[#E5EAF0] p-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5EAF0] mb-4">
              <h4 className="font-bold text-[#061A3A] text-base">
                SamwadeStore Top-up Tutorial Guide
              </h4>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 rounded-[8px] text-[#667085] hover:bg-[#F6F9FC] cursor-pointer"
                aria-label="Close tutorial modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-video w-full rounded-[12px] overflow-hidden bg-[#061A3A] flex items-center justify-center text-white">
              <div className="text-center p-6 space-y-3">
                <Play className="w-12 h-12 text-[#00C2B8] mx-auto animate-pulse" />
                <h5 className="font-bold text-lg">Top-Up Made Easy</h5>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Sida loogu shubto PUBG Mobile UC, Free Fire Diamonds, iyo eFootball Coins adigoo isticmaalaya EVC Plus, ZAAD ama eDahab.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

