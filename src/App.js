import React, { useState, useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TvSeries/TvSeries";

const MOVIE_API =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1";

const TVSERIES_API =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);

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
        console.log(data);
        setSeries(data.results);
      });
  }, []);

  return (
    <Router>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="card-container">
              {movies.map((movie) => (
                <Movies key={movie.id} {...movie} />
              ))}
            </div>
          }
        />
        <Route
          path="/tvseries"
          element={
            <div className="card-container">
              {series.map((serie) => (
                <TvSeries key={serie.id} {...serie} />
              ))}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
