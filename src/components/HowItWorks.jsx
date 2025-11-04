import { ShieldCheck, BadgeCheck, Zap, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: Zap,
    title: "Pick your item",
    text: "Browse boosts, skins, passes, and limiteds from top sellers.",
    color: "bg-blue-200",
  },
  {
    icon: BadgeCheck,
    title: "Verify & pay",
    text: "We lock trades with escrow and multiple payment methods.",
    color: "bg-blue-300",
  },
  {
    icon: ShieldCheck,
    title: "Protected trade",
    text: "Your order is protected end‑to‑end until you confirm delivery.",
    color: "bg-blue-200",
  },
  {
    icon: PackageCheck,
    title: "Instant delivery",
    text: "Receive your item in minutes with auto‑delivery bots.",
    color: "bg-blue-300",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-black text-blue-900 drop-shadow-[6px_6px_0_#93c5fd] mb-10">
          How it works
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`border-4 border-black ${s.color} p-6 shadow-[10px_10px_0_0_#000] hover:translate-x-1 hover:translate-y-1 transition-transform`}
            >
              <div className="p-3 bg-white border-4 border-black inline-flex shadow-[6px_6px_0_0_#000] mb-4 text-blue-700">
                <s.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-blue-900 mb-1">{s.title}</h3>
              <p className="text-blue-900/80 font-semibold text-sm">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
