import React, { useState } from "react";
import {
  ArrowLeft,
  CircleCheck,
  Coins,
  Users,
  Tag,
  AlertCircle,
  ShieldCheck,
  ChevronDown,
  Lock,
  ArrowRight,
  X,
  Zap,
} from "lucide-react";

interface EFootballCategoryProps {
  onBack: () => void;
}

interface ProductItem {
  id: string;
  name: string;
  price: string;
  priceNum: number;
  section: "coins" | "players" | "special";
  image: string;
}

export const EFootballCategory: React.FC<EFootballCategoryProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<"coins" | "players" | "special">("coins");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>({
    id: "c1",
    name: "130 Coins",
    price: "$2.00",
    priceNum: 2.0,
    section: "coins",
    image: "/game-efootball.png",
  });
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [konamiEmail, setKonamiEmail] = useState("");
  const [konamiPassword, setKonamiPassword] = useState("");
  const [detailsSaved, setDetailsSaved] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const eFootballArt = "/game-efootball.png";

  const coinsProducts: ProductItem[] = [
    { id: "c1", name: "130 Coins", price: "$2.00", priceNum: 2.0, section: "coins", image: eFootballArt },
    { id: "c2", name: "550 Coins", price: "$6.00", priceNum: 6.0, section: "coins", image: eFootballArt },
    { id: "c3", name: "750 Coins", price: "$8.00", priceNum: 8.0, section: "coins", image: eFootballArt },
    { id: "c4", name: "1040 Coins", price: "$9.50", priceNum: 9.5, section: "coins", image: eFootballArt },
    { id: "c5", name: "2130 Coins", price: "$19.00", priceNum: 19.0, section: "coins", image: eFootballArt },
    { id: "c6", name: "3250 Coins", price: "$28.00", priceNum: 28.0, section: "coins", image: eFootballArt },
    { id: "c7", name: "5700 Coins", price: "$47.00", priceNum: 47.0, section: "coins", image: eFootballArt },
    { id: "c8", name: "12800 Coins", price: "$95.00", priceNum: 95.0, section: "coins", image: eFootballArt },
  ];

  const playersProducts: ProductItem[] = [
    {
      id: "p1",
      name: "Starter Set: Luis Suárez",
      price: "$2.00",
      priceNum: 2.0,
      section: "players",
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80",
    },
    {
      id: "p2",
      name: "Starter Set: Iker Casillas",
      price: "$4.00",
      priceNum: 4.0,
      section: "players",
      image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const faqs = [
    {
      question: "Maxaa la iga rabaa si eFootball coins la iigu shubo?",
      answer:
        "Waxaa lagaa rabaa Konami ID Email-kaaga iyo Password-kaaga si farsamoyaqaannadu toos ugu shubaan coins-ka koontadaada.",
    },
    {
      question: "Intee in le'eg ayay qaadanaysaa shubista eFootball?",
      answer:
        "Shubistu waxay caadiyan qaadataa 10 ilaa 15 daqiiqo gudahood marka lacagtu soo dhacdo.",
    },
    {
      question: "eFootball Coins Android ma ku shaqaynayaan iPhone/iPad?",
      answer:
        "Maya, xirmadani waxay u gaar tahay kaliya taleefannada Android (sida Samsung, Redmi, Tecno, iwm). Haddii aad isticmaasho iPhone ama iPad, dooro qaybta eFootball iOS.",
    },
  ];

  const handleProductSelect = (prod: ProductItem) => {
    setSelectedProduct(prod);
    if (!detailsSaved) {
      setShowDetailsModal(true);
    }
  };

  const handleSaveDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (konamiEmail.trim() && konamiPassword.trim()) {
      setDetailsSaved(true);
      setShowDetailsModal(false);
    }
  };

  const handleCheckout = () => {
    if (!detailsSaved) {
      setShowDetailsModal(true);
    } else {
      alert(
        `Dalabkaaga ${selectedProduct?.name} (${selectedProduct?.price}) ee akoonka ${konamiEmail} waa la diray! Mahadsanid SamwadeStore.`
      );
    }
  };

  return (
    <div className="bg-[#F7F9FC] text-[#0B1930] pb-28 min-h-[85vh]">
      {/* 1. Category Header Banner with Deep Navy */}
      <div className="relative w-full h-[220px] md:h-[260px] overflow-hidden flex flex-col items-center justify-center pt-8 bg-[#061A3A] border-b border-[#0B2D5B]">
        {/* Background Artwork */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${eFootballArt})` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A] via-transparent to-black/30"></div>

        {/* Top Floating Buttons (Back Button) */}
        <div className="absolute top-4 left-4 right-4 z-[60] flex justify-between items-center max-w-[1240px] mx-auto w-full px-2 sm:px-4">
          <button
            onClick={onBack}
            className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white w-10 h-10 flex items-center justify-center rounded-[10px] transition border border-white/15 active:scale-95 cursor-pointer shadow-subtle"
            aria-label="Back to Home"
          >
            <ArrowLeft className="w-5 h-5 text-white" />
          </button>
          <div className="w-10 h-10"></div>
        </div>

        {/* Banner Title & Badges */}
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <div className="text-[#D4AF37] text-[10px] md:text-xs font-bold tracking-[0.2em] mb-1 uppercase">
            TOP UP
          </div>
          <h1 className="text-2xl md:text-4xl font-[800] text-white uppercase tracking-tight leading-tight">
            E-FOOTBALL COINS ANDRIOD
          </h1>
          <div className="mt-3 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-[8px] flex items-center gap-1.5 border border-white/15 shadow-subtle">
            <CircleCheck className="w-3.5 h-3.5 text-[#00C2B8]" />
            <span className="text-white text-[11px] font-bold tracking-wide">
              MANUAL
            </span>
          </div>
        </div>
      </div>

      {/* 2. Account Details Alert Card */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30 -mt-10 mb-6">
        <div className="bg-white rounded-[16px] shadow-card border border-[#E6EAF0] p-4 sm:p-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-[12px] overflow-hidden shrink-0 border border-[#E6EAF0] bg-slate-50">
              <img
                src={eFootballArt}
                alt="E-Football Coins Android"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=400&q=80";
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[#061A3A] font-bold text-sm sm:text-base">
                eFootball Account Details
              </span>
              <span
                className={`font-semibold text-xs leading-tight mt-0.5 ${
                  detailsSaved ? "text-[#00C2B8]" : "text-[#D4AF37]"
                }`}
              >
                {detailsSaved
                  ? `Konami ID: ${konamiEmail} (Verified)`
                  : "Email & Password not entered — please add your details"}
              </span>
            </div>
          </div>

          <button
            onClick={() => setShowDetailsModal(true)}
            className="bg-[#061A3A] hover:bg-[#0B2D5B] text-white px-5 sm:px-7 py-2.5 rounded-[10px] font-bold text-xs sm:text-sm transition shadow-subtle whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
          >
            {detailsSaved ? "Edit Details" : "Add Details"}
          </button>
        </div>
      </div>

      {/* 3. Sticky Tab Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="sticky top-[72px] z-40 mb-6 py-2.5 bg-[#F7F9FC]/95 backdrop-blur-md transition-all">
          <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-none py-1">
            <button
              onClick={() => setActiveTab("coins")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[10px] text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "coins"
                  ? "bg-[#061A3A] text-white shadow-subtle"
                  : "bg-white hover:bg-slate-100 text-[#667085] border border-[#E6EAF0]"
              }`}
            >
              <Coins className="w-4 h-4 text-[#00C2B8]" />
              <span>Coins</span>
            </button>

            <button
              onClick={() => setActiveTab("players")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[10px] text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "players"
                  ? "bg-[#061A3A] text-white shadow-subtle"
                  : "bg-white hover:bg-slate-100 text-[#667085] border border-[#E6EAF0]"
              }`}
            >
              <Users className="w-4 h-4 text-[#00C2B8]" />
              <span>Players</span>
            </button>

            <button
              onClick={() => setActiveTab("special")}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-[10px] text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "special"
                  ? "bg-[#061A3A] text-white shadow-subtle"
                  : "bg-white hover:bg-slate-100 text-[#667085] border border-[#E6EAF0]"
              }`}
            >
              <Tag className="w-4 h-4 text-[#00C2B8]" />
              <span>Qimo shimis coins</span>
            </button>
          </div>
        </div>

        {/* 4. Products Grid */}
        <div className="space-y-10">
          {/* Section Coins */}
          {(activeTab === "coins" || activeTab === "special") && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-[10px] bg-[#F0FDFB] text-[#00C2B8] flex items-center justify-center border border-[#00C2B8]/20 shrink-0">
                  <Coins className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#061A3A] leading-none">
                    Coins
                  </h3>
                  <p className="text-[10px] font-semibold text-[#667085] uppercase tracking-wider mt-1">
                    Standard Denominations
                  </p>
                </div>
                <div className="h-px bg-[#E6EAF0] flex-1 ml-4"></div>
              </div>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {coinsProducts.map((prod) => {
                  const isSelected = selectedProduct?.id === prod.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => handleProductSelect(prod)}
                      className={`bg-white rounded-[16px] p-3 text-left flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? "border-[#00C2B8] ring-2 ring-[#00C2B8]/20 bg-[#F0FDFB]/40"
                          : "border-[#E6EAF0] hover:border-[#00C2B8]/40"
                      }`}
                    >
                      <div className="w-full aspect-square rounded-[12px] overflow-hidden bg-slate-50 mb-2.5">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between">
                        <div className="text-[#061A3A] font-bold text-xs sm:text-sm line-clamp-1">
                          {prod.name}
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#E6EAF0] flex items-center justify-between">
                          <span className="text-[#00C2B8] font-[800] text-sm sm:text-base">
                            {prod.price}
                          </span>
                          <span className="bg-[#061A3A] text-white hover:bg-[#0B2D5B] px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider transition">
                            Buy
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Section Players */}
          {(activeTab === "players" || activeTab === "special") && (
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-[10px] bg-[#F0FDFB] text-[#00C2B8] flex items-center justify-center border border-[#00C2B8]/20 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-[#061A3A] leading-none">
                    Players
                  </h3>
                  <p className="text-[10px] font-semibold text-[#667085] uppercase tracking-wider mt-1">
                    Special Starter Sets
                  </p>
                </div>
                <div className="h-px bg-[#E6EAF0] flex-1 ml-4"></div>
              </div>

              <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {playersProducts.map((prod) => {
                  const isSelected = selectedProduct?.id === prod.id;
                  return (
                    <div
                      key={prod.id}
                      onClick={() => handleProductSelect(prod)}
                      className={`bg-white rounded-[16px] p-3 text-left flex flex-col shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200 cursor-pointer border ${
                        isSelected
                          ? "border-[#00C2B8] ring-2 ring-[#00C2B8]/20 bg-[#F0FDFB]/40"
                          : "border-[#E6EAF0] hover:border-[#00C2B8]/40"
                      }`}
                    >
                      <div className="w-full aspect-square rounded-[12px] overflow-hidden bg-slate-900 mb-2.5">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex flex-col flex-1 justify-between">
                        <div className="text-[#061A3A] font-bold text-xs sm:text-sm line-clamp-1">
                          {prod.name}
                        </div>
                        <div className="mt-3 pt-2 border-t border-[#E6EAF0] flex items-center justify-between">
                          <span className="text-[#00C2B8] font-[800] text-sm sm:text-base">
                            {prod.price}
                          </span>
                          <span className="bg-[#061A3A] text-white hover:bg-[#0B2D5B] px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase tracking-wider transition">
                            Buy
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* 5. Somali Guide Banner (Deep Navy + Teal) */}
        <div className="mt-12 rounded-[24px] bg-[#061A3A] text-white p-6 sm:p-10 border border-[#0B2D5B] shadow-panel relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="w-full lg:w-8/12 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#D4AF37] text-[10px] font-bold uppercase tracking-widest border border-white/10">
                E-FOOTBALL ANDROID GUIDE
              </span>

              <h2 className="text-xl sm:text-2xl font-[800] tracking-tight leading-snug">
                eFootball Coins Android Soomaaliya –{" "}
                <span className="text-[#00C2B8]">Konami ID Shubis</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed">
                Ka iibso SamwadeStore eFootball Mobile Coins taleefannada Android
                (Samsung, Redmi, iwm). Waxaa loogu shubayaa Konami ID Email &amp;
                Password 10–15 daqiiqo gudahood si ammaan ah.
              </p>
            </div>

            <div className="w-full lg:w-4/12 flex justify-center">
              <div className="w-40 h-40 rounded-[16px] overflow-hidden border border-white/15 shadow-xl">
                <img src={eFootballArt} alt="eFootball Guide" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* 6. Step-by-Step Instructions & Encrypted Login Card */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          <div className="lg:col-span-7 bg-white rounded-[20px] p-6 sm:p-8 border border-[#E6EAF0] shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#00C2B8]" />
                <h3 className="font-[800] text-[#061A3A] text-base sm:text-lg">
                  Sida loogu shubto eFootball Coins
                </h3>
              </div>
              <p className="text-xs text-[#667085] font-medium mb-6">
                Kani waa eFootball Android kaliya wuxuuna u baahan yahay Konami ID (Email &amp; Password) oo sax ah.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-[8px] bg-[#F0FDFB] text-[#00C2B8] font-[800] text-xs flex items-center justify-center shrink-0 border border-[#00C2B8]/30">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#061A3A]">
                      Xaqiiji Konami ID
                    </h4>
                    <p className="text-[#667085] text-xs mt-0.5">
                      Xulo / hubi akoonkaaga eFootball uu ku xiran yahay Konami ID sax ah.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-[8px] bg-[#F7F9FC] text-[#061A3A] font-[800] text-xs flex items-center justify-center shrink-0 border border-[#E6EAF0]">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#061A3A]">
                      Geli Email &amp; Password
                    </h4>
                    <p className="text-[#667085] text-xs mt-0.5">
                      Geli Konami ID Email-kaaga iyo Password-kaaga oo ammaan ah.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-[8px] bg-[#FBF5DC] text-[#D4AF37] font-[800] text-xs flex items-center justify-center shrink-0 border border-[#D4AF37]/30">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-[#061A3A]">
                      Shubistu Waa Toos ah (10 - 15 Daqiiqo)
                    </h4>
                    <p className="text-[#667085] text-xs mt-0.5">
                      Coins-kaagu waxa uu kuugu dhacayaa 10 - 15 daqiiqo gudahood marka aad bixiso.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E6EAF0] flex items-center gap-2 text-xs text-[#00C2B8] font-bold">
              <CircleCheck className="w-4 h-4" />
              <span>Xogtaada akoonku waa 100% ammaan ah oo waa la dhowraa.</span>
            </div>
          </div>

          {/* Konami ID Login Card */}
          <div className="lg:col-span-5 bg-[#061A3A] rounded-[20px] p-6 sm:p-7 border border-[#0B2D5B] text-white shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="font-bold text-xs uppercase tracking-wider text-slate-200">
                  KONAMI ID LOGIN
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#00C2B8] bg-white/5 px-2.5 py-1 rounded-[6px] border border-white/10">
                  <Lock className="w-3 h-3" />
                  <span>256-bit Encrypted</span>
                </div>
              </div>

              <div className="space-y-3.5 mt-5">
                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    KONAMI ID / EMAIL
                  </label>
                  <div className="w-full bg-[#0B2D5B]/60 border border-white/10 rounded-[10px] px-3.5 py-2.5 text-xs text-white font-mono">
                    {konamiEmail || "user@example.com"}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    PASSWORD
                  </label>
                  <div className="w-full bg-[#0B2D5B]/60 border border-white/10 rounded-[10px] px-3.5 py-2.5 text-xs text-slate-400 font-mono">
                    {konamiPassword ? "••••••••••••" : "••••••••••••"}
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowDetailsModal(true)}
              className="mt-6 w-full py-2.5 rounded-[10px] bg-[#00C2B8] hover:bg-[#00AAA3] text-white font-bold text-xs uppercase tracking-wider transition active:scale-95 shadow-subtle flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{detailsSaved ? "Edit Account Details" : "Enter Konami ID"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 7. FAQ Accordion */}
        <div className="mt-10 bg-white rounded-[20px] p-6 sm:p-8 border border-[#E6EAF0] shadow-card">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-[800] text-[#061A3A] text-base sm:text-lg">
              Su'aalaha Badanaa La Is Weydiiyo
            </h3>
            <span className="text-xs font-bold text-[#00C2B8]">
              eFootball FAQ
            </span>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border border-[#E6EAF0] rounded-[12px] overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-3.5 text-left font-bold text-xs sm:text-sm text-[#061A3A] flex items-center justify-between hover:bg-[#F7F9FC] transition cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#667085] transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#00C2B8]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 pt-1 text-xs text-[#667085] leading-relaxed bg-[#F7F9FC]">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Fixed Bottom Checkout Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#061A3A] border-t border-[#0B2D5B] p-3 sm:p-4 text-white shadow-2xl">
        <div className="max-w-[1240px] mx-auto flex items-center justify-between gap-4 px-2 sm:px-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-[10px] bg-[#00C2B8]/15 text-[#00C2B8] flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 fill-[#00C2B8]" />
            </div>
            <div>
              <span className="text-xs text-slate-300 font-medium block">
                Selected Package:
              </span>
              <span className="text-xs sm:text-sm font-[800] text-white">
                {selectedProduct ? `${selectedProduct.name} — ${selectedProduct.price}` : "Choose package"}
              </span>
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="px-7 sm:px-9 py-2.5 rounded-[10px] bg-[#00C2B8] hover:bg-[#00AAA3] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-subtle transition active:scale-95 cursor-pointer flex items-center gap-2 whitespace-nowrap shrink-0"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 9. Konami ID Modal */}
      {showDetailsModal && (
        <div className="fixed inset-0 z-[170] bg-[#061A3A]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-[20px] p-6 shadow-2xl border border-[#E6EAF0] animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowDetailsModal(false)}
              className="absolute top-4 right-4 text-[#667085] hover:text-[#061A3A] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-[10px] bg-[#061A3A] overflow-hidden shrink-0">
                <img src={eFootballArt} alt="eFootball" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-[800] text-[#061A3A] text-sm">
                  Konami ID Details
                </h3>
                <span className="text-[10px] font-semibold text-[#00C2B8] uppercase tracking-wider block">
                  eFootball Android
                </span>
              </div>
            </div>

            <div className="rounded-[10px] bg-[#FBF5DC] border border-[#D4AF37]/30 p-3 mb-4 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <p className="text-xs text-[#061A3A] font-medium leading-relaxed">
                Fadlan xaqiiji inuu emailka iyo password-ka sax yahay si shubistu aysan u dib dhicin.
              </p>
            </div>

            <form onSubmit={handleSaveDetails} className="space-y-3.5">
              <div>
                <label className="block text-[11px] font-bold uppercase text-[#061A3A] mb-1">
                  Konami Email / ID
                </label>
                <input
                  type="email"
                  required
                  value={konamiEmail}
                  onChange={(e) => setKonamiEmail(e.target.value)}
                  placeholder="e.g. example@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-[#F7F9FC] border border-[#E6EAF0] text-sm text-[#061A3A] focus:bg-white focus:border-[#00C2B8] focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold uppercase text-[#061A3A] mb-1">
                  Password (Ammaan ah)
                </label>
                <input
                  type="password"
                  required
                  value={konamiPassword}
                  onChange={(e) => setKonamiPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-[#F7F9FC] border border-[#E6EAF0] text-sm text-[#061A3A] focus:bg-white focus:border-[#00C2B8] focus:outline-none transition"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-[10px] bg-[#00C2B8] hover:bg-[#00AAA3] text-white font-bold text-xs uppercase tracking-wider shadow-subtle transition active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 mt-4"
              >
                <span>XAQIIJI MACLUUMAADKA</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
