import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FeaturedSlider({ movies = [] }) {
  const rowRef = useRef(null);

  const scroll = (direction) => {
    if (!rowRef.current) return;
    const amount = 400;

    rowRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="my-10">

      {/* Title + View All */}
      <div className="flex items-center justify-between px-2 mb-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <span>🔥</span> Featured
        </h2>

        <button className="text-sm bg-white/10 px-3 py-1 rounded-lg hover:bg-white/20">
          View All ↗
        </button>
      </div>

      <div className="relative group">

        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden group-hover:flex absolute left-0 top-1/2 -translate-y-1/2 
                     z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
        >
          <ChevronLeft />
        </button>

        {/* Slider Row */}
        <div
          ref={rowRef}
          className="flex overflow-x-auto gap-4 px-2 no-scrollbar scroll-smooth"
        >
          {movies.slice(0, 10).map((movie) => {
            const poster = movie.poster_path
              ? `https://image.tmdb.org/t/p/w342${movie.poster_path}`
              : "/placeholder.png";

            const date = movie.release_date
              ? new Date(movie.release_date).toDateString().slice(4)
              : "N/A";

            return (
              <div
                key={movie.id}
                className="min-w-[200px] bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                {/* Poster */}
                <img
                  src={poster}
                  className="w-full h-60 object-cover"
                />

                <div className="p-3">
                  {/* Rating */}
                  <span className="text-xs bg-black/40 px-2 py-1 rounded-md text-yellow-300">
                    ⭐ {movie.vote_average?.toFixed(1)}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-sm font-semibold line-clamp-2">
                    {movie.title}
                  </h3>

                  {/* Date */}
                  <p className="text-xs text-white/60 mt-1">{date}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden group-hover:flex absolute right-0 top-1/2 -translate-y-1/2 
                     z-20 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
        >
          <ChevronRight />
        </button>

      </div>
    </div>
  );
}
