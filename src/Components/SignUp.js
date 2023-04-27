import React, { useState } from 'react'
import registerImage from "../assets/RegisterImg.png";
import signUpService from '../services/signUpService';
const SignUp = () => {

    const [username, setUsername] = useState();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        if (username !== null && email !== null && password !== null) {
            let users = {
                username: username,
                email: email,
                password: password
            }
            let status = signUpService.addUsers(users);
            if (status != null) {
                alert(username + " " + email + " " + password)
            } else {
                alert("data not inserted")
            }
        }
    }

    return (
        <div className="container-fluid">
            <div className="row" style={{ height: "90vh" }}>
                <div
                    className="col-lg-8 col-md-7  d-none d-lg-block"
                    style={{ padding: "0px" }}
                >
                    <img src={registerImage} alt="bg" style={{ height: "90vh", width: "100%" }} />
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
                                <label for="exampleInputUsername1" className="form-label">
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    className="custom-input"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    onChange={(e) => { setUsername(e.target.value) } }
                                    required
                                />

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
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
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
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    className="custom-input"
                                    id="exampleInputPassword1"
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    required
                                />
                            </div>

                            <div class="d-flex justify-content-center my-4">
                                <button className="custom-btn py-3 w-100" style={{backgroundColor:'black'}} onClick={(e) => handleSignUp(e)}>SignUp</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
