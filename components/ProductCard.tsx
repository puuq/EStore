import Link from "next/link";
import { Game } from "@/data/games";
import { formatUSD } from "@/lib/utils";

export default function ProductCard({ game }: { game: Game }) {
  const best = game.denominations.find((d) => d.best); // only if explicitly set

  return (
    <div className="card group hover:border-yellow-400 transition-all hover:shadow-yellow-400/10 hover:shadow-lg">
      <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gray-800">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-contain p-6 transition-transform duration-300 group-hover:scale-105"
        />
        {/* Show Popular badge only if this specific game has 'best' set */}
        {best ? (
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow">
            Popular
          </div>
        ) : null}
      </div>

      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-yellow-300">{game.name}</h3>
        <p className="text-sm text-gray-400 line-clamp-2">{game.short}</p>

        {best && (
          <div className="text-sm text-gray-300">
            <span className="font-medium">{best.amount} {game.unit}</span> · {formatUSD(best.priceUSD)}
          </div>
        )}

        <Link
          href={`/games/${game.slug}`}
          className="btn btn-primary mt-4 w-full"
        >
          View Options
        </Link>
      </div>
    </div>
  );
}
