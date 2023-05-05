import React from "react";
import tableimg from "../assets/restaurant-svgrepo-com@2x.jpg";
import done from "../assets/done.gif";
const OrderTable = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const tableData = JSON.parse(localStorage.getItem("table"));
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
            &nbsp; Your table for 6 has been confirmed at 7:30 PM
          </p>
        </div>
        <div className="row">
          <div className="card mx-3">
            <div className="card-body ">
              {/* <div className='d-flex justify-content-around'>
                                <p className='fs-5'>Reserved Table : <span style={{ color: '#097ED8' }}>Table No-4A</span></p>
                                <p className='fs-5 '>No of seats required: <span style={{ color: '#097ED8' }}>6</span></p></div>
                            <div className='d-flex justify-content-around'>
                                <p className='fs-5'>Time Reserved : <span style={{ color: '#097ED8' }}>7:30PM</span></p>
                                <p className='fs-5 '>Party size: <span style={{ color: '#097ED8' }}>6</span></p></div>
                            <div className='d-flex justify-content-around'>
                                <p className='fs-5'>Name : <span style={{ color: '#097ED8' }}>Dinesh</span></p>
                                <p className='fs-5 '>Contact Number: <span style={{ color: '#097ED8' }}>15 minutes</span></p></div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
