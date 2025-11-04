import { Gamepad2, Twitter, Youtube, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-blue-50 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500 text-white border-4 border-black shadow-[6px_6px_0_0_#000]">
                <Gamepad2 className="w-6 h-6" />
              </div>
              <span className="font-black tracking-tight text-2xl">BlueBazaar</span>
            </div>
            <p className="mt-4 text-blue-100/90 font-semibold">
              A neo‑brutalist marketplace for Roblox items. Safe, fast, stylish.
            </p>
          </div>
          <div>
            <h4 className="font-black text-xl mb-3">Marketplace</h4>
            <ul className="space-y-2 text-blue-100/90 font-semibold">
              <li><a href="#products" className="hover:underline">Featured</a></li>
              <li><a href="#" className="hover:underline">All items</a></li>
              <li><a href="#" className="hover:underline">Sellers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xl mb-3">Support</h4>
            <ul className="space-y-2 text-blue-100/90 font-semibold">
              <li><a href="#how" className="hover:underline">How it works</a></li>
              <li><a href="#" className="hover:underline">Buyer protection</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-xl mb-3">Stay in the loop</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-white text-blue-700 border-4 border-black font-black shadow-[6px_6px_0_0_#000]">
                <Twitter className="w-4 h-4" /> Twitter
              </a>
              <a href="#" className="inline-flex items-center gap-2 px-3 py-2 bg-white text-blue-700 border-4 border-black font-black shadow-[6px_6px_0_0_#000]">
                <Youtube className="w-4 h-4" /> YouTube
              </a>
            </div>
            <p className="mt-4 inline-flex items-center gap-2 text-blue-100/90 font-semibold">
              <Shield className="w-4 h-4" /> Protected transactions
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/20 pt-6">
          <p className="text-sm text-blue-100/80 font-semibold">© {new Date().getFullYear()} BlueBazaar. Not affiliated with Roblox Corporation.</p>
          <div className="flex items-center gap-4 text-sm text-blue-100/80 font-semibold">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
