import React, { useState } from "react";
import { House, PhoneCall, ShoppingBag, User } from "lucide-react";

interface MobileBottomNavProps {
  activeTab?: string;
  onSelectTab?: (tab: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab = "Home",
  onSelectTab,
}) => {
  const [current, setCurrent] = useState(activeTab);

  const tabs = [
    { id: "Home", label: "Home", icon: House },
    { id: "Games", label: "Games", icon: ShoppingBag },
    { id: "Support", label: "Support", icon: PhoneCall },
    { id: "Profile", label: "Account", icon: User },
  ];

  const handleTabClick = (tabId: string) => {
    setCurrent(tabId);
    if (onSelectTab) onSelectTab(tabId);
  };

  const activeIndex = tabs.findIndex((t) => t.id === current);

  return (
    <nav className="lg:hidden fixed bottom-3 left-4 right-4 max-w-sm mx-auto z-[100] transition-all">
      <div className="relative bg-white/95 backdrop-blur-md border border-[#E6EAF0] p-1.5 rounded-[16px] shadow-card flex items-center justify-between overflow-hidden">
        {/* Sliding Indicator */}
        <div
          style={{
            transform: `translateX(calc(${activeIndex >= 0 ? activeIndex : 0} * 100%))`,
            left: "6px",
          }}
          className="absolute top-1.5 bottom-1.5 w-[calc(25%-3px)] rounded-[12px] bg-[#F0FDFB] border border-[#00C2B8]/20 transition-transform duration-250 ease-out pointer-events-none"
        />

        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = current === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="relative z-10 w-1/4 py-1.5 flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer select-none"
            >
              <Icon
                className={`w-4 h-4 transition-colors ${
                  isActive ? "text-[#00C2B8] stroke-[2.5]" : "text-[#667085]"
                }`}
              />
              <span
                className={`text-[10px] tracking-tight leading-none ${
                  isActive
                    ? "text-[#00C2B8] font-bold"
                    : "text-[#667085] font-semibold"
                }`}
              >
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
