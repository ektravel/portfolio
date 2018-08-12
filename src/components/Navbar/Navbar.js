import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-transparent">
    <Link className="navbar-brand" to="/">
      Ekaterina Macedo 
    </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li
          className={
            window.location.pathname === "/about"
              ? "nav-item pull-right active"
              : "nav-item pull-right"
          }
        >
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/portfolio"
              ? "nav-item pull-right active"
              : "nav-item pull-right"
          }
        >
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/resume"
              ? "nav-item pull-right active"
              : "nav-item pull-right"
          }
        >
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/contact"
              ? "nav-item pull-right active"
              : "nav-item pull-right"
          }
        >
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
