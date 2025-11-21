import React, { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturedPremium({ movies = [], onMovieClick = () => {} }) {
  const sliderRef = useRef(null);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      sliderRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const amount = 400;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-12 relative">

      {/* TITLE */}
      <div className="flex items-center justify-between px-3 mb-4">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <span className="text-pink-400">🔥</span> Featured
        </h2>

        <button className="text-sm bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20 transition">
          View All ↗
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute -left-1 top-1/2 -translate-y-1/2 z-30 
                   bg-black/40 hover:bg-black/60 p-4 rounded-full text-white backdrop-blur"
      >
        <ChevronLeft size={22} />
      </button>

      {/* Slider */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-6 px-3 pb-4 no-scrollbar scroll-smooth snap-x snap-mandatory"
      >
        {movies.slice(0, 10).map((movie, idx) => {
          const poster = movie.backdrop_path
            ? `https://image.tmdb.org/t/p/w780${movie.backdrop_path}`
            : `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

          return (
            <motion.div
              key={movie.id}
              whileHover={{ scale: 1.05, rotateY: 3 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}

              // MAKE CLICKABLE
              onClick={() => onMovieClick(movie)}

              className="
                min-w-[300px] snap-start rounded-3xl overflow-hidden relative
                shadow-xl cursor-pointer bg-[#151515] group
              "
            >
              {/* Poster */}
              <img
                src={poster}
                className="w-full h-60 object-cover group-hover:brightness-75 transition"
              />

              {/* Glossy overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/40 to-black/90"></div>

              {/* Glowing floating light */}
              <div className="
                absolute -top-10 -right-10 w-40 h-40 
                bg-pink-500/20 rounded-full blur-3xl opacity-0 
                group-hover:opacity-40 transition
              "></div>

              {/* Content */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-black/40 px-2 py-1 text-xs rounded-md text-yellow-300">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </span>

                  <span className="bg-white/10 px-2 py-1 text-xs rounded-md">
                    #{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-semibold leading-tight line-clamp-2">
                  {movie.title}
                </h3>

                <button
                  className="mt-3 px-4 py-2 text-sm rounded-xl bg-white/20 backdrop-blur-md
                             hover:bg-white/30 transition"
                >
                  Watch Now
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute -right-1 top-1/2 -translate-y-1/2 z-30 
                   bg-black/40 hover:bg-black/60 p-4 rounded-full text-white backdrop-blur"
      >
        <ChevronRight size={22} />
      </button>
    </div>
  );
}

