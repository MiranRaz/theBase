import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TvSeries/TvSeries";
//import Search from "./components/Search/Search";

const MOVIE_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1";

const TVSERIES_API =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, []);

  useEffect(() => {
    fetch(TVSERIES_API)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
      });
  }, []);

  const movieChangeHandler = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  };

  const seriesChangeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
      });
  };

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <div className="add-page">
                <div className="container">
                  <div className="add-content">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="Search movie"
                        value={query}
                        onChange={movieChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-container">
                {movies.map((movie) => (
                  <Movies key={movie.id} {...movie} />
                ))}
              </div>
            </>
          }
        />
        <Route
          path="/tvseries"
          element={
            <>
              <div className="add-page">
                <div className="container">
                  <div className="add-content">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="Search movie"
                        value={query}
                        onChange={seriesChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-container">
                {series.map((serie) => (
                  <TvSeries key={serie.id} {...serie} />
                ))}
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}
