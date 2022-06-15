import { useEffect, useState } from 'react'
import './App.css'
import SearchIcon from './assets/search.svg'
import MovieCard from './MovieCard'

const API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

const App = () => {
  const [title, setTitle] = useState('')
  const [availableMovies, setAvailableMovies] = useState([])

  const searchMoviesByTitle = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const { Search: movies } = await response.json()

    return setAvailableMovies(movies)
  }

  useEffect(() => {
    searchMoviesByTitle('Speed racer')
  }, [])

  return (
    <div className="app">
      <h1>Bemflix</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <img
          src={SearchIcon}
          alt="Search Icon"
          onClick={() => searchMoviesByTitle(title)}
        />
      </div>

      {availableMovies.length > 0
        ? (
          <div className="container">
            {
              availableMovies.map((movie, idx) =>
                <MovieCard key={idx} movie={movie} />,
              )
            }
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found. 😞</h2>
          </div>
        )
      }
    </div>
  )
}
export default App
