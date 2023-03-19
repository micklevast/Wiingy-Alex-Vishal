import React from "react";
import logo from "../assets/Logo/Logo-brainflix.svg";
import searchIcon from "../assets/Icons/SVG/Icon-search.svg";
import plusIcon from "../assets/Icons/SVG/Icon-upload.svg";
import { Link } from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <div className="header">
      <header className="header__main-container">
        <div className="header__logo-container">
          <Link to="/" className="header__logo-container--link">
            <img className="header__logo" src={logo} alt="" />
          </Link>
        </div>

        <div className="header__search-container">
          <img
            className="header__search-container--icon"
            src={searchIcon}
            alt=""
          />
          <h4 className="header__search-container--search">Search</h4>
        </div>
        <div className="header__upload-container">
          <Link className="header__upload-container--link" to="/upload">
            <button className="header__upload-container-inner">
              <img
                className="header__upload-container-inner--icon"
                src={plusIcon}
                alt=""
              />
              <h4 className="header__upload-container-inner--upload">UPLOAD</h4>
            </button>
          </Link>
          <div className="header__upload-container--mohan"></div>
        </div>
      </header>
    </div>
  );
}
