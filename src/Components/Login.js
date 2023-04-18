import React, { useState }  from "react";
import loginImg from "../assets/brokeplate.jpg";
import "../styles/Login.css";


const Login = () => {
  const [uName, setUname] = useState("");
  const [password, setPassword] = useState("");
 

  return (
    <div className="container-fluid">
      <div className="row" style={{height:"100vh"}}>
        <div
          className="col-lg-8 col-md-7  d-none d-lg-block"
          style={{ padding: "0px" }}
        >
          <img src={loginImg} alt="bg" style={{height:"100vh", width:"100%"}} />
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
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="custom-input"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e)=>{setUname(e.target.value)}}
                  
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
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
              </div>

              <div class="d-flex justify-content-center my-4">
                <button className="custom-btn py-3 w-100">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
