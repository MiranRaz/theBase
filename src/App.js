import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TvSeries/TvSeries";
import Nothing from "./components/Nothing/Nothing";
//import Search from "./components/Search/Search";

import { CircularProgress } from "@mui/material";
import Intro from "./components/Intro/Intro";

const MOVIE_API = `https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1`;

const TVSERIES_API = `https://api.themoviedb.org/3/tv/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1`;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const getMovie = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setLoading(false);
      });
  };

  const getSeries = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie(MOVIE_API);
  }, []);

  useEffect(() => {
    getSeries(TVSERIES_API);
  }, []);

  const movieChangeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    var length = e.target.value.length;
    if (length >= 3) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    } else if (length === 0) {
      getMovie(MOVIE_API);
    }
  };

  const seriesChangeHandler = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    var length = e.target.value.length;
    if (length >= 3) {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1&include_adult=false&query=${e.target.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSeries(data.results);
        });
    } else if (length === 0) {
      getSeries(TVSERIES_API);
    }
  };

  return (
    <Router>
      <NavBar />
      <Intro />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <h3 className="under-heading" id="search">
                Find your favourite Movie
              </h3>
              <div className="container">
                <div className="add-content">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      placeholder="Enter at least 3 letters..."
                      value={query}
                      onChange={movieChangeHandler}
                    />
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
                    <Nothing />
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
              <h3 className="under-heading" id="search">
                Find your favourite Tv Show!
              </h3>
              <div className="container">
                <div className="add-content">
                  <div className="input-wrapper">
                    <input
                      type="text"
                      placeholder="Enter at least 3 letters..."
                      value={query}
                      onChange={seriesChangeHandler}
                    />
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
                    <Nothing />
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
