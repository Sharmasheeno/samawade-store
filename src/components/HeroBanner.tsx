import React, { useState, useEffect } from "react";
import { Zap, ShieldCheck, Check, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

export const HeroBanner: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Dhammaan top-up-yada",
      subtitle: "ciyaaraha hal meel",
      desc: "PUBG Mobile, Free Fire, eFootball & Telegram Stars si toos ah oo degdeg ah.",
      tag: "SOMALI GAMING HUB",
    },
    {
      id: 2,
      title: "Shubasho Toos Ah 24/7",
      subtitle: "EVC Plus, ZAAD & eDahab",
      desc: "Hel dhibcahaaga ilbiriqsiyo gudahood adoon sugin wax daqiiqado ah.",
      tag: "INSTANT AUTOMATED DELIVERY",
    },
    {
      id: 3,
      title: "eFootball 2026 Coins",
      subtitle: "Ugu Raqiisan Soomaaliya",
      desc: "Dalbo xirmooyinka eFootball Android & iOS si fudud oo ammaan ah.",
      tag: "SPECIAL DISCOUNT",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full rounded-[18px] md:rounded-[28px] overflow-hidden shadow-2xl bg-[#080d1e] border border-blue-900/30 text-white my-6">
      {/* Dynamic Cyber Glow Backgrounds */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[350px] bg-purple-600/25 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-[350px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>

      {/* Main Banner Content */}
      <div className="relative z-10 px-6 sm:px-10 md:px-12 py-8 sm:py-12 md:py-14 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Left Column: Somali Headlines & Badges */}
        <div className="w-full lg:w-7/12 space-y-5 sm:space-y-6 text-center lg:text-left">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-cyan-300 text-[10px] sm:text-xs font-black tracking-widest uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>{slides[activeSlide].tag}</span>
          </div>

          {/* Big Somali Headline */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-[950] tracking-tight uppercase leading-[1.1] text-white drop-shadow-md">
              {slides[activeSlide].title}
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-[950] tracking-tight uppercase leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
              {slides[activeSlide].subtitle}
            </h2>
          </div>

          <p className="text-xs sm:text-sm md:text-base text-slate-300 font-medium max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {slides[activeSlide].desc}
          </p>

          {/* 3 Core Value Badges: Dogdog, Ammaan, Fudud */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:border-blue-400/40 transition">
              <div className="w-6 h-6 rounded-lg bg-blue-500/20 text-cyan-400 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 fill-cyan-400" />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-wide text-white">
                Dogdog
              </span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:border-purple-400/40 transition">
              <div className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-wide text-white">
                Ammaan
              </span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md shadow-sm hover:border-emerald-400/40 transition">
              <div className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Check className="w-3.5 h-3.5 stroke-[3]" />
              </div>
              <span className="text-xs sm:text-sm font-black tracking-wide text-white">
                Fudud
              </span>
            </div>
          </div>

          {/* Mini Cards of Popular Games (PUBG, MLBB, FreeFire, etc) */}
          <div className="hidden sm:flex items-center justify-center lg:justify-start gap-2.5 pt-2">
            <div className="px-3 py-2 rounded-xl bg-[#0f1b3a] border border-blue-500/20 flex items-center gap-2 shadow-md">
              <span className="text-amber-400 text-xs font-black">PUBG UC</span>
              <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">HOT</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#0f1b3a] border border-blue-500/20 flex items-center gap-2 shadow-md">
              <span className="text-purple-300 text-xs font-black">eFootball</span>
              <span className="text-[10px] bg-purple-400/20 text-purple-300 px-1.5 py-0.5 rounded font-bold">2026</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#0f1b3a] border border-blue-500/20 flex items-center gap-2 shadow-md">
              <span className="text-cyan-300 text-xs font-black">Free Fire</span>
              <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.5 rounded font-bold">INSTANT</span>
            </div>
            <div className="px-3 py-2 rounded-xl bg-[#0f1b3a] border border-blue-500/20 flex items-center gap-2 shadow-md">
              <span className="text-pink-300 text-xs font-black">Telegram Stars</span>
            </div>
          </div>
        </div>

        {/* Right Column: Sleek 3D Phone Mockup & Shield */}
        <div className="w-full lg:w-5/12 flex items-center justify-center relative">
          <div className="relative w-64 sm:w-72 md:w-80 aspect-[9/16] max-h-[380px] rounded-[36px] bg-gradient-to-b from-[#1c2a4f] to-[#0c142c] p-2.5 border-[3px] border-blue-400/40 shadow-[0_20px_60px_rgba(29,104,255,0.35)] transform transition-transform hover:scale-105 duration-500">
            {/* Phone Screen Container */}
            <div className="w-full h-full rounded-[28px] bg-[#070d1e] overflow-hidden flex flex-col justify-between p-4 relative border border-white/10">
              {/* Dynamic Island / Notch */}
              <div className="w-20 h-4 bg-black rounded-full mx-auto mb-3"></div>

              {/* Mockup Card Header */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-slate-300 border-b border-white/10 pb-2">
                  <span className="text-cyan-400">⚡ Samawade Topup</span>
                  <span className="text-emerald-400">Online</span>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-purple-900/60 to-blue-900/40 p-3.5 border border-purple-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">PUBG Mobile UC</span>
                    <span className="text-xs font-black text-amber-400">$0.99</span>
                  </div>
                  <div className="mt-2 text-[11px] text-slate-300 font-semibold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>60 UC + 3 UC Bonus</span>
                  </div>
                </div>

                <div className="rounded-2xl bg-white/5 p-3 border border-white/10 space-y-2">
                  <div className="text-[10px] text-slate-400 uppercase font-black tracking-wider">
                    Enter Player ID
                  </div>
                  <div className="w-full bg-black/40 rounded-xl px-3 py-2 text-xs font-mono text-cyan-300 border border-white/10">
                    5123984719
                  </div>
                </div>
              </div>

              {/* Mockup Checkout Button */}
              <div className="space-y-2.5">
                <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-center font-black text-xs text-white shadow-lg shadow-blue-500/30">
                  TOP UP NOW
                </div>
                <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>100% Automated Delivery</span>
                </div>
              </div>
            </div>

            {/* Glowing floating badge */}
            <div className="absolute -right-4 -bottom-3 bg-gradient-to-r from-purple-600 to-pink-600 p-2.5 rounded-2xl shadow-xl border border-white/30 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-white" />
              <div className="text-left leading-none">
                <span className="text-[10px] font-black uppercase text-white block">100%</span>
                <span className="text-[8px] font-bold text-purple-200 uppercase">Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeSlide === idx
                ? "bg-white w-7 md:w-8 shadow-sm"
                : "bg-white/40 w-2 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={() => setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))}
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 items-center justify-center text-white/80 hover:text-white transition z-20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 border border-white/10 items-center justify-center text-white/80 hover:text-white transition z-20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
