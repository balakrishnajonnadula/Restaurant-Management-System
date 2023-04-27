import React, { useState } from "react";
import loginImg from "../assets/brokeplate.jpg";
import "../styles/Login.css";
import loginService from "../services/loginService";


const Login = () => {
  const [uName, setUname] = useState("");
  const [password, setPassword] = useState("");

<<<<<<< HEAD
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(" login details : " + uName + " " + password);
    let user = {
      username: uName,
      password: password,
    };
    loginService.login(user).then(res=> console.log(res.data)).catch(err=> alert(err));
  };
=======
>>>>>>> origin/master

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div
          className="col-lg-8 col-md-7  d-none d-lg-block"
          style={{ padding: "0px" }}
        >
<<<<<<< HEAD
          <img
            src={loginImg}
            alt="bg"
            style={{ height: "100vh", width: "100%" }}
          />
=======
          <img src={loginImg} alt="bg" style={{ height: "100vh", width: "100%" }} />
>>>>>>> origin/master
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
<<<<<<< HEAD
                  onChange={(e) => {
                    setUname(e.target.value);
                  }}
                />
=======
                  onChange={(e) => { setUname(e.target.value) }}

                />

>>>>>>> origin/master
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="custom-input"
                  id="exampleInputPassword1"
<<<<<<< HEAD
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <div className="d-flex justify-content-center my-4 ">
                <button
                  className="custom-btn py-3 w-100"
                  onClick={(e) => {
                    handleLogin(e);
                  }}
                >
                  Login
                </button>
=======
                  onChange={(e) => { setPassword(e.target.value) }}
                />
              </div>

              <div class="d-flex justify-content-center my-4">
                <button className="custom-btn py-3 w-100" style={{backgroundColor:'black'}}>Login</button>

              </div>
              <div>
                <a href="/signup" style={{ textDecoration: 'none' }}>Create an Account</a>
>>>>>>> origin/master
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
