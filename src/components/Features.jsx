import { Sparkles, ShieldCheck, PackageOpen } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Curated Cosmic Selection",
    desc: "Handpicked vintages and bold blends with tasting notes that travel beyond time and terroir.",
  },
  {
    icon: ShieldCheck,
    title: "Authenticity Guaranteed",
    desc: "Sourced from trusted vineyards and verified cellars. Every bottle is traceable and certified.",
  },
  {
    icon: PackageOpen,
    title: "Insured Express Delivery",
    desc: "Advanced packaging and climate control ensure your bottles arrive in pristine condition.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(217,70,239,0.15),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_40%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Why Choose NovaVines</h2>
          <p className="mt-3 text-white/70 max-w-2xl mx-auto">
            We blend heritage and high-tech to bring you a seamless, premium wine discovery experience.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md hover:bg-white/10 transition">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-fuchsia-500 to-indigo-500 flex items-center justify-center text-white shadow-lg shadow-fuchsia-500/20">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
