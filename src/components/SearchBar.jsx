import React from "react";
import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="w-full flex justify-center mt-6 mb-10 px-4">
      <div className="relative w-full max-w-xl">
        {/* Search Icon */}
        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
        />

        {/* Input */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search movies..."
          className="
            w-full py-3 pl-12 pr-12
            bg-white/10 
            text-white
            rounded-2xl 
            backdrop-blur 
            outline-none 
            placeholder:text-white/50
            transition 
            focus:ring-2 
            focus:ring-white/30 
            focus:bg-white/15
          "
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={onClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
          >
            <X size={18} />
          </button>
        )}
      </div>
    </div>
  );
}



