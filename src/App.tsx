import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AllGames } from "./components/AllGames";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { StatsSection } from "./components/StatsSection";
import { HowItWorks } from "./components/HowItWorks";
import { PaymentPartners } from "./components/PaymentPartners";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { MobileBottomNav } from "./components/MobileBottomNav";
import { GameModal } from "./components/GameModal";
import { LoginModal } from "./components/LoginModal";
import { EFootballCategory } from "./components/EFootballCategory";
import type { GameItem } from "./data/storeData";

export function App() {
  const [selectedGame, setSelectedGame] = useState<GameItem | null>(null);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [currentView, setCurrentView] = useState<"home" | "efootball">("home");

  // Sync with browser URL / hash for /category/E-Football_Coins_Andriod
  useEffect(() => {
    const handleUrlChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (path.includes("efootball") || hash.includes("efootball")) {
        setCurrentView("efootball");
      } else {
        setCurrentView("home");
      }
    };

    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    window.addEventListener("hashchange", handleUrlChange);
    return () => {
      window.removeEventListener("popstate", handleUrlChange);
      window.removeEventListener("hashchange", handleUrlChange);
    };
  }, []);

  const handleGameSelect = (game: GameItem) => {
    if (game.id.includes("efootball")) {
      setCurrentView("efootball");
      window.location.hash = "/category/E-Football_Coins_Andriod";
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedGame(game);
    }
  };

  const handleBackToHome = () => {
    setCurrentView("home");
    window.location.hash = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollDepth = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", checkScrollDepth, { passive: true });
    return () => window.removeEventListener("scroll", checkScrollDepth);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToGames = () => {
    if (currentView !== "home") {
      setCurrentView("home");
      window.location.hash = "";
    }
    setTimeout(() => {
      const el = document.getElementById("games");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F9FC] text-[#0B1930] selection:bg-[#E0F8F6] selection:text-[#00A9A2]">
      {/* Sticky Desktop & Mobile Header */}
      <Header
        onLoginClick={() => setLoginModalOpen(true)}
        activeNav={activeNav}
        setActiveNav={(nav) => {
          setActiveNav(nav);
          if (nav === "Home") handleBackToHome();
        }}
        onNavigateHome={handleBackToHome}
      />

      <div className="transition-opacity duration-200">
        {currentView === "efootball" ? (
          /* Dedicated Category Page */
          <EFootballCategory onBack={handleBackToHome} />
        ) : (
          /* Centralized Homepage Layout */
          <main className="flex-1 max-w-[1240px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
            {/* Purpose-Built Hero Section */}
            <Hero onBrowseGames={scrollToGames} />

            {/* Popular Games Marketplace */}
            <AllGames onSelectGame={handleGameSelect} />

            {/* Why Choose SamwadeStore? */}
            <WhyChooseUs />

            {/* Trust / Customer Statistics with live counters */}
            <StatsSection />

            {/* 3-Step Flow */}
            <HowItWorks />

            {/* Secure Local Payments */}
            <PaymentPartners />

            {/* Call to Action Banner */}
            <CTASection onBrowseGames={scrollToGames} />
          </main>
        )}
      </div>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Bottom Bar */}
      <MobileBottomNav
        activeTab={activeNav}
        onSelectTab={(tab) => {
          setActiveNav(tab);
          if (tab === "Home") handleBackToHome();
          if (tab === "Games") scrollToGames();
          if (tab === "Profile") setLoginModalOpen(true);
        }}
      />

      {/* Scroll-To-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-8 right-6 z-[90] p-3 rounded-full bg-[#061A3A] hover:bg-[#00C2B8] text-white shadow-lg transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00C2B8] group animate-in fade-in zoom-in-75"
          aria-label="Scroll to top"
        >
          <svg
            className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Interactive Game Details / Topup Modal for other games */}
      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />

      {/* Authentication / Login Modal */}
      <LoginModal
        isOpen={loginModalOpen}
        onClose={() => setLoginModalOpen(false)}
      />
    </div>
  );
}

export default App;




