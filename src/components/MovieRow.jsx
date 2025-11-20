// src/components/MovieRow.jsx
import MovieCard from './MovieCard';

export default function MovieRow({ title, movies }) {
  return (
    <div className="my-6">
      <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
      {movies.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto py-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-300">No movies found.</p>
      )}
    </div>
  );
}







