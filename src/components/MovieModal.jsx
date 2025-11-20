import React from 'react'

const MovieModal = ({ movie, onClose }) => {
  if (!movie) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-gray-900 text-white rounded-lg p-6 w-96 max-h-[90vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold"
        >
          ✖
        </button>
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/placeholder.png'}
          alt={movie.Title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
        <p><span className="font-semibold">Year:</span> {movie.Year}</p>
        <p><span className="font-semibold">Actors:</span> {movie.Actors}</p>
        <p><span className="font-semibold">Genre:</span> {movie.Genre}</p>
        <p><span className="font-semibold">Runtime:</span> {movie.Runtime}</p>
        <p><span className="font-semibold">IMDB Rating:</span> {movie.imdbRating}</p>
        <p className="mt-2"><span className="font-semibold">Plot:</span> {movie.Plot}</p>
      </div>
    </div>
  )
}

export default MovieModal
