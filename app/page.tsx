"use client";

import ProductCard from "@/components/ProductCard";
import { games } from "@/data/games";
import { useSearchParams } from "next/navigation";

export default function HomePage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("search")?.toLowerCase() || "";

  const filtered = q
    ? games.filter((g) => g.name.toLowerCase().includes(q))
    : games;

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="relative rounded-3xl bg-gradient-to-br          from-gray-900 via-gray-800 to-black text-white p-10 md:p-16 overflow-hidden">
        <div className="max-w-3xl relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-yellow-400">
            Top up your favorite games instantly
          </h1>
          <p className="mt-4 text-gray-300 text-lg">
            Buy trusted in-game currencies for all major titles — Valorant, League, PUBG, Fortnite, and more.
          </p>
          <div className="mt-6 flex gap-4">
            <a href="#popular" className="btn btn-primary">Shop Now</a>
            <a href="/offers" className="btn btn-outline">View Offers</a>
          </div>
        </div>

        {/* Fancy blurred glow instead of grid */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-400/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-purple-500/10 blur-3xl rounded-full" />
        </div>
      </section>  


      {/* Search Results / Popular */}
      <section id="popular">
        <h2 className="text-2xl font-semibold mb-6 text-yellow-400">
          {q ? `Search results for "${q}"` : "Popular Games"}
        </h2>
        {filtered.length === 0 ? (
          <p className="text-gray-400">No games found.</p>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filtered.map((game) => (
              <ProductCard key={game.slug} game={game} />
            ))}
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-yellow-400">Why Choose GameCoins?</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <div className="card"><h3 className="font-semibold mb-1">Instant Delivery</h3><p className="text-sm text-gray-400">Get your top-ups instantly after payment.</p></div>
          <div className="card"><h3 className="font-semibold mb-1">Secure Checkout</h3><p className="text-sm text-gray-400">SSL-protected checkout for worry-free purchases.</p></div>
          <div className="card"><h3 className="font-semibold mb-1">Best Prices</h3><p className="text-sm text-gray-400">Competitive USD pricing across all titles.</p></div>
          <div className="card"><h3 className="font-semibold mb-1">24/7 Support</h3><p className="text-sm text-gray-400">We’re here anytime you need help.</p></div>
        </div>
      </section>

      {/* Offers Preview */}
      <section className="bg-gray-900 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-yellow-400 mb-3">Exclusive Offers 🎁</h2>
        <p className="text-gray-400 mb-4">Save up to 25% on bundles and seasonal events.</p>
        <a href="/offers" className="btn btn-primary">Explore Offers</a>
      </section>
    </div>
  );
}
