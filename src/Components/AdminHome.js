import React, { useEffect, useState } from "react";
import "../styles/adminhome.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import userService from "../services/userService";
import { toast } from "react-toastify";

const AdminHome = () => {

  const [users,setUsers] = useState([]);
  const [categories,setCategories] = useState([]);
  const [items,setItems]  = useState([]);
  

  useEffect(()=>{
    userService.getUsers().then((res) => setUsers(res.data));
  },[])

  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

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
            className="navbar-toggler collapsed mb-3"
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
                {user.username}
                
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
            {/* <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Hello, John Doe
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <Link className="dropdown-item" href="#">
                  Settings
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Messages
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#">
                  Sign out
                </Link>
              </li>
            </ul> */}
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-home text-white"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span className="ml-2 ps-3 text-white">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin/orders"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-file text-white"
                    >
                      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                      <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                 
                    <span className="ml-2 ps-3 text-white">Orders</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-shopping-cart text-white"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span className="ml-2 ps-3 text-white">Products</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/admin/customers"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-users text-white"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                    <span className="ml-2 ps-3 text-white">Customers</span>
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="btn btn-sm btn-secondary ml-3 mt-2"
                    href="https://themesberg.com/blog/bootstrap/simple-bootstrap-5-dashboard-tutorial"
                  >
                    <svg
                      width="1em"
                      height="1em"
                      viewBox="0 0 16 16"
                      className="bi bi-book"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 2.828v9.923c.918-.35 2.107-.692 3.287-.81 1.094-.111 2.278-.039 3.213.492V2.687c-.654-.689-1.782-.886-3.112-.752-1.234.124-2.503.523-3.388.893zm7.5-.141v9.746c.935-.53 2.12-.603 3.213-.493 1.18.12 2.37.461 3.287.811V2.828c-.885-.37-2.154-.769-3.388-.893-1.33-.134-2.458.063-3.112.752zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                      />
                    </svg>
                    <span className="ml-2">Read tutorial</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-sm btn-warning ml-3 mt-2"
                    href="https://themesberg.com/product/admin-dashboard/volt-bootstrap-5-dashboard"
                  >
                    ⚡︎ Volt Dashboard
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="btn btn-sm btn-primary ml-3 mt-2"
                    href="https://themesberg.com"
                  >
                    By Themesberg ❤️
                  </a>
                </li> */}
              </ul>
            </div>
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            {/* <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Overview
                </li>
              </ol>
            </nav> */}
            {/* <div>
              <h1 className="h2">Dashboard</h1>
              <p>
                This is the homepage of a simple admin interface which is part
                of a tutorial written on Themesberg
              </p>
              <div className="row my-4">
                <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
                  <div className="card">
                    <h5 className="card-header">Customers</h5>
                    <div className="card-body">
                      <h5 className="card-title">345k</h5>
                      <p className="card-text">Feb 1 - Apr 1, United States</p>
                      <p className="card-text text-success">
                        18.2% increase since last month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                  <div className="card">
                    <h5 className="card-header">Revenue</h5>
                    <div className="card-body">
                      <h5 className="card-title">$2.4k</h5>
                      <p className="card-text">Feb 1 - Apr 1, United States</p>
                      <p className="card-text text-success">
                        4.6% increase since last month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                  <div className="card">
                    <h5 className="card-header">Purchases</h5>
                    <div className="card-body">
                      <h5 className="card-title">43</h5>
                      <p className="card-text">Feb 1 - Apr 1, United States</p>
                      <p className="card-text text-danger">
                        2.6% decrease since last month
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
                  <div className="card">
                    <h5 className="card-header">Traffic</h5>
                    <div className="card-body">
                      <h5 className="card-title">64k</h5>
                      <p className="card-text">Feb 1 - Apr 1, United States</p>
                      <p className="card-text text-success">
                        2.5% increase since last month
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-xl-8 mb-4 mb-lg-0">
                  <div className="card">
                    <h5 className="card-header">Latest transactions</h5>
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table">
                          <thead>
                            <tr>
                              <th scope="col">Order</th>
                              <th scope="col">Product</th>
                              <th scope="col">Customer</th>
                              <th scope="col">Total</th>
                              <th scope="col">Date</th>
                              <th scope="col"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">17371705</th>
                              <td>Volt Premium Bootstrap 5 Dashboard</td>
                              <td>johndoe@gmail.com</td>
                              <td>€61.11</td>
                              <td>Aug 31 2020</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-primary">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">17370540</th>
                              <td>Pixel Pro Premium Bootstrap UI Kit</td>
                              <td>jacob.monroe@company.com</td>
                              <td>$153.11</td>
                              <td>Aug 28 2020</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-primary">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">17371705</th>
                              <td>Volt Premium Bootstrap 5 Dashboard</td>
                              <td>johndoe@gmail.com</td>
                              <td>€61.11</td>
                              <td>Aug 31 2020</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-primary">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">17370540</th>
                              <td>Pixel Pro Premium Bootstrap UI Kit</td>
                              <td>jacob.monroe@company.com</td>
                              <td>$153.11</td>
                              <td>Aug 28 2020</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-primary">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">17371705</th>
                              <td>Volt Premium Bootstrap 5 Dashboard</td>
                              <td>johndoe@gmail.com</td>
                              <td>€61.11</td>
                              <td>Aug 31 2020</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-primary">
                                  View
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">17370540</th>
                              <td>Pixel Pro Premium Bootstrap UI Kit</td>
                              <td>jacob.monroe@company.com</td>
                              <td>$153.11</td>
                              <td>Aug 28 2020</td>
                              <td>
                                <a href="#" className="btn btn-sm btn-primary">
                                  View
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <a href="#" className="btn btn-block btn-light">
                        View all
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-4">
                  <div className="card">
                    <h5 className="card-header">Traffic last 6 months</h5>
                    <div className="card-body">
                      <div id="traffic-chart"></div>
                    </div>
                  </div>
                </div>
              </div>
              <footer className="pt-5 d-flex justify-content-between">
                <span>
                  Copyright © 2019-2020{" "}
                  <a href="https://themesberg.com">Themesberg</a>
                </span>
                <ul className="nav m-0">
                  <li className="nav-item">
                    <a
                      className="nav-link text-secondary"
                      aria-current="page"
                      href="#"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">
                      Terms and conditions
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-secondary" href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </footer>
            </div> */}
            <Outlet />
          </main>
          {/* <Outlet/> */}
        </div>
      </div>
      {/* <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js"
        integrity="sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/"
        crossorigin="anonymous"
      ></script>
      <script src="https://cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script> */}
      {/* <!-- Github buttons --> */}
      {/* <script async defer src="https://buttons.github.io/buttons.js"></script>
    <script>
        new Chartist.Line('#traffic-chart', {
            labels: ['January', 'Februrary', 'March', 'April', 'May', 'June'],
            series: [
                [23000, 25000, 19000, 34000, 56000, 64000]
            ]
            }, {
            low: 0,
            showArea: true
        });
    </script> */}
    </div>
  );
};

export default AdminHome;
