import React from 'react'
import { useState, useEffect } from 'react'
import CheckBoxes from './components/CheckBoxes'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'
import movieService from './services/movies'

const App = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState()
  const [checkedCategories, setCheckedCategories] = useState([])
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    movieService
      .getAll()
      .then((result) => setMovies(result))
      .catch((error) => console.error(error))
  }, [])

  const handleSearch = () => {
    if (!searchQuery) alert('Fill in the search query')
    else if (sortBy === '') setSortBy('asc')
    else if (checkedCategories.length === 0)
      alert('Select at least one category')
    else
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
    <div className="max-w-[80%] my-0 mx-auto">
      <SearchBar
        searchQuery={searchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <CheckBoxes setCheckedCategories={setCheckedCategories} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
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
  )
}

export default App
