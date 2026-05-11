import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import Favorites from "./components/Favorites";
import ThemeToggle from "./components/ThemeToggle";

function App() {

  const moviesData = [
    {
      id: 1,
      title: "Interstellar",
      year: 2014,
      genre: "Sci-Fi",
      rating: 8.6,
      tags: ["Adventure", "Space", "Time", "Survival"]
    },

    {
      id: 2,
      title: "Star Wars: A New Hope",
      year: 1977,
      genre: "Sci-Fi",
      rating: 8.6,
      tags: ["Space Opera", "Rebels", "Force", "Galaxy"]
    },

    {
      id: 3,
      title: "The Star",
      year: 2017,
      genre: "Animation",
      rating: 6.1,
      tags: ["Family", "Journey", "Friends"]
    }
  ];

  const [search, setSearch] = useState("star");

  const [favorites, setFavorites] = useState([1, 3]);

  const [darkMode, setDarkMode] = useState(false);

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id) => {

    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    }

    else {
      setFavorites([...favorites, id]);
    }
  };

  return (

    <div className={darkMode ? "container dark" : "container"}>

      <ThemeToggle
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="main-card">

        <Header />

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <p className="results">
          {filteredMovies.length} results for "{search}"
        </p>

        <div className="content">

          <MovieList
            movies={filteredMovies}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />

          <Favorites
            favorites={favorites}
            moviesData={moviesData}
          />

        </div>

      </div>

    </div>
  );
}

export default App;