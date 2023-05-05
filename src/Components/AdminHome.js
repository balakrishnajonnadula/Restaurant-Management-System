import React, { useEffect } from "react";
import "../styles/adminhome.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { toast } from "react-toastify";

const AdminHome = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem("user"));
    console.log(userDetails);
    if (userDetails == null) {
      navigate("/");
    } else if (userDetails.username !== "admin") {
      navigate("/");
    }
  });

  const handleLogout = (e) => {
    e.preventDefault();
    userService.logout().catch((err) => toast.error(err));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    toast.success("Logout successful");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark p-3">
        <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
          <Link
            className="navbar-brand brand fs-3 fw-bold ps-3"
            to={"/admin"}
            style={{ color: "yellow" }}
          >
            Yellow Chilli Restaurant
          </Link>
          <button
            className="navbar-toggler d-md-done collapsed mb-3"
            type="button"
            data-toggle="collapse"
            data-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col-12 col-md-4 col-lg-2"></div>
        <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
          <div className="mr-3 mt-1"></div>
          <div className="">
            <div className="nav-item dropdown nav-item me-5">
              <Link
                className="nav-link dropdown-toggle me-5 text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user && user.username}
              </Link>
              <ul className="dropdown-menu me-2 ">
                <li>
                  <Link
                    className="dropdown-item "
                    href="#"
                    onClick={(e) => handleLogout(e)}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebar"
            className="col-md-3 col-lg-2 d-md-block bg-dark sidebar collapse "
          >
            <div className="position-sticky" id="sidebar">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/admin"}
                  >
                    <i
                      className="bi bi-house-door"
                      style={{ color: "white" }}
                    ></i>
                    <span className="ml-2 ps-3 text-white">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin/orders"}>
                    <i className="bi bi-cart " style={{ color: "white" }}></i>
                    <span className="ml-2 ps-3 text-white">Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/itemslist">
                    <i
                      className="bi bi-list-check"
                      style={{ color: "white" }}
                    ></i>
                    <span className="ml-2 ps-3 text-white">Items List</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin/customers"}>
                    <i
                      className="bi bi-person-lines-fill"
                      style={{ color: "white" }}
                    ></i>
                    <span className="ml-2 ps-3 text-white">Customers</span>
                  </Link>
                  <Link className="nav-link" to={"/admin/categories"}>
                    <i className="bi-bookmarks" style={{ color: "white" }}></i>
                    <span className="ml-2 ps-3 text-white">Categories</span>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <Outlet />
            <footer className="pt-5 d-flex justify-content-between">
              <span>Copyright © 2019-2023 Yellow Chilli Restaurant</span>
              <ul className="nav m-0">
                <li className="nav-item">
                  <Link
                    className="nav-link text-secondary"
                    aria-current="page"
                    href="#"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-secondary" href="#">
                    Terms and conditions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-secondary" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </footer>
          </main>
          {/* <Outlet/> */}
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
