
export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-8 text-sm text-gray-600 flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-between">
        <p>© {new Date().getFullYear()} GameCoins. All rights reserved.</p>
        <p className="text-xs">Demo portfolio project · Not affiliated with Riot, Valve, Epic or others.</p>
      </div>
    </footer>
  );
}
