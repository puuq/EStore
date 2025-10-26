export type Denomination = {
  id: string;
  amount: number;
  priceUSD: number;
  best?: boolean;
};

export type Game = {
  slug: string;
  name: string;
  short: string;
  image: string;
  unit: string; // added field for currency name
  denominations: Denomination[];
};

export const games: Game[] = [
  {
    slug: "valorant",
    name: "Valorant",
    short: "Buy VP to unlock agents, skins, and more.",
    image: "/images/valorant.svg",
    unit: "VP",
    denominations: [
      { id: "val-475", amount: 475, priceUSD: 4.99 },
      { id: "val-950", amount: 950, priceUSD: 9.49, best: true },
      { id: "val-1900", amount: 1900, priceUSD: 18.99 },
      { id: "val-3325", amount: 3325, priceUSD: 32.99 },
    ],
  },
  {
    slug: "league-of-legends",
    name: "League of Legends",
    short: "Riot Points for champs, skins, and events.",
    image: "/images/lol.svg",
    unit: "RP",
    denominations: [
      { id: "lol-650", amount: 650, priceUSD: 4.99 },
      { id: "lol-1380", amount: 1380, priceUSD: 9.99, best: true },
      { id: "lol-2800", amount: 2800, priceUSD: 19.99 },
      { id: "lol-5000", amount: 5000, priceUSD: 34.99 },
    ],
  },
  {
    slug: "cs2",
    name: "CS2",
    short: "Steam Wallet balance for cases, skins and items.",
    image: "/images/cs2.svg",
    unit: "$",
    denominations: [
      { id: "cs2-5", amount: 5, priceUSD: 5.00 },
      { id: "cs2-10", amount: 10, priceUSD: 10.00, best: true },
      { id: "cs2-25", amount: 25, priceUSD: 25.00 },
      { id: "cs2-50", amount: 50, priceUSD: 50.00 },
    ],
  },
  {
    slug: "marvel-rivals",
    name: "Marvel Rivals",
    short: "Coins for heroes, skins and battle pass.",
    image: "/images/marvel-rivals.svg",
    unit: "Coins",
    denominations: [
      { id: "mr-500", amount: 500, priceUSD: 4.99 },
      { id: "mr-1200", amount: 1200, priceUSD: 10.99, best: true },
      { id: "mr-2500", amount: 2500, priceUSD: 21.99 },
      { id: "mr-5200", amount: 5200, priceUSD: 43.99 },
    ],
  },
  {
    slug: "mobile-legends",
    name: "Mobile Legends",
    short: "Diamonds for heroes, skins, and starlight.",
    image: "/images/mobile-legends.svg",
    unit: "Diamonds",
    denominations: [
      { id: "ml-86", amount: 86, priceUSD: 1.99 },
      { id: "ml-172", amount: 172, priceUSD: 3.79, best: true },
      { id: "ml-257", amount: 257, priceUSD: 5.59 },
      { id: "ml-706", amount: 706, priceUSD: 14.99 },
    ],
  },
  {
    slug: "pubg",
    name: "PUBG",
    short: "UC for crates, skins and royale pass.",
    image: "/images/pubg.svg",
    unit: "UC",
    denominations: [
      { id: "pubg-60", amount: 60, priceUSD: 0.99 },
      { id: "pubg-325", amount: 325, priceUSD: 4.99, best: true },
      { id: "pubg-660", amount: 660, priceUSD: 9.99 },
      { id: "pubg-1800", amount: 1800, priceUSD: 24.99 },
    ],
  },
  {
    slug: "fortnite",
    name: "Fortnite",
    short: "V-Bucks for the shop, pass and bundles.",
    image: "/images/fortnite.svg",
    unit: "V-Bucks",
    denominations: [
      { id: "fn-1000", amount: 1000, priceUSD: 7.99 },
      { id: "fn-2800", amount: 2800, priceUSD: 19.99, best: true },
      { id: "fn-5000", amount: 5000, priceUSD: 31.99 },
      { id: "fn-13500", amount: 13500, priceUSD: 79.99 },
    ],
  },
];

export function getGame(slug: string) {
  return games.find((g) => g.slug === slug);
}
