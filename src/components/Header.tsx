import React, { useState, useEffect } from "react";
import { Send, Bell, Menu, X, ChevronRight, User } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

interface HeaderProps {
  onLoginClick?: () => void;
  activeNav?: string;
  setActiveNav?: (nav: string) => void;
  onNavigateHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onLoginClick,
  activeNav = "Home",
  setActiveNav,
  onNavigateHome,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Games", href: "#games" },
    { label: "Orders", href: "#orders" },
    { label: "Code Checker", href: "#code-checker" },
    { label: "Cashback", href: "#cashback" },
    { label: "Leaderboard", href: "#leaderboard" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (label: string, href: string) => {
    if (setActiveNav) setActiveNav(label);
    if (label === "Home" && onNavigateHome) {
      onNavigateHome();
    } else if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-[100] h-[72px] sm:h-[76px] transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#E5EAF0] shadow-sm"
            : "bg-white border-b border-[#E5EAF0]"
        }`}
      >
        <div className="max-w-[1240px] mx-auto h-full flex items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Left: Brand Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
            }}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2B8] rounded-[8px] shrink-0"
          >
            <BrandLogo imgClassName="h-7 sm:h-9 md:h-10 max-w-[150px] xs:max-w-[170px] sm:max-w-none" />
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = activeNav === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.label, item.href)}
                  className={`text-[15px] font-semibold tracking-tight transition-all duration-200 relative py-1.5 cursor-pointer group focus:outline-none focus:ring-2 focus:ring-[#00C2B8] rounded-[6px] ${
                    isActive
                      ? "text-[#00C2B8] font-bold"
                      : "text-[#667085] hover:text-[#0B2D5B]"
                  }`}
                >
                  <span>{item.label}</span>
                  {/* Subtle animated underline on active or hover */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#00C2B8] rounded-full transition-transform duration-250 ease-out origin-center ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-75"
                    }`}
                  ></span>
                </button>
              );
            })}
          </nav>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Telegram Button (Teal) */}
            <a
              href="https://t.me/samawadestore"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-[#00C2B8] hover:bg-[#00A9A2] text-white rounded-[10px] text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-subtle hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C2B8] group"
            >
              <Send className="w-3.5 h-3.5 fill-white transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span>Telegram</span>
            </a>

            {/* Notification Bell */}
            <button
              aria-label="Notifications"
              className="relative p-2.5 rounded-[10px] bg-[#F6F9FC] hover:bg-[#E5EAF0] text-[#061A3A] transition border border-[#E5EAF0] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2B8]"
            >
              <Bell className="w-4 h-4 text-[#667085]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#00C2B8] rounded-full ring-2 ring-white"></span>
            </button>

            {/* Login / Account (Navy) */}
            <button
              onClick={onLoginClick}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#061A3A] hover:bg-[#0B2D5B] text-white rounded-[10px] text-xs font-bold transition-all duration-200 active:scale-95 cursor-pointer shadow-subtle hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#00C2B8]"
            >
              <User className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Login</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-[8px] text-[#061A3A] hover:bg-[#F6F9FC] transition focus:outline-none focus:ring-2 focus:ring-[#00C2B8]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#061A3A]" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99] bg-[#061A3A]/40 backdrop-blur-sm transition-opacity">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between animate-in slide-in-from-right duration-250">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E5EAF0]">
                <BrandLogo height={32} />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-[8px] text-[#667085] hover:bg-[#F6F9FC] focus:outline-none focus:ring-2 focus:ring-[#00C2B8]"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-6 flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = activeNav === item.label;
                  return (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.label, item.href)}
                      className={`flex items-center justify-between px-3.5 py-3 rounded-[10px] text-left text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#E0F8F6]/60 text-[#00A9A2] font-bold"
                          : "text-[#0B1930] hover:bg-[#F6F9FC] hover:text-[#00C2B8]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-4 h-4 text-[#98A2B3]" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-[#E5EAF0]">
              <a
                href="https://t.me/samawadestore"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#00C2B8] text-white rounded-[10px] text-sm font-bold shadow-subtle hover:bg-[#00A9A2] transition"
              >
                <Send className="w-4 h-4 fill-white" />
                <span>Join Telegram Channel</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onLoginClick) onLoginClick();
                }}
                className="w-full py-3 bg-[#061A3A] text-white rounded-[10px] text-sm font-bold hover:bg-[#0B2D5B] transition shadow-subtle flex items-center justify-center gap-2 cursor-pointer"
              >
                <User className="w-4 h-4 text-[#D4AF37]" />
                <span>Login / Account</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

