"use client";

import Link from "next/link";
import { useCart } from "@/lib/store";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const { openCart, totalItems } = useCart();
  const pathname = usePathname();
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) router.push(`/?search=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header className="border-b border-gray-800 bg-gray-900 sticky top-0 z-40">
      <div className="container flex flex-col md:flex-row md:items-center justify-between py-4 gap-3">
        <Link href="/" className="text-2xl font-extrabold tracking-tight text-yellow-400">
          E<span className="text-white">Store</span>
        </Link>

        <form onSubmit={handleSearch} className="flex-1 max-w-md">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games..."
            className="input w-full"
          />
        </form>

        <nav className="flex gap-5 text-sm">
          <Link href="/" className={pathname === "/" ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"}>Home</Link>
          <Link href="/about" className={pathname === "/about" ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"}>About</Link>
          <Link href="/offers" className={pathname === "/offers" ? "text-yellow-400 font-semibold" : "hover:text-yellow-300"}>Offers</Link>
          <button onClick={openCart} className="btn btn-outline">
            Cart <span className="ml-2 badge">{totalItems}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
