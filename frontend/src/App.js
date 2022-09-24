import React from 'react'
import MovieCard from './components/MovieCard'
import SearchBar from './components/SearchBar'

const App = () => {
  return (
    <>
      <div className="max-w-[80%] my-0 mx-auto">
        <SearchBar />
        <div className="grid grid-cols-2 gap-4">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  )
}

export default App
