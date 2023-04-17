import React from "react";
import bg from "../assets/louis-hansel-DEYK2ecXLUg-unsplash-min.jpg";
import "../styles/Login.css";
import plate from "../assets/table.jpg";

const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-8 col-md-7  d-none d-lg-block" style={{padding:"0px"}}>
          <img src={bg} alt="bg"  width="100%" height={"500px"}/>
        </div>
        <div className="col-lg-4 col-md-5 col-md-12 px-5" style={{marginTop:"100px"}}>
          <form>
            <div className="">
              <h1 className="text-center ">Login</h1>
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="custom-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="custom-input"
                id="exampleInputPassword1"
              />
            </div>

            <div class="d-flex justify-content-center my-4">
              <button className="custom-btn py-3 w-100">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
