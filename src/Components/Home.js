import React, { useEffect, useState } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet, json } from "react-router-dom";
import itemsService from "../services/itemsService";

const Home = () => {
  // const user = JSON.parse(localStorage.getItem("user"));

  // const [cartItems, setCartItems] = useState([]);

  // let count = [];

  // useEffect(() => {
  //   if (user != null) {
  //     itemsService.viewCartItems().then((res) => setCartItems(res.data));
  //   }

  //   if (user != null) {
  //     cartItems &&
  //       cartItems.map((item) => {
  //         if (user.id == item.user.id) {
  //           console.log(item);
  //           count.push(item);
  //         }
  //       });
  //   }
  // }, []);

  // console.log("asdf;lkj: ",cartItems)

  // const [cartItems, setCartItems] = useState([]);

  // let items = JSON.parse(localStorage.getItem("cart"));

  // console.log("count : ", count);

  return (
    <div>
      <NavBar  />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;
