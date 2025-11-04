import { ShoppingCart, Gamepad2, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b-4 border-black shadow-[8px_8px_0_0_#000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-500 text-white border-4 border-black shadow-[6px_6px_0_0_#000]">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <span className="font-black tracking-tight text-xl sm:text-2xl text-blue-600">
            BlueBazaar
          </span>
        </div>

        <div className="hidden md:flex items-center gap-2 flex-1 max-w-xl mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Roblox items, skins, passes..."
              className="w-full rounded-none border-4 border-black px-4 py-2 focus:outline-none focus:ring-0 shadow-[6px_6px_0_0_#000]"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-600" />
          </div>
        </div>

        <nav className="flex items-center gap-3">
          <a href="#products" className="px-3 py-2 border-4 border-black bg-blue-100 text-blue-700 font-semibold shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
            Shop
          </a>
          <button className="relative px-3 py-2 border-4 border-black bg-blue-500 text-white font-extrabold shadow-[6px_6px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform">
            <ShoppingCart className="inline w-5 h-5 mr-2" />
            Cart
            <span className="absolute -top-3 -right-3 bg-yellow-300 border-4 border-black text-black text-xs font-black px-2 py-1 shadow-[4px_4px_0_0_#000]">
              0
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}
