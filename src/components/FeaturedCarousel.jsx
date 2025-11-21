import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedCarousel({ movies = [] }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (!rowRef.current) return;
    const scrollAmount = 500;

    rowRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative my-10">

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4 px-2">Featured Movies</h2>

      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                   bg-black/40 hover:bg-black/60 p-4 rounded-full backdrop-blur text-white"
      >
        <ChevronLeft size={26} />
      </button>

      {/* Scroll List */}
      <div
        ref={rowRef}
        className="flex overflow-x-auto gap-6 px-2 no-scrollbar scroll-smooth"
      >
        {movies.slice(0, 5).map((movie) => {
          const poster = movie.backdrop_path
            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            : movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "/placeholder.png";

          return (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.03 }}
              className="min-w-[70%] sm:min-w-[50%] md:min-w-[40%] lg:min-w-[30%] 
                         bg-[#1d1d1d] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={poster}
                className="w-full h-56 object-cover"
              />

              <div className="p-4">
                <h3 className="text-lg font-semibold">{movie.title}</h3>
                <p className="text-white/70 text-sm mt-2 line-clamp-2">
                  {movie.overview}
                </p>

                <button className="mt-3 px-4 py-2 bg-white/10 rounded-xl text-sm hover:bg-white/20">
                  Watch Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                   bg-black/40 hover:bg-black/60 p-4 rounded-full backdrop-blur text-white"
      >
        <ChevronRight size={26} />
      </button>
    </div>
  );
}
