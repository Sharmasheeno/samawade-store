import React, { useState } from "react";
import { X, Zap, ArrowRight, Check } from "lucide-react";
import type { GameItem } from "../data/storeData";

interface GameModalProps {
  game: GameItem | null;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  const [selectedPack, setSelectedPack] = useState<number | null>(0);
  const [showIdModal, setShowIdModal] = useState(false);
  const [email, setEmail] = useState("");
  const [playerConfirmed, setPlayerConfirmed] = useState(false);


  if (!game) return null;

  const coinPacks = [
    { coins: "60 Credits", price: "$0.99" },
    { coins: "325 Credits", price: "$4.99" },
    { coins: "660 Credits", price: "$9.99" },
    { coins: "1800 Credits", price: "$24.99" },
    { coins: "3850 Credits", price: "$49.99" },
    { coins: "8100 Credits", price: "$99.99" },
  ];

  return (
    <div className="fixed inset-0 z-[150] bg-[#061A3A]/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-[20px] overflow-hidden shadow-2xl border border-[#E6EAF0] my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="relative bg-[#061A3A] text-white p-5 sm:p-6 flex items-center justify-between border-b border-[#0B2D5B]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-[12px] overflow-hidden bg-white/10 border border-white/10 shrink-0">
              <img src={game.image} alt={game.title} className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-[800] text-white tracking-tight">
                {game.title}
              </h2>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[10px] font-bold text-[#00C2B8] bg-[#00C2B8]/15 px-2 py-0.5 rounded-[6px] border border-[#00C2B8]/30">
                  {game.badge}
                </span>
                <span className="text-xs text-slate-300 font-medium">Instant Top-Up</span>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-[8px] bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 space-y-6">
          {/* Account Status Card */}
          <div className="bg-[#F7F9FC] rounded-[16px] p-4 border border-[#E6EAF0] flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-[#061A3A] block">
                Player Account
              </span>
              <span className="text-xs text-[#667085] mt-0.5 block">
                {playerConfirmed
                  ? `Player ID / Email: ${email}`
                  : "Player ID not entered — please add your details"}
              </span>
            </div>

            <button
              onClick={() => setShowIdModal(true)}
              className="px-4 py-2 bg-[#061A3A] hover:bg-[#0B2D5B] text-white text-xs font-bold rounded-[8px] transition active:scale-95 cursor-pointer shrink-0"
            >
              {playerConfirmed ? "Edit ID" : "Add Player ID"}
            </button>
          </div>

          {/* Package Selection */}
          <div>
            <div className="flex items-center gap-1.5 mb-3 text-xs font-bold text-[#061A3A] uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-[#00C2B8]" />
              <span>Select Package</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {coinPacks.map((pack, idx) => {
                const isSelected = selectedPack === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedPack(idx)}
                    className={`rounded-[12px] p-3.5 border transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? "border-[#00C2B8] bg-[#F0FDFB] shadow-subtle"
                        : "border-[#E6EAF0] bg-white hover:border-[#00C2B8]/40"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-xs text-[#061A3A]">{pack.coins}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00C2B8]" />}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#E6EAF0]">
                      <span className="font-[800] text-sm text-[#00C2B8]">{pack.price}</span>
                      <span className="text-[10px] font-bold text-[#061A3A] bg-[#F7F9FC] px-2 py-0.5 rounded-[4px]">
                        Select
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Modal Footer / Checkout */}
        <div className="p-4 sm:p-5 bg-[#F7F9FC] border-t border-[#E6EAF0] flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-semibold text-[#667085] block">
              Selected Total
            </span>
            <span className="text-base font-[800] text-[#061A3A]">
              {selectedPack !== null ? coinPacks[selectedPack].coins : "None"} —{" "}
              <span className="text-[#00C2B8]">
                {selectedPack !== null ? coinPacks[selectedPack].price : "$0.00"}
              </span>
            </span>
          </div>

          <button
            onClick={() => {
              if (!playerConfirmed) {
                setShowIdModal(true);
              } else {
                alert(`Dalabkaaga ${game.title} waa la diray! Mahadsanid SamwadeStore.`);
                onClose();
              }
            }}
            className="px-6 py-2.5 bg-[#00C2B8] hover:bg-[#00AAA3] text-white font-bold text-xs rounded-[10px] transition active:scale-95 shadow-subtle flex items-center gap-1.5 cursor-pointer"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Nested Player ID Modal */}
      {showIdModal && (
        <div className="fixed inset-0 z-[160] bg-[#061A3A]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white rounded-[20px] p-6 shadow-2xl border border-[#E6EAF0] animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowIdModal(false)}
              className="absolute top-4 right-4 text-[#667085] hover:text-[#061A3A] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="font-[800] text-[#061A3A] text-base mb-1">
              Enter Account Details
            </h3>
            <p className="text-xs text-[#667085] mb-4">
              Fadlan geli macluumaadkaaga ciyaarta si shubistu u dhacdo.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase text-[#061A3A] mb-1">
                  Player ID / User ID
                </label>
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. 512938471"
                  className="w-full px-3.5 py-2.5 rounded-[10px] bg-[#F7F9FC] border border-[#E6EAF0] text-sm text-[#061A3A] focus:bg-white focus:border-[#00C2B8] focus:outline-none transition"
                />
              </div>

              <button
                onClick={() => {
                  if (email.trim()) {
                    setPlayerConfirmed(true);
                    setShowIdModal(false);
                  }
                }}
                className="w-full py-2.5 bg-[#00C2B8] hover:bg-[#00AAA3] text-white font-bold text-xs rounded-[10px] shadow-subtle transition active:scale-95 cursor-pointer mt-2"
              >
                Confirm Account
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
