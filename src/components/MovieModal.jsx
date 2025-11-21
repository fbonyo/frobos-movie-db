import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function MovieModal({ movie, onClose }) {
  if (!movie) return null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : movie.Poster || "/placeholder.png";

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="
            bg-[#1a1a1a] text-white rounded-3xl 
            max-w-lg w-full p-6 relative shadow-2xl
          "
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white"
          >
            <X size={24} />
          </button>

          {/* Poster */}
          <img
            src={poster}
            alt={movie.title}
            className="w-full h-80 object-cover rounded-2xl mb-4"
          />

          {/* Title */}
          <h1 className="text-2xl font-semibold mb-2">{movie.title}</h1>

          {/* Year + Rating */}
          <div className="flex items-center gap-3 mb-4 text-white/70">
            {movie.release_date && (
              <span>{movie.release_date.slice(0, 4)}</span>
            )}

            {movie.vote_average && (
              <span className="px-2 py-1 rounded-lg bg-white/10 text-sm">
                ⭐ {movie.vote_average.toFixed(1)}
              </span>
            )}
          </div>

          {/* Overview */}
          <p className="text-white/80 leading-relaxed text-sm">
            {movie.overview || "No description available."}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}


