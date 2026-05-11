import React from "react";

function MovieCard({
  movie,
  favorites,
  toggleFavorite
}) {

  return (

    <div className="movie-card">

      <div>

        <h3>
          {movie.title}
        </h3>

        <p>
          {movie.year} • {movie.genre}
        </p>

        <div className="tags">

          {movie.tags.map((tag, index) => (

            <span
              key={index}
              className="tag"
            >
              {tag}
            </span>

          ))}

        </div>

        <span className="rating">
          ⭐ {movie.rating}
        </span>

      </div>

      <button
        className={
          favorites.includes(movie.id)
            ? "fav-btn active"
            : "fav-btn"
        }

        onClick={() => toggleFavorite(movie.id)}
      >

        {favorites.includes(movie.id)
          ? "❤️ Favorited"
          : "🤍 Favorite"}

      </button>

    </div>
  );
}

export default MovieCard;