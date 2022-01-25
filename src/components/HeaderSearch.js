import React, { useState } from "react";

const HeaderSearch = ({ movies, setMovies }) => {
  // api
  const searchAPI =
    "https://api.themoviedb.org/3/search/movie?api_key=6d393adf79df2c9383e0e8f0c87edb3b&query=";
  // state
  const [searchTerm, setSearchTerm] = useState("");
  // functiton for ASYNC api request
  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };
  // handle on search submit callback
  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(searchAPI + searchTerm);
      setSearchTerm("");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Filmetic Search</div>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            className="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
          />
        </form>
      </div>
    </header>
  );
};

export default HeaderSearch;
