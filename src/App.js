import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import NavBar from "./components/NavBar/NavBar";
import Movies from "./components/Movies/Movies";
import TvSeries from "./components/TvSeries/TvSeries";
import Nothing from "./components/Nothing/Nothing";
import Intro from "./components/Intro/Intro";
import ContentLoader from "./components/ContentLoader/ContentLoader";
import PageLoader from "./components/PageLoader/PageLoader";
import CustomPages from "./components/CustomPages/CustomPages";
import Search from "./components/Search/Search";
import MovieDetails from "./components/MovieDetails/MovieDetails";

export default function App() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [pageNum, setPageNum] = useState();

  const getMovie = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setPageNum(data?.total_pages);
        setLoading(false);
      });
  };

  const getSeries = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setSeries(data.results);
        setPageNum(data?.total_pages);
        setLoading(false);
      });
  };

  useEffect(() => {
    getMovie(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=${page}`
    );
  }, [page]);

  useEffect(() => {
    getSeries(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=${page}`
    );
  }, [page]);

  const movieChangeHandler = (e) => {
    setQuery(e);
    var length = e.length;
    if (length >= 3) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1&include_adult=false&query=${e}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    } else if (length === 0) {
      getMovie(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=${page}`
      );
    }
  };

  const seriesChangeHandler = (e) => {
    setQuery(e);
    console.log(e);
    var length = e.length;
    if (length >= 3) {
      fetch(
        `https://api.themoviedb.org/3/search/tv?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=1&include_adult=false&query=${e}&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          setSeries(data.results);
        });
    } else if (length === 0) {
      getSeries(
        `https://api.themoviedb.org/3/tv/top_rated?api_key=8c2bc4e84cc4e0bebe9e71ffd52ae730&language=en-US&page=${page}`
      );
    }
  };

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <>
      {loader ? (
        <PageLoader />
      ) : (
        <Router>
          <NavBar />

          <Routes>
            {/* MOVIES */}
            <Route
              exact
              path="/"
              element={
                <>
                  <Intro />
                  <h3 className="under-heading" id="search">
                    Find your favourite Movie!
                  </h3>
                  <Search value={query} onChange={movieChangeHandler} />
                  {loading ? (
                    <ContentLoader />
                  ) : (
                    <div className="card-container">
                      {movies.length > 0 ? (
                        movies.map((movie) => (
                          <Movies key={movie.id} props={movie} />
                        ))
                      ) : (
                        <Nothing />
                      )}
                      <CustomPages setPage={setPage} pageNum={pageNum} />
                    </div>
                  )}
                </>
              }
            />

            {/* DETAILS */}
            <Route path="/details/:id" element={<MovieDetails />} />

            {/*TV SHOWS */}
            <Route
              path="/tvseries"
              element={
                <>
                  <Intro />
                  <h3 className="under-heading" id="search">
                    Find your favourite Tv Show!
                  </h3>
                  <Search value={query} onChange={seriesChangeHandler} />
                  {loading ? (
                    <ContentLoader />
                  ) : (
                    <div className="card-container">
                      {series.length > 0 ? (
                        series.map((serie) => (
                          <TvSeries key={serie.id} props={serie} />
                        ))
                      ) : (
                        <Nothing />
                      )}
                      <CustomPages setPage={setPage} pageNum={pageNum} />
                    </div>
                  )}
                </>
              }
            />
          </Routes>
        </Router>
      )}
    </>
  );
}
