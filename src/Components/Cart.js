import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsService from "../services/itemsService";
import "../styles/cart.css"

const Cart = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [cartItems, setCartItems] = useState([]);

  let count = [];
  let totalPrice = 0;

  useEffect(() => {
    if (user != null) {
      itemsService.viewCartItems().then((res) => setCartItems(res.data));
    }
  }, []);

  cartItems &&
    cartItems.map((item) => {
      if (user.id == item.user.id) {
        // console.log("item" ,item)
        count.push(item);
      }
    });

  count.map((price) => {
    let amt = price.item.price * price.quantity;
    totalPrice += amt;
  });

  console.log(count);
  console.log("total price : ", totalPrice);
  return (
    <div className="container my-5">
      {cartItems &&
        cartItems.map((item) =>
          user.id == item.user.id ? (
            <div>
              <div className="row ">
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <img
                    className="text-center"
                    src={item.item.image}
                    alt=""
                    height={"100px"}
                    width={"100px"}
                  />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-12 ">
                  <h5 className="">{item.item.title}</h5>
                  <p className="form-text">{item.item.description}</p>
                  <p>
                    <strong>Quantity : {item.quantity}</strong>
                  </p>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-12">
                  <strong>₹ {item.item.price}</strong>
                </div>
              </div>
              <hr></hr>
            </div>
          ) : (
            <div></div>
          )
        )}

      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-8 col-md-7 col-sm-12"></div>
          <div className="col-lg-4 col-md-5 col-sm-12">
            <div className="bg-light p-5">
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>items {`(${count.length})`}</p>
                </div>
                <div className="">
                  <p>₹ {totalPrice }</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>Tax</p>
                </div>
                <div className="">
                  <p>₹ {(totalPrice * 0.10)}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="fs-bold">
                  <p>Total</p>
                </div>
                <div className="">
                  <p>₹ {totalPrice + (totalPrice * 0.10)}</p>
                </div>
              </div>
              <div className="my-3">
                <button
                  className="w-100 py-1 order_btn"
                  onClick={(e) => {
                    navigate("/orderfood");
                  }}
                >
                  Confirm Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
