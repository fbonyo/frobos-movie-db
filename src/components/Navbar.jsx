import React from "react";
import { Search } from "lucide-react";

export default function Navbar({ onSearchToggle = () => {} }) {
  return (
    <nav
      className="
        sticky top-0 z-40
        w-full 
        backdrop-blur 
        bg-black/20 
        border-b border-white/5
        flex items-center justify-between
        px-6 py-4
      "
    >
      {/* Brand / Logo */}
      <h1 className="text-xl font-semibold tracking-tight text-white">
        Frobo<span className="text-white/60">Movies</span>
      </h1>

      {/* Search Button */}
      <button
        onClick={onSearchToggle}
        className="
          p-2 rounded-xl 
          bg-white/10 hover:bg-white/20 
          transition 
          text-white
        "
      >
        <Search size={20} />
      </button>
    </nav>
  );
}
