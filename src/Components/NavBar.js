import React from "react";
import "../styles/navbar.css";

import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div>
      {/* Nab Bar */}
      <nav className="navbar  navbar-expand-lg bg-body-tertiary navbar-dark bg-dark py-3">
        <div className="container-fluid ">
          <Link
            className="navbar-brand brand fs-3 fw-bold ps-3"
            to={"/"}
            style={{ color: "yellow" }}
          >
           Yellow Chilli Restaurants
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">

                <Link className="nav-link"to={"/categories"}>
                  Order Food
                </Link>
                

              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Book Table
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider"></hr>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li> */}
            </ul>
            <div className="d-flex text-white">
              <div className="me-3">
                <a className="dropdown-item" href="#">
                  Cart
                </a>
              </div>

              <div>
                <Link className="dropdown-item" to={"/login"}>
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
