
import "./../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata: Metadata = {
  title: "GameCoins — Buy In‑Game Currencies",
  description: "Buy VP, RP, V‑Bucks, UC and more — instant digital delivery demo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <CartDrawer />
        <main className="container pt-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
