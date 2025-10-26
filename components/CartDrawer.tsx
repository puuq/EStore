
"use client";

import { useCart } from "@/lib/store";
import Link from "next/link";
import { formatUSD } from "@/lib/utils";

export default function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, total, totalItems } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? "" : "pointer-events-none"}`}>
      <div className={`absolute inset-0 bg-black/30 transition ${isOpen ? "opacity-100" : "opacity-0"}`} onClick={closeCart} />
      <aside className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="text-lg font-semibold">Your Cart ({totalItems})</h2>
          <button className="btn btn-outline" onClick={closeCart}>Close</button>
        </div>
        <div className="p-4 space-y-4 overflow-auto h-[calc(100%-8rem)]">
          {items.length === 0 && <p className="text-sm text-gray-600">Your cart is empty.</p>}
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center gap-3 border rounded-xl p-3">
              <img src={it.image} alt={it.game} className="w-16 h-16 object-contain" />
              <div className="flex-1">
                <div className="text-sm font-medium">{it.game}</div>
                <div className="text-xs text-gray-600">{it.amount} units</div>
                <div className="text-sm">{formatUSD(it.priceUSD)} x {it.qty}</div>
              </div>
              <button className="text-xs underline text-red-600" onClick={() => removeItem(idx)}>Remove</button>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span>Subtotal</span><span>{formatUSD(total)}</span>
          </div>
          <Link href="/checkout" onClick={closeCart} className={`btn btn-primary w-full mt-3 ${items.length===0?"pointer-events-none opacity-60":""}`}>Go to Checkout</Link>
        </div>
      </aside>
    </div>
  );
}
