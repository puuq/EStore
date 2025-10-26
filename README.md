
# Game Currency Store (Next.js + Tailwind)

A fully working **frontend** e‑commerce site to sell in‑game currencies (Valorant, League of Legends, CS2, Marvel Rivals, Mobile Legends, PUBG, Fortnite, etc.).
It showcases modern frontend practices (Next.js App Router, TypeScript, Tailwind, Zustand store, dynamic routes, and a mock checkout with redirects).

## Tech
- Next.js (App Router) + React 18 + TypeScript
- Tailwind CSS
- Zustand for cart state
- File‑based data model
- Fully client-side mock checkout (no payment gateway), with success/cancel redirects

## Getting Started

```bash
# 1) Install deps
npm install

# 2) Run dev
npm run dev

# 3) Open
http://localhost:3000
```

## Build & Run
```bash
npm run build
npm start
```

## Project Highlights
- Catalog of popular games with USD pricing tiers.
- Game detail page with denominations and Add to Cart.
- Cart drawer with quantity edit / remove.
- Checkout page that computes totals + tax, and **Pay Now** triggers a simulated payment and redirects to `/success` with an order id.
- SEO‑friendly routes and metadata.
- Minimal assets included under `/public/images` (SVG banners). Replace with your own images when publishing your portfolio.

## Notes
- This is a frontend‑only demo. Replace `simulatePayment()` with a real payment provider (Stripe, etc.) if you want live charges.
- Prices are hard‑coded for demo. Update `/data/games.ts` to change products.
- If you want **shadcn/ui**, you can add it later using their CLI. The code uses Tailwind utilities, so drop-in is easy.
