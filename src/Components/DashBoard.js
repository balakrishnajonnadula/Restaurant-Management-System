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
    categoriesService.getCategories().then((res) => setCategories(res.data));
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
       
      </div>
    </div>
  );
};

export default DashBoard;
