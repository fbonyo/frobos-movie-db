import React from "react";
import { motion } from "framer-motion";

export default function FeaturedBanner({ movie }) {
  if (!movie) return null;

  const bannerImg = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "/placeholder.png";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full h-[60vh] sm:h-[70vh] rounded-3xl overflow-hidden mt-6 mb-10"
    >
      {/* Background Image */}
      <img
        src={bannerImg}
        alt={movie.title}
        className="w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute bottom-10 left-10 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
          {movie.title}
        </h1>

        <p className="mt-4 text-white/80 text-sm sm:text-base line-clamp-3 max-w-xl">
          {movie.overview}
        </p>

        <button
          className="
            mt-6 px-6 py-3 rounded-xl 
            bg-white text-black font-medium 
            text-sm sm:text-base 
            hover:bg-white/90 transition
            shadow-lg
          "
        >
          Watch Now
        </button>
      </div>
    </motion.div>
  );
}

