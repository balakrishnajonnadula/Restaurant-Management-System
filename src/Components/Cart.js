/* eslint-disable no-cond-assign */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import itemsService from "../services/itemsService";
import "../styles/cart.css";
import { toast } from "react-toastify";

const Cart = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [cartItems, setCartItems] = useState([]);

  let count = [];
  let totalPrice = 0;

  useEffect(() => {
    getItems();
  }, []);

  const getItems = async () => {
    if (user != null) {
      await itemsService.viewCartItems().then((res) => setCartItems(res.data));
    }
    navigateCount();
  };

  const navigateCount = () => {
    if (count.length - 1 > 0) {
      navigate("/categories");
    }
  };

  cartItems &&
    cartItems.map((item) => {
      if (user.id == item.user.id) {
        count.push(item);
      }
    });

  count.map((price) => {
    let amt = price.item.price * price.quantity;
    totalPrice += amt;
  });

  const handleDelete = (e, id) => {
    e.preventDefault();
    // alert(id);
    if (count.length === 1) {
      itemsService.deleteCartItem(id).catch((err) => toast.error(err));
      // console.log("length : ", count.length);
      navigate("/categories");
      window.location.reload();
    } else {
      itemsService.deleteCartItem(id).catch((err) => toast.error(err));
      window.location.reload();
    }
  };

  const handleConfirmOreder = (e) => {
    localStorage.setItem("orders", JSON.stringify(count));
    count.map((item) => {
      itemsService.deleteCartItem(item.id).catch((err) => toast.error(err));
    });
    navigate("/orderfood");
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  console.log(count);
  // console.log("total price : ", totalPrice);
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
                  <p
                    className="form-text text-danger fw-bold pt-4 "
                    style={{ cursor: "pointer" }}
                    onClick={(e) => {
                      handleDelete(e, item.id);
                    }}
                  >
                    Delete
                  </p>
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
                  <p>₹ {totalPrice}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="">
                  <p>Tax (10%)</p>
                </div>
                <div className="">
                  <p>₹ {totalPrice * 0.1}</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="fs-bold">
                  <p>Total</p>
                </div>
                <div className="">
                  <p>₹ {totalPrice + totalPrice * 0.1}</p>
                </div>
              </div>
              <div className="my-3">
                <button
                  className="w-100 py-1 order_btn"
                  onClick={(e) => {
                    handleConfirmOreder(e);
                    // navigate("/orderfood");
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
