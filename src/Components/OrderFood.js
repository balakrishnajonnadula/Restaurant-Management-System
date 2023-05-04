import React, { useEffect } from "react";
import congratsimg from "../assets/Group 197@2x.jpg";
import { useNavigate } from "react-router-dom";
const OrderFood = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const navigate = useNavigate();
  let totalPrice = 0;
  let orders = [];

  orders = JSON.parse(localStorage.getItem("orders"));
  useEffect(() => {
    if (orders == null) {
      navigate("/categories");
    }
  });
  setTimeout(() => {
    localStorage.removeItem("orders");
  }, 3000);

  if (orders != null) {
    orders.map((price) => {
      let amt = price.item.price * price.quantity;
      totalPrice += amt;
    });
  }

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="text-center mt-3">
            <img
              className="rounded"
              src={congratsimg}
              alt="congrats_image"
              width={"150px"}
              height={"150px"}
            />
            <p className=" fs-5" style={{ color: "#1BE40D" }}>
              Congratulations ! we have recieved your order.
            </p>
            <p className="fs-5">
              Please wait for 15 minutes until your food is delivered to your
              table.
            </p>
          </div>
          <div className="row">
            <div className="card mb-5">
              <div className="card-body ">
                <div className="d-flex justify-content-between">
                  <p className="fs-6">
                    Order for :
                    <span style={{ color: "#097ED8" }}>
                      {" "}
                      &nbsp;&nbsp;{user.username}
                    </span>
                  </p>
                  <p className=" ">
                    Waiting time :{" "}
                    <span style={{ color: "#097ED8" }}>15 minutes</span>
                  </p>
                </div>
                <p className="">
                  Assigned Waiter :
                  <span style={{ color: "#097ED8" }}> &emsp;Rajitha</span>
                </p>

                <h5 className="fs-5 fw-bold mt-4">Items :</h5>
                <div className="row">
                  <div className="col-md-12 col-lg-4 col-sm-12 mt-3">
                    <div>
                      {orders &&
                        orders.map((item, index) => (
                          <div className="d-flex justify-content-between">
                            <div className=" fw-bold">{index + 1} &emsp;</div>
                            <div className="fw-bold me-auto">
                              {" "}
                              {item.item.title}
                            </div>
                            <div
                              className="fw-bold ps-4"
                              style={{ color: "#097ED8" }}
                            >
                              {" "}
                              {item.quantity}&nbsp;X&nbsp;
                              <span className="text-black ">
                                ₹ {item.item.price}
                              </span>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <hr />
                <div className="row">
                  <div className="col-md-12 col-lg-4 col-sm-12 mt-3">
                    <div className="d-flex justify-content-between">
                      <div className=" fw-bold">
                        items&nbsp;({orders && orders.length}) &emsp;
                      </div>
                      <div className="fw-bold"> {}</div>

                      <div className="fw-bold ps-4" style={{ color: "" }}>
                        ₹ {totalPrice}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-4 col-sm-12 mt-3">
                    <div className="d-flex justify-content-between">
                      <div className=" fw-bold">Tax&nbsp;(10%) &emsp;</div>
                      <div className="fw-bold"> {}</div>

                      <div className="fw-bold ps-4" style={{ color: "" }}>
                        ₹ {totalPrice * 0.1}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-4 col-sm-12 mt-3">
                    <div className="d-flex justify-content-between">
                      <div className=" fw-bold">Grand Total&emsp;</div>
                      <div className="fw-bold"> {}</div>

                      <div className="fw-bold ps-4" style={{ color: "" }}>
                        ₹ {totalPrice + totalPrice * 0.1}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFood;
