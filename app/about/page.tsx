export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-yellow-400">About GameCoins</h1>
      <p className="text-gray-300 leading-relaxed">
        GameCoins is a digital storefront designed for gamers. We simplify the process of
        purchasing in-game currencies for the world’s top titles — all in one secure, elegant interface.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Built using Next.js, Tailwind CSS, and modern frontend patterns, this project demonstrates
        responsive design, state management, and user experience best practices — perfect for portfolio showcase.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <img src="/images/valorant.svg" alt="Valorant" />
        <img src="/images/pubg.svg" alt="PUBG" />
        <img src="/images/fortnite.svg" alt="Fortnite" />
      </div>
    </div>
  );
}
