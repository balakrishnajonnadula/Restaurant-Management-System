import React, { useState } from "react";
import loginImg from "../assets/brokeplate.jpg";
import "../styles/Login.css";
import loginService from "../services/loginService";
import axios from "axios";

const Login = () => {
  const [uName, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState();
  const[tok,setTok] = useState();

  const handleLogin = (e) => {
    e.preventDefault();

    let user = {
      username: uName,
      password: password,
    };

    // loginService.login(user).then((res) => {
    //   setResponse(res.data);
    //   setTok(res.data.token);
    // });
    // localStorage.setItem("token",response.token);
    // if (response.token) {
    //   console.log("token : ", response.token);
    // }
    axios.post("http://192.168.7.221:8000/login/",user)
    .then(resp => {
      console.log("resp ",resp.data.token);
    })
    
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div
          className="col-lg-8 col-md-7  d-none d-lg-block"
          style={{ padding: "0px" }}
        >
          <img
            src={loginImg}
            alt="bg"
            style={{ height: "100vh", width: "100%" }}
          />
        </div>
        <div
          className="col-lg-4 col-md-5 col-md-12 px-5"
          style={{ marginTop: "100px" }}
        >
          <div className="my-5">
            <form>
              <div className="">
                <h1 className="text-center ">Login</h1>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="custom-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setUname(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="custom-input"
                  id="exampleInputPassword1"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="d-flex justify-content-center my-4">
                <button
                  className="custom-btn py-3 w-100"
                  style={{ backgroundColor: "black" }}
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                >
                  Login
                </button>
              </div>
              <div>
                <a href="/signup" style={{ textDecoration: "none" }}>
                  Create an Account
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
