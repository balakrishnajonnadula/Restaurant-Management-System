import axios from "axios";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";
import tableService from "../services/tableService";
import { toast } from "react-toastify";

const BookTable = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [partySize, setPartySize] = useState(0);
  const [requests, setRequests] = useState("");
  const [reservationType, setReservationType] = useState("");
  const [slot, setSlot] = useState("");

  const [tables, setTables] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const [tabData, setTabData] = useState([]);
  // console.log("tab Data ", tabData);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://192.168.3.180:8000/tables/")
      .then((res) => setTables(res.data));
  }, []);

  console.log("Tables", tables);

  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  const getTableData = (e, id) => {
    e.preventDefault();
    tableService.getTables(id).then((res) => setTabData(res.data));
  };

  const handleBookTable = (e) => {
    e.preventDefault();

    if (user != null) {
      let orderTable = {
        table: {
          number: tabData.number,
          capacity: tabData.capacity,
          available: true,
        },

        name: user.username,
        guests: tabData.capacity,
        date:
          currentDate.getFullYear() +
          "-" +
          (currentDate.getMonth() + 1) +
          "-" +
          currentDate.getDate(),
        time: slot,
        special_requests: requests,
        reservation_type: reservationType,
        user: user.id,
      };
      // table: {
      //   number: tabData.number,
      //   capacity: tabData.capacity,
      //   available: true,
      // },
      // console.log("Order table : ", orderTable);
      tableService
        .reserveTable(orderTable)
        .then((res) =>
          res.status === 201
            ? toast.success("Booking conformed")
            : console.log()
        )
        .then(localStorage.setItem("table", JSON.stringify(orderTable)))
        .then(navigate("/ordertable"))
        .catch((err) =>
          err.response.status == 400
            ? toast.error("Bad Request")
            : console.log()
        );
    } else {
      toast.error("Login Required");
      navigate("/");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Calendar
              className={"w-100 "}
              onChange={setCurrentDate}
              value={currentDate}
              tileDisabled={tileDisabled}
            />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <div className="card">
              <div className="card-header">
                <h4>Table Reservation</h4>
              </div>
              <div className="card-body px-4">
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h6>Table</h6>
                  </div>
                  <div>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                      onChange={(e) => {
                        getTableData(e, e.target.value);
                      }}
                    >
                      {tables &&
                        tables.map((table) => (
                          <option value={table.id}>
                            Table - {table.id - 6}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h6>Slot</h6>
                  </div>
                  <div className="input-group mb-3 " style={{ width: "120px" }}>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={slot}
                      onChange={(e) => setSlot(e.target.value)}
                    >
                      <option value="11:00">11.00</option>
                      <option value="12:00">12.00</option>
                      <option value="13:00">13.00</option>
                      <option value="19:00">19.00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21.00</option>
                    </select>
                    {/* <button
                      className="btn btn-light text-success fs-bold"
                      onClick={(e) => {
                        handleInc(e);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button> */}
                  </div>
                </div>
                {/* <hr /> */}
                <div className="d-flex justify-content-between">
                  <div>
                    <h6>Party Size</h6>
                  </div>
                  <div className="input-group mb-3 " style={{ width: "120px" }}>
                    {/* <button
                      className="btn btn-light text-danger"
                      onClick={(e) => {
                        handleDec(e);
                      }}
                    >
                      -
                    </button> */}
                    {/* <span className="input-group-text">First and last name</span> */}
                    <input
                      type="text"
                      aria-label="Last name"
                      className="form-control text-center text-primary"
                      value={tabData && tabData.capacity}
                      readOnly
                      //   onChange={(e) => {
                      //     setSize(e.target.value);
                      //   }}
                    />
                    {/* <button
                      className="btn btn-light text-success fs-bold"
                      onClick={(e) => {
                        handleInc(e);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button> */}
                  </div>
                </div>
                {/* <hr /> */}
                <div className="d-flex justify-content-between">
                  <div className="w-100 mb-3">
                    <label className="form-label">Reservation Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={reservationType}
                      onChange={(e) => setReservationType(e.target.value)}
                    >
                      <option selected value="Lunch">
                        Lunch
                      </option>
                      <option value="Birthday">BirthDay</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Private Dinner">Private Dinner</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Rooftop Dinner">Rooftop Dinner</option>
                      <option value="Dinner">Dinner</option>
                    </select>
                  </div>
                </div>
                {/* <hr/> */}
                {/* <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h6>Adult</h6>
                  </div>
                  <div>
                    <input
                      className="form-control w-50 float-end"
                      type="number"
                      onChange={handleAdultInputChange}
                      defaultValue={"0"}
                      value={tabData && tabData.capacity}
                    />
                  </div>
                </div> */}

                {/* <div className="d-flex justify-content-between mb-3 ">
                  <div className="mb-3">
                    <h6>Child</h6>
                  </div>
                  <div>
                    <input
                      className="form-control w-50 float-end"
                      type="number"
                      onChange={handleChildInputChange}
                      defaultValue={"0"}
                      value={childSize}
                    />
                  </div>
                </div> */}

                {/* <hr /> */}
                <div className="mb-3">
                  <div className="mb-2">
                    <h6>Any Special Requests</h6>
                  </div>
                  <div>
                    <textarea
                      className="p-3"
                      style={{ height: "100px", width: "100%" }}
                      value={requests}
                      onChange={(e) => {
                        setRequests(e.target.value);
                      }}
                    ></textarea>
                  </div>
                </div>
                <button
                  className="w-100 py-2 btn btn-primary my-3"
                  onClick={(e) => {
                    handleBookTable(e);
                  }}
                >
                  Book the table
                </button>
              </div>

              {/* <div className="card-footer">hello</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
