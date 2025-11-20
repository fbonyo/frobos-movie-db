// src/components/MovieCard.jsx
export default function MovieCard({ movie }) {
  return (
    <div className="min-w-[200px] max-w-[220px] flex-shrink-0 bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-[300px] object-cover"
      />
      <div className="p-2">
        <h3 className="font-semibold text-lg">{movie.title}</h3>
        <p className="text-sm text-gray-300">{movie.release_date}</p>
      </div>
    </div>
  );
}











