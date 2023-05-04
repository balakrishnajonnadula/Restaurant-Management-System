import "../styles/navbar.css";

import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import userService from "../services/userService";
import { useEffect, useState } from "react";
import itemsService from "../services/itemsService";

const NavBar = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const [cartItems, setCartItems] = useState([]);

  let count = [];

  useEffect(() => {
    if (user != null) {
      itemsService.viewCartItems().then((res) => setCartItems(res.data));
    }
  }, []);

  if (user != null) {
    cartItems &&
      cartItems.map((item) => {
        if (user.id == item.user.id && item.status === "Active") {
          count.push(item);
        }
      });
  }

  const handleCart = (e) => {
    e.preventDefault();
    if (count.length > 0) {
      navigate("/cart");
    } else {
      toast.error("Cart is empty add items");
     navigate("/categories");
    }
  };

  const navigate = useNavigate();
  // console.log("nav data ", user);

  const handleLogout = (e) => {
    e.preventDefault();
    userService.logout().catch((err) => toast.error(err));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    localStorage.removeItem("orders");
    toast.success("Logout successful");
    navigate("/");
  };

  return (
    <div className="sticky-top">
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
                <Link className="nav-link" to={"/booktable"}>
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
                    >
                      {user.username}
                    </Link>
                    <ul className="dropdown-menu me-2">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Orders
                        </Link>
                      </li>

                      <li>
                        <hr className="dropdown-divider"></hr>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item"
                          href="#"
                          onClick={(e) => handleLogout(e)}
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <Link className="dropdown-item me-5" to={"/login"}>
                    Login
                  </Link>
                )}
              </div>
              <div className="me-5">
                <Link
                  className="dropdown-item"
                  onClick={(e) => {
                    handleCart(e);
                  }}
                >
                  Cart&nbsp;{" "}
                  <span className="text-warning">{count.length}</span>
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
