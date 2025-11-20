import React from 'react'

const FeaturedBanner = ({ movie }) => {
  if (!movie) return null

  return (
    <div
      className="relative h-96 md:h-[500px] w-full bg-cover bg-center rounded-lg overflow-hidden"
      style={{
        backgroundImage: `url(${movie.Poster})`,
      }}
    >
      <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-6">
        <h1 className="text-3xl md:text-5xl font-bold text-white">{movie.Title}</h1>
        <p className="text-white mt-2 hidden md:block">{movie.Plot}</p>
      </div>
    </div>
  )
}

export default FeaturedBanner
