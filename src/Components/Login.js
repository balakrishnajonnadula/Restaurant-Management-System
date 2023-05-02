import React, { useEffect, useState } from "react";
import loginImg from "../assets/brokeplate.jpg";
import "../styles/Login.css";
import userService from "../services/userService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [uName, setUname] = useState();
  const [password, setPassword] = useState();
  const [users, setUsers] = useState([]);
  const [tok, setTok] = useState();
  const [stat, setStat] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    userService.getUsers().then((res) => setUsers(res.data));
  }, []);
  // console.log(users);

  const handleLogin = (e) => {
    e.preventDefault();
    
    let user = {
      username: uName,
      password: password,
    };
  
    userService
      .login(user)
      .then((res) => {
        setStat(res.status);
        setTok(res.data.token);
      })
      .then((res) =>
        res.status == 200
          ? toast.success("Login Success")
          : toast.error("Bad Credentials")
      )
      .catch((err) =>
        err.response.status == 500
          ? toast.error("Bad Credentials")
          : console.log()
      );
  };

  // toast.success("Login success");

  if (stat == 200) {
    localStorage.setItem("token", tok);
    users.map((user) => {
      user.token == tok
        ? localStorage.setItem("user", JSON.stringify(user))
        : console.log();
    });

    navigate("/");
  }

  // console.log("User deatials ", JSON.parse(localStorage.getItem("user")));

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
                  Username
                </label>
                <input
                  value={uName}
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
                  value={password}
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
                <a
                  className="mt-3 "
                  href="/signup"
                  style={{ textDecoration: "none" }}
                >
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
