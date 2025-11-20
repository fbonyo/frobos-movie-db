import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies, horizontal }) => {
  return horizontal ? (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  ) : (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  )
}

export default MovieList


