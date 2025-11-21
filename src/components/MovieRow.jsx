import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

export default function MovieRow({ title, movies = [], onMovieClick = () => {} }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    const { current } = rowRef;
    if (!current) return;

    const amount = 400;

    current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-10">
      {/* Row Title */}
      <h2 className="text-xl font-semibold text-white mb-4 px-2">{title}</h2>

      <div className="relative group">

        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
                     bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur
                     transition-opacity text-white"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Movie Row */}
        <div
          ref={rowRef}
          className="flex overflow-x-auto no-scrollbar gap-4 px-2 scroll-smooth"
        >
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard
                key={movie.id || movie.imdbID}
                movie={movie}
                onClick={() => onMovieClick(movie)}
              />
            ))
          ) : (
            <p className="text-white/60">No movies available.</p>
          )}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
                     bg-black/30 hover:bg-black/50 p-3 rounded-full backdrop-blur
                     transition-opacity text-white"
        >
          <ChevronRight size={22} />
        </button>

      </div>
    </div>
  );
}








