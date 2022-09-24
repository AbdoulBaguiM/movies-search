import React from 'react'
import { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
import movieService from './services/movies'

const App = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    movieService
      .getAll()
      .then((result) => setMovies(result))
      .catch((error) => console.error(error))
  }, [])

  return (
    <>
      <div className="max-w-[80%] my-0 mx-auto">
        <SearchBar />
        <div className="grid grid-cols-2 gap-4">
          {movies &&
            movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
        </div>
      </div>
    </>
  )
}

export default App
