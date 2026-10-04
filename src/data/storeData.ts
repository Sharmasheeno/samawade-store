export interface GameItem {
  id: string;
  title: string;
  badge: "Instant" | "Manual" | "Official";
  image: string;
  category: string;
}

export const ALL_GAMES: GameItem[] = [
  {
    id: "pubgm",
    title: "PUBG Mobile",
    badge: "Instant",
    image: "/game-pubg.png",
    category: "battle-royale",
  },
  {
    id: "freefire",
    title: "Free Fire",
    badge: "Instant",
    image: "/game-freefire.png",
    category: "battle-royale",
  },
  {
    id: "mlbb",
    title: "Mobile Legends",
    badge: "Instant",
    image: "/game-mlbb.png",
    category: "moba",
  },
  {
    id: "efootball_coins",
    title: "eFootball Coins",
    badge: "Manual",
    image: "/game-efootball.png",
    category: "sports",
  },
  {
    id: "bloodstrike",
    title: "Blood Strike",
    badge: "Instant",
    image: "/game-bloodstrike.png",
    category: "action",
  },
  {
    id: "telegram",
    title: "Telegram Premium",
    badge: "Instant",
    image: "/game-telegram.png",
    category: "apps",
  },
];

export interface PaymentPartner {
  name: string;
  badge: string;
  image: string;
}

export const PAYMENT_PARTNERS: PaymentPartner[] = [
  { name: "EVC Plus", badge: "EVC Plus", image: "/pay-evc.svg" },
  { name: "Jeeb", badge: "Jeeb", image: "/pay-jeeb.svg" },
  { name: "Dahab", badge: "Dahab", image: "/pay-dahab.svg" },
  { name: "Somtel", badge: "Somtel", image: "/pay-somtel.svg" },
  { name: "Sahal", badge: "SAHAL", image: "/pay-sahal.svg" },
  { name: "eDahab", badge: "eDahab", image: "/pay-edahab.svg" },
];

