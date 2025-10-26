
"use client";

import { useCart } from "@/lib/store";
import type { Game, Denomination } from "@/data/games";

export default function AddButton({ game, denom }: { game: Game, denom: Denomination }) {
  const { addItem } = useCart();
  return (
    <button
      className="btn btn-primary"
      onClick={() => addItem({
        game: game.name,
        slug: game.slug,
        image: game.image,
        amount: denom.amount,
        priceUSD: denom.priceUSD,
      })}
    >
      Add
    </button>
  );
}
