import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nabvar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" exact to="#">
            React User
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link" aria-current="page" exact to="/">
                Home
              </NavLink>
              <NavLink
                className="nav-link"
                aria-current="page"
                exact
                to="/about"
              >
                About
              </NavLink>
              <NavLink
                className="nav-link"
                aria-current="page"
                exact
                to="/contact"
              >
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nabvar;
