import React from 'react'

const MovieCard = ({ movie }) => {
  movie = movie._source
  return (
    <div className="w-1/2 md:w-1/2 lg:w-[470px] max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div className="md:flex-shrink-0">
        <img
          className="md:w-56"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
          {movie.title}
        </h3>
        <span className="movie--year text-xl lg:text-sm lg:mb-4">
          {movie.release_date}
        </span>
        <div className="flex-grow">
          <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow hover:overflow-y-scroll">
            {movie.overview}
          </p>
        </div>
        <div className="button-container flex justify-between mb-2">
          <span className="text-lg mr-4 lg:text-sm text-gray-200">
            {movie.vote_count} Votes
          </span>
          <span className="text-lg lg:text-sm font-bold py-2 px-4 rounded text-orange-700">
            {movie.vote_average}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
