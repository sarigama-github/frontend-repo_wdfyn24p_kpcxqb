import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-fuchsia-600/20 via-indigo-600/20 to-sky-500/20 p-8 sm:p-12">
          <div className="absolute -inset-1 rounded-3xl opacity-30 bg-[radial-gradient(600px_200px_at_10%_10%,rgba(217,70,239,0.35),transparent),radial-gradient(400px_160px_at_90%_80%,rgba(14,165,233,0.35),transparent)]" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Join the Cellar Club</h3>
            <p className="mt-2 max-w-2xl text-white/80">Members get early access to drops, private tastings, and tailored recommendations powered by flavor AI.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <input placeholder="Enter your email" className="w-full sm:w-80 px-4 py-3 rounded-full bg-black/40 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition">
                Get invites <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
