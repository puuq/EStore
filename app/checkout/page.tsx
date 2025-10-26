
"use client";

import { useCart } from "@/lib/store";
import { formatUSD, uid } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const tax = +(total * 0.07).toFixed(2);
  const grand = +(total + tax).toFixed(2);

  function simulatePayment() {
    setLoading(true);
    const orderId = uid("order");
    setTimeout(() => {
      clear();
      router.push(`/success?order=${orderId}&amount=${grand}`);
    }, 1000);
  }

  if (items.length === 0) {
    return <p className="text-gray-600">Your cart is empty. Add items to proceed.</p>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Checkout</h1>
        <div className="card space-y-3">
          {items.map((it, idx) => (
            <div key={idx} className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img src={it.image} className="w-12 h-12 object-contain" alt={it.game} />
                <div>
                  <div className="text-sm font-medium">{it.game}</div>
                  <div className="text-xs text-gray-600">{it.amount} units</div>
                </div>
              </div>
              <div className="text-sm">{formatUSD(it.priceUSD)} x {it.qty}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="card space-y-2">
          <div className="flex items-center justify-between text-sm"><span>Subtotal</span><span>{formatUSD(total)}</span></div>
          <div className="flex items-center justify-between text-sm"><span>Tax (7%)</span><span>{formatUSD(tax)}</span></div>
          <div className="flex items-center justify-between font-semibold"><span>Total</span><span>{formatUSD(grand)}</span></div>
          <button disabled={loading} onClick={simulatePayment} className="btn btn-primary w-full mt-2">
            {loading ? "Processing..." : "Pay Now"}
          </button>
          <button onClick={() => router.push("/cancel")} className="btn btn-outline w-full">Cancel</button>
        </div>
      </div>
    </div>
  );
}
