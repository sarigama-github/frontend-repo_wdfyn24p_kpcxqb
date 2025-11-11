import { Menu, ShoppingCart, Wine, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl/80 bg-black/30 border-b border-white/10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Wine className="h-6 w-6 text-fuchsia-400" />
          <span className="text-white font-semibold tracking-wide">NovaVines</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#collections" className="text-sm text-white/80 hover:text-white transition">Collections</a>
          <a href="#features" className="text-sm text-white/80 hover:text-white transition">Why Us</a>
          <a href="#showcase" className="text-sm text-white/80 hover:text-white transition">Bestsellers</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:flex items-center gap-2 px-3 py-2 text-sm rounded-full bg-white/5 hover:bg-white/10 text-white/80 transition border border-white/10">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </button>
          <button className="relative p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 transition">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-fuchsia-500 text-white rounded-full px-1.5 py-0.5 border border-white/20">2</span>
          </button>
          <button className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
