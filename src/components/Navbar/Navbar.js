import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link className="navbar-brand" to="/">
      Ekaterina Macedo 
    </Link>
    <div>
      <ul className="navbar-nav">
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
