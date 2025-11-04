import { Sparkles, ShieldCheck, Rocket } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-blue-50 border-b-4 border-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,#dbeafe,transparent_40%),radial-gradient(circle_at_80%_30%,#bfdbfe,transparent_40%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 items-center gap-10 relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border-4 border-black bg-white shadow-[6px_6px_0_0_#000] mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-bold uppercase tracking-wide text-blue-700">
                Neo‑Brutalist Gaming Market
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] text-blue-900 drop-shadow-[6px_6px_0_#93c5fd]">
              Buy Roblox Items with Style
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-900/80 max-w-prose font-semibold">
              Secure, instant delivery of limiteds, game passes, and in‑game boosts. Powered by safe trades and verified sellers.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#products" className="px-6 py-3 border-4 border-black bg-blue-500 text-white font-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
                Shop Featured
              </a>
              <a href="#how" className="px-6 py-3 border-4 border-black bg-white text-blue-700 font-black shadow-[8px_8px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
                How it works
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-blue-900">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5" />
                <span className="font-bold">Buyer Protection</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span className="font-bold">Instant Delivery</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full border-4 border-black bg-white shadow-[16px_16px_0_0_#000] p-4 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 w-full">
                {[
                  { name: "Limited Fedora", price: 19.99, img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop" },
                  { name: "Game Pass X2", price: 4.99, img: "https://images.unsplash.com/photo-1605901309584-818e25960a8b?q=80&w=800&auto=format&fit=crop" },
                  { name: "Boost Potion", price: 2.49, img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop" },
                  { name: "Sword Skin", price: 3.99, img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop" },
                  { name: "Avatar Bundle", price: 9.99, img: "https://images.unsplash.com/photo-1542759564-915f2a7e8b51?q=80&w=800&auto=format&fit=crop" },
                  { name: "Rare Pet", price: 14.99, img: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800&auto=format&fit=crop" },
                ].map((item) => (
                  <div key={item.name} className="border-4 border-black bg-blue-100 shadow-[8px_8px_0_0_#000]">
                    <img src={item.img} alt={item.name} className="h-24 w-full object-cover border-b-4 border-black" />
                    <div className="p-2">
                      <p className="font-extrabold text-blue-900 text-sm leading-tight">{item.name}</p>
                      <p className="text-xs font-black text-blue-700">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
