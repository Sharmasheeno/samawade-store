import React from "react";
import { BrandLogo } from "./BrandLogo";

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#061A3A] text-white pt-14 pb-28 md:pb-12 border-t border-[#0B2D5B]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand Info & Socials */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block">
              <BrandLogo height={38} light />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm font-medium leading-relaxed max-w-sm">
              SamwadeStore is Somalia's trusted digital gaming store for fast and verified game credits, coins, and subscriptions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#00C2B8] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#00C2B8] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://tiktok.com/@samwadestore"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#00C2B8] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.34-.8.56-1.31 1.48-1.34 2.45-.03.58.12 1.17.44 1.66.45.71 1.25 1.17 2.09 1.21.57.04 1.14-.07 1.64-.37.75-.43 1.23-1.22 1.3-2.08.08-2.61.02-5.23.04-7.85l-.02-7.16Z" />
                </svg>
              </a>
              <a
                href="https://t.me/samawadestore"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-[8px] bg-white/5 hover:bg-[#00C2B8] border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all cursor-pointer"
                aria-label="Telegram"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                  <path d="m21.854 2.147-10.94 10.939" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 mt-4 text-xs font-semibold text-slate-400">
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#games">Games</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Orders</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Code Checker</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Cashback</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Leaderboard</a></li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
              Support
            </h3>
            <ul className="space-y-2.5 mt-4 text-xs font-semibold text-slate-400">
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Live Chat</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="https://t.me/samawadestore" target="_blank" rel="noreferrer">Telegram Channel</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">WhatsApp Support</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4AF37]">
              Legal
            </h3>
            <ul className="space-y-2.5 mt-4 text-xs font-semibold text-slate-400">
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-[#00C2B8] transition-colors" href="#">Refund Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <div>© 2026 SamwadeStore. All rights reserved.</div>
          <div className="flex items-center gap-4 text-xs text-slate-400">
            <span className="text-[#00C2B8]">Mogadishu, Somalia</span>
            <span className="text-slate-600">•</span>
            <span>24/7 Verified Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
