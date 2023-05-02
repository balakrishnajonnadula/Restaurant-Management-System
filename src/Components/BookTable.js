import React, { useState } from "react";
import Calendar from "react-calendar";
import { useNavigate } from "react-router-dom";

const BookTable = () => {
  const [value, onChange] = useState(new Date());
  const [partySize, setPartySize] = useState(0);

  const navigate = useNavigate();

  const tileDisabled = ({ activeStartDate, date, view }) => {
    return date < new Date();
  };

  const handleDec = (e) => {
    e.preventDefault();
    if (partySize > 1) {
      setPartySize(partySize - 1);
    }
  };

  const handleInc = (e) => {
    e.preventDefault();
    if (partySize < 10) {
      setPartySize(partySize + 1);
    }
  };

  const handleBookTable = (e) => {
    e.preventDefault();
    navigate("/ordertable");
  };
  //   console.log(value);
  return (
    <div>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
            <Calendar
              className={"w-100 "}
              onChange={onChange}
              value={value}
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
                    <h6>Time</h6>
                  </div>
                  <div>
                    <input className="form-control" type="time" />
                  </div>
                </div>
                {/* <hr /> */}
                <div className="d-flex justify-content-between">
                  <div>
                    <h6>Party Size</h6>
                  </div>
                  <div className="input-group mb-3 " style={{ width: "120px" }}>
                    <button
                      className="btn btn-light text-danger"
                      onClick={(e) => {
                        handleDec(e);
                      }}
                    >
                      -
                    </button>
                    {/* <span className="input-group-text">First and last name</span> */}
                    <input
                      type="text"
                      aria-label="Last name"
                      className="form-control text-center text-primary"
                      value={partySize}
                      readOnly
                      //   onChange={(e) => {
                      //     setSize(e.target.value);
                      //   }}
                    />
                    <button
                      className="btn btn-light text-success fs-bold"
                      onClick={(e) => {
                        handleInc(e);
                      }}
                    >
                      {" "}
                      +{" "}
                    </button>
                  </div>
                </div>
                {/* <hr /> */}
                <div className="d-flex justify-content-between">
                  <div className="w-100 mb-3">
                    <label className="form-label">Reservation Type</label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected value="Lunch">
                        Lunch
                      </option>
                      <option value="BirthDay">BirthDay</option>
                      <option value="Anniversary">Anniversary</option>
                      <option value="Private Dinner">Private Dinner</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Rooftop">Rooftop Dinner</option>
                      <option value="VIP">VIP</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
                {/* <hr/> */}
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h6>Adult</h6>
                  </div>
                  <div>
                    <input
                      className="form-control w-50 float-end"
                      type="text"
                    />
                  </div>
                </div>
                {/* <hr /> */}
                <div className="d-flex justify-content-between mb-3">
                  <div>
                    <h6>Child</h6>
                  </div>
                  <div>
                    <input
                      className="form-control w-50 float-end"
                      type="text"
                    />
                  </div>
                </div>
                {/* <hr /> */}
                <div className="mb-3">
                  <div className="mb-2">
                    <h6>Any Special Requests</h6>
                  </div>
                  <div>
                    <textarea
                      className="p-3"
                      style={{ height: "100px", width: "100%" }}
                    ></textarea>
                  </div>
                </div>
                <button
                  className="w-100 py-2 btn btn-primary my-3"
                  onClick={(e) => {
                    // handleBookTable(e);
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
