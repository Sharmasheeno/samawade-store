import React, { useState } from "react";
import { Zap, ArrowRight } from "lucide-react";
import { ALL_GAMES, type GameItem } from "../data/storeData";
import { Reveal } from "./Motion";

interface AllGamesProps {
  onSelectGame?: (game: GameItem) => void;
}

export const AllGames: React.FC<AllGamesProps> = ({ onSelectGame }) => {
  const [filter, setFilter] = useState("all");

  const filteredGames = ALL_GAMES.filter((game) => {
    if (filter === "all") return true;
    if (filter === "instant") return game.badge.toLowerCase() === "instant";
    if (filter === "sports") return game.category === "sports";
    return true;
  });

  return (
    <section id="games" className="w-full my-12 lg:my-16">
      {/* Section Header */}
      <Reveal direction="up">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-[800] tracking-tight">
              <span className="text-[#061A3A]">Popular </span>
              <span className="text-[#00C2B8]">Games</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] mt-1 font-medium">
              Choose a game and top up in seconds.
            </p>
          </div>

          {/* Right Actions: Filters & View All Games */}
          <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 flex-wrap sm:flex-nowrap w-full sm:w-auto">
            <div className="flex items-center gap-1 bg-white p-1 rounded-[10px] border border-[#E5EAF0] shadow-subtle overflow-x-auto no-scrollbar">
              <button
                onClick={() => setFilter("all")}
                className={`px-2.5 sm:px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filter === "all"
                    ? "bg-[#061A3A] text-white"
                    : "text-[#667085] hover:text-[#061A3A]"
                }`}
              >
                All Games
              </button>
              <button
                onClick={() => setFilter("instant")}
                className={`px-2.5 sm:px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all cursor-pointer flex items-center gap-1 whitespace-nowrap ${
                  filter === "instant"
                    ? "bg-[#061A3A] text-white"
                    : "text-[#667085] hover:text-[#061A3A]"
                }`}
              >
                <Zap className="w-3 h-3 text-[#00C2B8] fill-[#00C2B8]" />
                <span>Instant</span>
              </button>
              <button
                onClick={() => setFilter("sports")}
                className={`px-2.5 sm:px-3 py-1.5 rounded-[8px] text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  filter === "sports"
                    ? "bg-[#061A3A] text-white"
                    : "text-[#667085] hover:text-[#061A3A]"
                }`}
              >
                eFootball
              </button>
            </div>

            <button
              onClick={() => setFilter("all")}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00C2B8] hover:text-[#00A9A2] transition-colors group cursor-pointer whitespace-nowrap ml-auto sm:ml-0"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </Reveal>

      {/* Grid: 6 columns matching reference */}
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 lg:gap-5">
        {filteredGames.map((game, idx) => (
          <Reveal key={game.id} delay={Math.min(idx * 0.05, 0.4)} direction="up">
            <div
              onClick={() => onSelectGame && onSelectGame(game)}
              className="bg-white rounded-[14px] sm:rounded-[16px] p-2.5 sm:p-3 border border-[#E5EAF0] shadow-sm hover:shadow-hover hover:-translate-y-1.5 hover:border-[#00C2B8]/40 transition-all duration-300 cursor-pointer group flex flex-col items-center text-center active:scale-98"
            >
              {/* Rounded Game Icon Artwork matching reference */}
              <div className="relative w-full aspect-square rounded-[12px] sm:rounded-[14px] overflow-hidden bg-slate-100 mb-2.5 sm:mb-3 shadow-subtle group-hover:shadow-md transition-shadow">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Game Title */}
              <h3 className="text-xs sm:text-[13px] font-[800] text-[#061A3A] group-hover:text-[#00C2B8] transition-colors leading-snug line-clamp-1 mb-2">
                {game.title}
              </h3>

              {/* Delivery Tag Pill matching reference: light teal/gold pill */}
              <div className="w-full flex justify-center">
                <span
                  className={`text-[10px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-[6px] flex items-center justify-center gap-1 shadow-subtle ${
                    game.badge.toLowerCase() === "instant"
                      ? "bg-[#E0F8F6] text-[#00A9A2] border border-[#00C2B8]/20"
                      : "bg-[#FBF5DC] text-[#D4AF37] border border-[#D4AF37]/30"
                  }`}
                >
                  <Zap className="w-2.5 h-2.5 fill-current" />
                  <span>{game.badge}</span>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};


