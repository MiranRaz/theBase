import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TvSeries/TvSeries";
//import Search from "./components/Search/Search";

import { CircularProgress } from "@mui/material";

const MOVIE_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1`;

const TVSERIES_API = `https://api.themoviedb.org/3/tv/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1`;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(MOVIE_API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch(TVSERIES_API)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
        setLoading(false);
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
              <h1 className="heading">Top 30 Movies</h1>
              <h3 className="under-heading">Find your favourite movie</h3>
              <div className="add-page">
                <div className="container">
                  <div className="add-content">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={movieChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <div className="card-container">
                  {movies.length > 0 ? (
                    movies.map((movie) => <Movies key={movie.id} {...movie} />)
                  ) : (
                    <h3 className="under-heading">
                      We couldn't find the movie that you are looking for!
                    </h3>
                  )}
                </div>
              )}
            </>
          }
        />

        <Route
          path="/tvseries"
          element={
            <>
              <h1 className="heading">Top 30 Tv Series</h1>
              <h3 className="under-heading">Find your favourite Tv Show!</h3>
              <div className="add-page">
                <div className="container">
                  <div className="add-content">
                    <div className="input-wrapper">
                      <input
                        type="text"
                        placeholder="Search..."
                        value={query}
                        onChange={seriesChangeHandler}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {loading ? (
                <CircularProgress />
              ) : (
                <div className="card-container">
                  {series.length > 0 ? (
                    series.map((serie) => (
                      <TvSeries key={serie.id} {...serie} />
                    ))
                  ) : (
                    <h3 className="under-heading">
                      We couldn't find the tv show that you are looking for!
                    </h3>
                  )}
                </div>
              )}
            </>
          }
        />
      </Routes>
    </Router>
  );
}
