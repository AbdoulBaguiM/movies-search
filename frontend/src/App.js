import React from 'react'
import { useState, useEffect } from 'react'
import CheckBoxes from './components/CheckBoxes'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
import movieService from './services/movies'

const App = () => {
  const [searchQuery, setSearchQuery] = useState(null)
  const [sortBy, setSortBy] = useState(null)
  const [checkedCategories, setCheckedCategories] = useState(null)
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    movieService
      .getAll()
      .then((result) => setMovies(result))
      .catch((error) => console.error(error))
  }, [])

  const handleSearch = () => {
    movieService
      .search(searchQuery, sortBy, checkedCategories)
      .then((results) => {
        setMovies(results)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
      <div className="max-w-[80%] my-0 mx-auto">
        <SearchBar
          searchQuery={searchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setSearchQuery={setSearchQuery}
          handleSearch={handleSearch}
        />
        <CheckBoxes
          checkedCategories={checkedCategories}
          setCheckedCategories={setCheckedCategories}
        />
        <div className="grid grid-cols-2 gap-4">
          {movies &&
            (movies.length === 0 ? (
              <span className="text-white text-2xl my-8">
                No result found, try with other parameters
              </span>
            ) : (
              movies.map((movie) => <MovieCard movie={movie} key={movie._id} />)
            ))}
        </div>
      </div>
    </>
  )
}

export default App
