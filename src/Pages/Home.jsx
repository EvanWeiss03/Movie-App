import React, { useState } from "react";
import "./Home.css";
import homeImg from "../Assets/im1.svg";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Home = () => {
  const [searchString, setSearchString] = useState("");
  const navigate = useNavigate();

  const gotoBrowse = () => {
    navigate("Browse", { state: { query: searchString } });
  };

  function onSearchKeyDown(event) {
    if (event.key === "Enter") {
      gotoBrowse();
    }
  }
  return (
    <section className="body">
      <Navbar />
      <div className="row">
        <div className="body__content">
          <h1 className="body__title purple">
            America's most awarded movie subscription platform
          </h1>
          <h2 className="body__sub-title">
            FIND GREAT MOVIES WITH <span className="purple">BLINKER</span>
          </h2>
          <div className="search__wrapper">
            <div className="search__bar">
              <input
                className="search__input"
                type="text"
                placeholder="Search by Title"
                id="searchBar"
                autoComplete="off"
                onChange={(e) => setSearchString(e.target.value)}
                value={searchString}
                onKeyDown={onSearchKeyDown}
              />

              <button className="movie__searchBtn" onClick={gotoBrowse}>
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
        </div>
        <div className="img1--wrapper">
          <img className="img1" src={homeImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Home;
