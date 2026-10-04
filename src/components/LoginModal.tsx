import React, { useState } from "react";
import { X, ArrowRight, ShieldCheck } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === "phone") {
      if (phone.length >= 7) setStep("otp");
    } else {
      alert("Soo dhowow! Waad ku guulaysatay inaad gasho akoonkaaga SamwadeStore.");
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[160] bg-[#061A3A]/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-md bg-white rounded-[20px] p-6 sm:p-8 shadow-2xl border border-[#E6EAF0] animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#667085] hover:text-[#061A3A] p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Brand Header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <BrandLogo height={38} />
          </div>
          <h3 className="text-lg font-[800] text-[#061A3A]">
            {step === "phone" ? "Login to SamwadeStore" : "Enter Verification Code"}
          </h3>
          <p className="text-xs text-[#667085] mt-1">
            {step === "phone"
              ? "Geli lambarkaaga taleefanka si aad u gasho."
              : `Koodhka xaqiijinta waxaa loo diray +252 ${phone}`}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {step === "phone" ? (
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#061A3A] mb-1.5 tracking-wider">
                Phone Number / Lambarka Taleefanka
              </label>
              <div className="relative flex items-center">
                <span className="absolute left-3.5 text-xs font-bold text-[#667085]">
                  +252
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="61 601 0749"
                  className="w-full pl-14 pr-4 py-2.5 rounded-[10px] bg-[#F7F9FC] border border-[#E6EAF0] text-sm font-semibold text-[#061A3A] focus:bg-white focus:border-[#00C2B8] focus:outline-none transition"
                />
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-[11px] font-bold uppercase text-[#061A3A] mb-1.5 tracking-wider">
                SMS Code
              </label>
              <input
                type="text"
                required
                maxLength={6}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="123456"
                className="w-full text-center tracking-widest text-lg font-mono py-2.5 rounded-[10px] bg-[#F7F9FC] border border-[#E6EAF0] font-bold text-[#061A3A] focus:bg-white focus:border-[#00C2B8] focus:outline-none transition"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-[#00C2B8] hover:bg-[#00AAA3] text-white font-bold text-xs rounded-[10px] shadow-subtle transition active:scale-95 cursor-pointer flex items-center justify-center gap-2 mt-4 uppercase tracking-wider"
          >
            <span>{step === "phone" ? "Continue / Sii wad" : "Verify Code"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-[#E6EAF0] flex items-center justify-center gap-1.5 text-xs text-[#667085]">
          <ShieldCheck className="w-4 h-4 text-[#00C2B8]" />
          <span>Protected by multi-layer encryption</span>
        </div>
      </div>
    </div>
  );
};
