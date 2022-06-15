const MovieCard = ({ movie }) => {
  const {
    Title: title,
    Type: type,
    Year: year,
    Poster: poster,
  } = movie
  const DEFAULT_POSTER = 'https://via.placeholder.com/400x400'

  return (
    <div className="movie">
      <div>
        <p>{year}</p>
      </div>

      <div>
        <img
          src={poster === 'N/A' ? DEFAULT_POSTER : poster}
          alt="Movie poster"
        />
      </div>

      <div>
        <span>{type}</span>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default MovieCard