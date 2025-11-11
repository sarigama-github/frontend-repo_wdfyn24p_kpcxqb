import { Star, Wine, BadgeCheck } from "lucide-react";

const products = [
  { id: 1, name: "Nebula Noir 2077", badge: "Limited", rating: 4.9, price: 189, color: "from-fuchsia-500 to-indigo-600" },
  { id: 2, name: "Aurora Rosé X", badge: "New", rating: 4.8, price: 129, color: "from-sky-500 to-cyan-500" },
  { id: 3, name: "Quantum Merlot ∞", badge: "Awarded", rating: 5.0, price: 249, color: "from-violet-500 to-purple-600" },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Bestsellers</h2>
            <p className="text-white/70 mt-2">Community favorites — limited drops sell out fast.</p>
          </div>
          <a href="#" className="text-fuchsia-400 hover:text-fuchsia-300">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden backdrop-blur-md">
              <div className={`h-40 bg-gradient-to-br ${p.color}`} />
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-2 py-1">
                    <BadgeCheck className="h-3 w-3" /> {p.badge}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{p.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? 'fill-amber-400' : 'opacity-30'}`} />
                  ))}
                  <span className="ml-2 text-sm text-white/70">{p.rating.toFixed(1)}</span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-white font-semibold text-lg">${p.price}</span>
                  <button className="inline-flex items-center gap-2 rounded-full bg-fuchsia-500/90 hover:bg-fuchsia-500 text-white px-4 py-2 text-sm transition">
                    <Wine className="h-4 w-4" /> Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
