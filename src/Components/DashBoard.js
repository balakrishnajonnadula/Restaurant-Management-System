import React, { useEffect, useState } from "react";
import userService from "../services/userService";
import categoriesService from "../services/categoriesService";
import itemsService from "../services/itemsService";
import { Link } from "react-router-dom";

const DashBoard = () => {
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    userService.getUsers().then((res) => setUsers(res.data));
    categoriesService.getCategories().then((res) => setCategories(res));
    itemsService.getItemsList().then((res) => setItems(res.data));
  }, []);
  return (
    <div className="container" style={{ height: "82.5vh" }}>
      <div>
        <h1 class="h2">Dashboard</h1>
        <p></p>
        <div class="row my-4">
          <div class="col-12 col-md-6 col-lg-3 mb-4 mb-lg-0">
            <div class="card">
              <h5 class="card-header">Customers</h5>
              <div class="card-body">
                <h5 class="card-title">{users.length}</h5>
                <p class="card-text">Feb 1 - Apr 1, United States</p>
                <p class="card-text text-success">
                  18.2% increase since last month
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card">
              <h5 class="card-header">Categories</h5>
              <div class="card-body">
                <h5 class="card-title">{categories.length}</h5>
                <p class="card-text">Feb 1 - Apr 1, United States</p>
                <p class="card-text text-success">
                  4.6% increase since last month
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card">
              <h5 class="card-header">Products</h5>
              <div class="card-body">
                <h5 class="card-title">{items.length}</h5>
                <p class="card-text">Feb 1 - Apr 1, United States</p>
                <p class="card-text text-danger">
                  2.6% decrease since last month
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 mb-4 mb-lg-0 col-lg-3">
            <div class="card">
              <h5 class="card-header">Orders</h5>
              <div class="card-body">
                <h5 class="card-title">64</h5>
                <p class="card-text">Feb 1 - Apr 1, United States</p>
                <p class="card-text text-success">
                  2.5% increase since last month
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="row">
          <div class="col-12 col-xl-8 mb-4 mb-lg-0">
            <div class="card">
              <h5 class="card-header">Latest transactions</h5>
              <div class="card-body">
                <div class="table-responsive">
                  <table class="table">
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
                          <a href="#" class="btn btn-sm btn-primary">
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
                          <a href="#" class="btn btn-sm btn-primary">
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
                          <a href="#" class="btn btn-sm btn-primary">
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
                          <a href="#" class="btn btn-sm btn-primary">
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
                          <a href="#" class="btn btn-sm btn-primary">
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
                          <a href="#" class="btn btn-sm btn-primary">
                            View
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <a href="#" class="btn btn-block btn-light">
                  View all
                </a>
              </div>
            </div>
          </div>
          <div class="col-12 col-xl-4">
            <div class="card">
              <h5 class="card-header">Traffic last 6 months</h5>
              <div class="card-body">
                <div id="traffic-chart"></div>
              </div>
            </div>
          </div>
        </div> */}
        <footer class="pt-5 d-flex justify-content-between">
          <span>Copyright © 2019-2023 Yellow Chilli Restaurant</span>
          <ul class="nav m-0">
            <li class="nav-item">
              <Link
                class="nav-link text-secondary"
                aria-current="page"
                href="#"
              >
                Privacy Policy
              </Link>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                Terms and conditions
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-secondary" href="#">
                Contact
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

export default DashBoard;
