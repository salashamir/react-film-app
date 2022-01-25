import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import HeaderSearch from "./components/HeaderSearch";

const featuredAPI =
  "https://api.themoviedb.org/3/discover/movie?api_key=6d393adf79df2c9383e0e8f0c87edb3b&sort_by=popularity.desc&page=1";

const searchAPI =
  "https://api.themoviedb.org/3/search/movie?api_key=6d393adf79df2c9383e0e8f0c87edb3b&query=";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(featuredAPI)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="App">
      <HeaderSearch movies={movies} setMovies={setMovies} />
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </div>
  );
}

export default App;
