import React from "react";
import "../styles/navbar.css";

import { Link, json } from "react-router-dom";

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("nav data ",user);


  const handleLogout =(e)=>{
    e.preventDefault();
    alert("logout")
  }
  return (
    <div>
      {/* Nab Bar */}
      <nav className="navbar  navbar-expand-lg bg-body-tertiary navbar-dark bg-dark py-1">
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
            <ul className="navbar-nav me-auto  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to={"/categories"}>
                  Order Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  Book Table
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to={"/contact"}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <form className=" text-white d-flex">
              <div>
                {localStorage.getItem("user") != null ? (
                  <div className="nav-item dropdown nav-item">
                    <Link
                      className="nav-link dropdown-toggle me-5"
                      href="#"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >{user.username}</Link>
                    <ul className="dropdown-menu me-2">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#" onClick={(e)=>handleLogout(e)}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link className="dropdown-item" to={"/login"}>
                    Login
                  </Link>
                )}
              </div>
              <div className="me-3">
                <Link className="dropdown-item" href="#">
                  Cart
                </Link>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
