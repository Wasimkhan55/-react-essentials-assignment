import React from "react";

function Favorites({
  favorites,
  moviesData
}) {

  return (

    <div className="favorites">

      <h2>Favorite Movies</h2>

      {favorites.length === 0 ? (

        <p>
          You haven't added any favorites yet.
        </p>

      ) : (

        favorites.map((id) => {

          const movie = moviesData.find(
            (m) => m.id === id
          );

          return (

            <div
              key={id}
              className="favorite-item"
            >

              ❤️ {movie.title}

            </div>
          );
        })
      )}

    </div>
  );
}

export default Favorites;