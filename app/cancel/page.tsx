
export default function CancelPage() {
  return (
    <div className="max-w-lg mx-auto text-center">
      <div className="card">
        <h1 className="text-2xl font-bold">Payment Cancelled</h1>
        <p className="mt-2 text-gray-600">Your payment was cancelled. You can continue shopping anytime.</p>
        <a href="/" className="btn btn-primary mt-4">Back to Home</a>
      </div>
    </div>
  );
}
