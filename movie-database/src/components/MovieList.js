import React from "react";
import MovieCard from "./MovieCard";

function MovieList({
  movies,
  favorites,
  toggleFavorite
}) {

  return (

    <div className="movies">

      <h2>Matching Movies</h2>

      {movies.length === 0 ? (

        <p>No movies found</p>

      ) : (

        movies.map((movie) => (

          <MovieCard
            key={movie.id}
            movie={movie}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />

        ))
      )}

    </div>
  );
}

export default MovieList;