import React from "react";
import { motion } from "framer-motion";

export default function FeaturedShowcase({ movies = [] }) {
  if (!movies.length) return null;

  return (
    <div className="my-12">
      <h2 className="text-3xl font-semibold mb-6 px-2">Featured</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
        {movies.slice(0, 5).map((movie, index) => {
          const backdrop = movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : movie.poster_path
            ? `https://image.tmdb.org/t/p/w780${movie.poster_path}`
            : "/placeholder.png";

          return (
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="
                relative rounded-3xl overflow-hidden 
                shadow-xl cursor-pointer group
              "
            >
              {/* BACKGROUND IMAGE */}
              <img
                src={backdrop}
                className="w-full h-64 object-cover group-hover:brightness-[0.75] transition"
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* TEXT OVERLAY */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-xl font-bold">{movie.title}</h3>

                <p className="text-white/80 text-sm mt-1 line-clamp-2">
                  {movie.overview}
                </p>

                <button
                  className="
                    mt-3 px-4 py-2 bg-white/20 backdrop-blur rounded-xl 
                    text-sm hover:bg-white/30 transition
                  "
                >
                  Watch Now
                </button>
              </div>

              {/* FLOATING DECORATIVE LIGHT / APPLE STYLE */}
              <div className="
                absolute -top-10 -right-10 w-32 h-32 
                bg-white/10 rounded-full blur-3xl opacity-0 
                group-hover:opacity-40 transition
              "></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
