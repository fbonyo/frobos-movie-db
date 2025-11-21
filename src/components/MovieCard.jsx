import React from "react";
import { motion } from "framer-motion";

// Modern, minimal MovieCard — soft dark Apple-like design
export default function MovieCard({ movie, onClick = () => {} }) {
  if (!movie) return null;

  const title = movie.title || movie.Title || "Untitled";
  const year = movie.release_date?.slice(0, 4) || movie.Year || "";
  const rating = movie.vote_average || movie.imdbRating || null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : movie.Poster && movie.Poster !== "N/A"
    ? movie.Poster
    : "/placeholder.png";

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group w-48 sm:w-52 flex-shrink-0 rounded-2xl overflow-hidden focus:outline-none"
      aria-label={`Open details for ${title}`}
    >
      <div className="relative">
        <img
          src={poster}
          alt={title}
          loading="lazy"
          className="w-full h-64 object-cover rounded-t-2xl shadow-lg"
        />

        {/* year badge */}
        {year && (
          <div className="absolute left-3 bottom-3 px-2 py-1 rounded-full bg-white/10 backdrop-blur text-xs text-white">
            {year}
          </div>
        )}

        {/* rating badge */}
        {rating && (
          <div className="absolute right-3 top-3 px-2 py-1 rounded-full bg-black/60 text-xs text-white">
            {Number(rating).toFixed(1)} ⭐
          </div>
        )}
      </div>

      <div className="p-3 text-left">
        <h3 className="text-sm sm:text-base font-medium text-white truncate">
          {title}
        </h3>

        <p className="text-xs text-white/60">
          {movie.genre ||
            movie.genres?.slice(0, 2).map((g) => g.name).join(", ") ||
            movie.original_language?.toUpperCase() ||
            ""}
        </p>
      </div>
    </motion.button>
  );
}











