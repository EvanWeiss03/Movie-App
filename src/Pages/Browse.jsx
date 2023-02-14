import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Browse.css";
import img from "../Assets/img.svg";
import Navbar from "../Components/Navbar";
import axios from "axios";

const Browse = () => {
  const { state } = useLocation();
  const [searchString, setSearchString] = useState("");
  const [movieInfo, setMovieInfo] = useState();
  const [loading, setLoading] = useState();

  const fetchMovies = async (query) => {
    if (searchString === "undefined") {
      setSearchString(" ");
    }
    setLoading(true);
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=1a34ac4f&s=${searchString || query}`
    );

    setMovieInfo(data.Search);
    setLoading(false);
  };

  useEffect(() => {
    if (state && state.query) {
      fetchMovies(state.query);
    }
  }, []);

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      fetchMovies();
    }
  };

  return (
    <>
      <div className="header">
        <Navbar white={true} />
        <div className="searchbar__wrapper">
          <h1 className="search__title">Browse our movies</h1>
          <div className="search__bar">
            <input
              className="search__input2"
              type="text"
              onKeyUp={searchEnter}
              placeholder="Search by Title"
              id="searchBar"
              autoComplete="off"
              value={searchString}
              onChange={(e) => setSearchString(e.target.value)}
            />
            <button
              className="movie__searchBtn"
              type="submit"
              onClick={() => fetchMovies(searchString)}
            >
              <svg
                data-v-2a11e7ca=""
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="search"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="movie__searchBtn--icon"
              >
                <path
                  data-v-2a11e7ca=""
                  fill="currentColor"
                  d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                  className=""
                ></path>
              </svg>
            </button>
          </div>
          
        </div>
        <div className="backdrop"></div>
      </div>
      <section id="results">
        <div className="bar">
          <div className="bar__loading"></div>
        </div>
        <div className="blob1">
          <img src="./assets/blob1.svg" alt=""></img>
        </div>
        <div className="blob2">
          <img src="./assets/blob2.svg" alt=""></img>
        </div>
        <div className="row">
          <div className="movies__wrapper">
            <div className="search__results">
              <h1 className="search__results--title">Search Results</h1>
            </div>
            <>
              {!movieInfo ? (
                <figure id="search__result--img-wrapper">
                  <img src={img} className="search__result--img" alt=""></img>
                  <span className="search__results--text">
                    Search your favorite movie!
                  </span>
                </figure>
              ) : (
                <ul className="movies">
                  {!loading
                    ? movieInfo
                        .map((movie) => (
                          <li className="movie" key={movie.imdbID}>
                            <img
                              className="movie__poster"
                              src={movie.Poster}
                              alt=""
                            />
                            <div className="movie__date--wrapper">
                              {movie.Year}
                            </div>
                            <div className="movie__text--wrapper">
                              <h3 className="movie__title">{movie.Title}</h3>
                            </div>
                          </li>
                        ))
                        .slice(0, 8)
                    : new Array(8).fill(0).map((_, index) => (
                        <li className="skeleton__movie" key={index}>
                          <div className="skeleton__poster" alt=""></div>
                          <div className="skeleton__text--wrapper">
                            <h3 className="skeleton__movieTitle"></h3>
                            <h3 className="skeleton__movieDate"></h3>
                          </div>
                        </li>
                      ))}
                </ul>
              )}
            </>
          </div>
        </div>
      </section>
    </>
  );
};

export default Browse;
