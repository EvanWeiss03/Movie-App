import React from "react";
import logo from "../Assets/logo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ white }) => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <figure className="nav__logo">
        <img src={logo} className="nav__logo--img" alt="" />
      </figure>
      <div className="nav__links">
        {white ? (
          <div className="nav__links--wrapper">
            <Link
              to="/"
              className="nav__link nav__link--white purple link__hover"
            >
              Home
            </Link>
            <Link
              to="/Browse"
              className="nav__link nav__link--white link__hover"
            >
              Find Movies
            </Link>
            <button className="btn nav__btn btn__active">
              <div className="btn__link">CONTACT</div>
            </button>
          </div>
        ) : (
          <div className="nav__links--wrapper">
            <Link to="/" className="nav__link purple link__hover">
              Home
            </Link>
            <Link to="/Browse" className="nav__link link__hover">
              Find Movies
            </Link>
            <button className="btn nav__btn btn__active">
              <div href="" className="btn__link">
                CONTACT
              </div>
            </button>
          </div>
        )}

        <button className="btn__menu btn__menu--open">
          <FontAwesomeIcon icon="fa-solid fa-bars" onClick={openMenu} />
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="fa-solid fa-x" />
          </button>
          <ul>
            <li className="menu__list">
              <Link className="menu__link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/Browse" onClick={closeMenu}>
                Find Movies
              </Link>
            </li>
            <li className="menu__list">
              <a className="menu__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
