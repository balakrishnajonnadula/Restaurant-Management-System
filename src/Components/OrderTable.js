import React, { useEffect } from "react";
import tableimg from "../assets/restaurant-svgrepo-com@2x.jpg";
import done from "../assets/done.gif";
import { useNavigate } from "react-router-dom";
const OrderTable = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const tableData = JSON.parse(localStorage.getItem("table"));

  const navigate = useNavigate();
  setTimeout(() => {
    localStorage.removeItem("table");
  }, 3000);

  useEffect(() => {
    const tableData = JSON.parse(localStorage.getItem("table"));
    if (tableData == null) {
      navigate("/booktable");
    }
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="text-center mt-3">
          <img
            className="rounded"
            src={tableimg}
            alt="congrats_image"
            width={"300px"}
            height={"200px"}
          />
          <p className="mt-4 fs-5" style={{ color: "#1BE40D" }}>
            Congratulations ! we have recieved your order.
          </p>
          <p className="mt-2 fs-5">
            <img src={done} alt="done" height={"30px"} width={"30px"} />
            &nbsp; Your table for {tableData && tableData.guests} has been
            confirmed at {tableData && tableData.time} IST
          </p>
        </div>
      </div>
      <div className="container my-4">
        <div className="card mx-3">
          <div className="card-body ">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h6 className="py-2">
                  Reserved Table :{" "}
                  <span className="text-primary">
                    {tableData && tableData.table.number}
                  </span>
                </h6>
                <h6 className="py-2">
                  Time Reserved :{" "}
                  <span className="text-primary">
                    {tableData && tableData.time}
                  </span>{" "}
                  &nbsp; IST
                </h6>
                <h6 className="py-2">
                  Name :{" "}
                  <span className="text-primary">{user && user.username}</span>
                </h6>
                <h6 className="py-2">
                  Reservation type :{" "}
                  <span className="text-primary">
                    {tableData && tableData.reservation_type}
                  </span>
                </h6>
                <h6 className="py-2">
                  <span className="text-primary">Special Note : </span>
                  {tableData && tableData.special_requests}
                </h6>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h6 className="py-2">
                  Table capacity : {tableData && tableData.table.capacity}
                </h6>
                <h6 className="py-2">
                  Party size : {tableData && tableData.guests}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
