"use client";

import Link from "next/link";

export default function OffersPage() {
  const offers = [
    {
      slug: "valorant",
      title: "Valorant Bonus VP Pack",
      desc: "Get +10% VP with every purchase over $20.",
      img: "/images/valorant.svg",
    },
    {
      slug: "pubg",
      title: "PUBG Autumn Crate Sale",
      desc: "Save 15% on UC bundles above 1000 units.",
      img: "/images/pubg.svg",
    },
    {
      slug: "fortnite",
      title: "Fortnite Mega Bundle",
      desc: "Get 2800 V-Bucks + exclusive skin — $17.99 only!",
      img: "/images/fortnite.svg",
    },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">Current Offers & Discounts</h1>
      <p className="text-gray-400">These promotions refresh every week.</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Link
            key={offer.slug}
            href={`/games/${offer.slug}`}
            className="card text-center hover:border-yellow-400 hover:shadow-lg transition"
          >
            <img
              src={offer.img}
              className="w-full h-40 object-contain mb-3"
              alt={offer.title}
            />
            <h3 className="font-semibold text-yellow-300 mb-1">{offer.title}</h3>
            <p className="text-sm text-gray-400">{offer.desc}</p>
            <p className="mt-2 text-xs text-yellow-400">Click to view game →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
