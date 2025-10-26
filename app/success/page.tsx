
import { formatUSD } from "@/lib/utils";

export default function SuccessPage({ searchParams }: { searchParams: { order?: string, amount?: string }}) {
  const { order, amount } = searchParams;
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="card">
        <h1 className="text-2xl font-bold">Payment Successful 🎉</h1>
        <p className="mt-2 text-gray-600">Thank you! Your order has been processed.</p>
        <div className="mt-4 text-left text-sm space-y-1">
          <div><span className="font-medium">Order ID:</span> {order ?? "—"}</div>
          <div><span className="font-medium">Amount:</span> {amount ? formatUSD(Number(amount)) : "—"}</div>
          <div><span className="font-medium">Delivery:</span> Instant digital fulfillment (demo)</div>
        </div>
        <a href="/" className="btn btn-primary mt-4">Back to Home</a>
      </div>
    </div>
  );
}
