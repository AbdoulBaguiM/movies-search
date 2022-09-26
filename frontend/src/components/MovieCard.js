import React from 'react'

const MovieCard = ({ movie }) => {
  movie = movie._source
  return (
    <div className="w-1/2 md:w-1/2 lg:w-[470px] max-w-4xl rounded  shadow-lg m-4 flex justify-between">
      <div className="md:flex-shrink-0">
        <img
          className="md:w-56 h-full"
          src={`https://imdb-api.com/API/ResizeImage?apiKey=k_2nkocr54&size=384x528&url=${movie.image}`}
          alt={movie.title}
        />
      </div>
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
          {movie.title}
        </h3>
        <span className="movie--genres my-2 text-xl lg:text-sm lg:mb-4">
          {movie.genres}
        </span>
        <div className="flex-grow">
          <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow hover:overflow-y-scroll">
            {movie.plot}
          </p>
        </div>
        <div className="flex-grow">
          <p className="text-xl my-5 md:text-base lg:text-base text-gray-500 leading-snug">
            Cast: {movie.stars}
          </p>
        </div>
        <div className="button-container flex justify-between mb-2">
          <span className="text-lg mr-4 lg:text-sm font-bold text-orange-700">
            {movie.imDbRating}/10
          </span>
          <span className="text-lg mr-4 lg:text-sm font-bold text-green-500">
            {movie.runtimeMins} mins
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
