
import { getGame } from "@/data/games";
import { notFound } from "next/navigation";
import { formatUSD } from "@/lib/utils";
import AddButton from "./purchase-button";

export default function GamePage({ params }: { params: { slug: string } }) {
  const game = getGame(params.slug);
  if (!game) return notFound();

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="card">
        <img src={game.image} alt={game.name} className="w-full h-auto object-contain" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{game.name}</h1>
        <p className="text-gray-600 mt-1">{game.short}</p>

        <div className="mt-6 grid gap-3">
          {game.denominations.map((d) => (
            <div key={d.id} className="flex items-center justify-between border rounded-xl p-3">
              <div>
                <div className="font-medium">
                  {d.amount} {game.unit}
                </div>
                {d.best && <div className="badge mt-1">Best Value</div>}
              </div>
              <div className="flex items-center gap-3">
                <div className="font-semibold">{formatUSD(d.priceUSD)}</div>
                <AddButton game={game} denom={d} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
