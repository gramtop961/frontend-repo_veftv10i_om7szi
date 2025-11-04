import { Star, Plus } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Limited Fedora",
    desc: "OG classic with clean style.",
    price: 19.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1200&auto=format&fit=crop",
    tag: "Limited",
  },
  {
    id: 2,
    title: "Game Pass x2 Coins",
    desc: "Double your grind speed.",
    price: 4.99,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=1200&auto=format&fit=crop",
    tag: "Boost",
  },
  {
    id: 3,
    title: "Lightning Sword Skin",
    desc: "Crisp effect and glow.",
    price: 3.99,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop",
    tag: "Skin",
  },
  {
    id: 4,
    title: "Rare Pet – ByteFox",
    desc: "Adorable and powerful companion.",
    price: 14.99,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop",
    tag: "Pet",
  },
];

function ProductCard({ item }) {
  return (
    <div className="group border-4 border-black bg-white shadow-[10px_10px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="h-48 w-full object-cover border-b-4 border-black"
        />
        <span className="absolute left-3 top-3 bg-yellow-300 border-4 border-black text-xs font-black px-2 py-1 shadow-[4px_4px_0_0_#000]">
          {item.tag}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-black text-blue-900">{item.title}</h3>
        <p className="text-blue-900/80 text-sm font-semibold">{item.desc}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="flex items-center gap-1 text-yellow-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.round(item.rating) ? "fill-yellow-400" : ""}`}
              />
            ))}
            <span className="ml-2 text-xs font-bold text-blue-900/70">{item.rating}</span>
          </div>
          <span className="text-xl font-black text-blue-800">${item.price.toFixed(2)}</span>
        </div>
        <button className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 border-4 border-black bg-blue-500 text-white font-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
          <Plus className="w-5 h-5" />
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default function ProductsGrid() {
  return (
    <section id="products" className="bg-blue-50 border-y-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-blue-900 drop-shadow-[6px_6px_0_#93c5fd]">
              Featured Items
            </h2>
            <p className="text-blue-900/80 font-semibold">
              Hand‑picked Roblox goodies from verified sellers.
            </p>
          </div>
          <a href="#" className="hidden sm:inline-flex px-4 py-2 border-4 border-black bg-white text-blue-700 font-black shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
            View all
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} item={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
