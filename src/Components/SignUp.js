import React, { useState } from "react";
import registerImage from "../assets/RegisterImg.png";
import userService from "../services/userService";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [passErr, setPasErr] = useState("");
  const [errUser, setErrUser] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPass, setErrPass] = useState("");

  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    if (
      password != null &&
      confirmPass != null &&
      username != null &&
      email != null &&
      password === confirmPass
    ) {
      setPasErr("");
      let user = {
        username: username,
        email: email,
        password: password,
      };
      // console.log(user);
      userService.addUsers(user).then(toast.success("Register success"));
      navigate("/");
    }
    if (password !== confirmPass) {
      setConfirmPass("Password mismatch");
    } else {
      setConfirmPass("");
    }
    if (username == null) {
      setErrUser("Username required");
    } else {
      setErrUser("");
    }
    if (email == null) {
      setErrEmail("Email required");
    } else {
      setErrEmail("");
    }
    if (password == null) {
      setErrPass("password required");
    } else {
      setErrEmail("");
    }
    if (confirmPass == null) {
      setConfirmPass("password required");
    } else {
      setConfirmPass("");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "90vh" }}>
        <div
          className="col-lg-8 col-md-7  d-none d-lg-block"
          style={{ padding: "0px" }}
        >
          <img
            src={registerImage}
            alt="bg"
            style={{ height: "90vh", width: "100%" }}
          />
        </div>
        <div
          className="col-lg-4 col-md-5 col-md-12 px-5"
          style={{ marginTop: "100px" }}
        >
          <div className="my-1">
            <form>
              <div className="mb-3">
                <h1 className="text-center ">Create an Account</h1>
              </div>
              <div className="mb-3">
                <label className="form-label">User Name</label>
                <input
                  value={username}
                  type="text"
                  className="custom-input"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  required
                />
                <p className="form-text text-danger">{errUser}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  value={email}
                  type="email"
                  className="custom-input"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                />
                <p className="form-text text-danger">{errEmail}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  value={password}
                  type="password"
                  className="custom-input"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                />
                <p className="form-text text-danger">{errPass}</p>
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="custom-input"
                  onChange={(e) => {
                    setConfirmPass(e.target.value);
                  }}
                  required
                />
                <p className="form-text text-danger">{passErr}</p>
              </div>

              <div className="d-flex justify-content-center my-4">
                <button
                  className="custom-btn py-3 w-100"
                  style={{ backgroundColor: "black" }}
                  onClick={(e) => handleSignUp(e)}
                >
                  SignUp
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
