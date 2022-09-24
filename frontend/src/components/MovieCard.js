import React from 'react'

const MovieCard = () => {
  return (
    <div className="w-1/2 md:w-1/2 lg:w-[470px] max-w-4xl rounded overflow-hidden shadow-lg m-4 flex justify-between">
      <div className="md:flex-shrink-0">
        <img
          className="md:w-56"
          src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/nAU74GmpUk7t5iklEp3bufwDq4n.jpg"
          alt="A Quiet Place movie poster"
        />
      </div>
      <div className="flex flex-col flex-grow px-8 py-4 bg-color-333">
        <h3 className="font-bold text-4xl md:text-2xl lg:text-2xl text-gray-200 movie--title">
          A Quiet Place
        </h3>
        <span className="movie--year text-xl lg:text-sm lg:mb-4">2019</span>
        <div className="flex-grow">
          <p className="text-xl md:text-base lg:text-base text-gray-100 leading-snug truncate-overflow">
            A family is forced to live in silence while hiding from creatures
            that hunt by sound.
          </p>
        </div>
        <div className="button-container flex justify-between mb-2">
          <button className="text-lg mr-4 lg:text-sm text-gray-200">
            More Info
          </button>
          <button className="text-lg lg:text-sm font-bold py-2 px-4 rounded bg-orange-200 text-orange-700">
            Add to List
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard
