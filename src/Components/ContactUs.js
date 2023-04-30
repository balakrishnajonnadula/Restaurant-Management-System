import React, { useState } from "react";
import "../styles/contactus.css";
import "../styles/Login.css";
import contactService from "../services/contactService";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ContactUs = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [comment, setComments] = useState();
  const [nameErr, setNameError] = useState();
  const [emailErr, setEmailError] = useState();
  const [numberErr, setNumberError] = useState();
  const [textErr, setTextError] = useState();
  const navigate = useNavigate();

  const handleContact = (e) => {
    e.preventDefault();

    if (name != null && email != null && phone != null && comment != null) {
      let com = {
        name: name,
        Email: email,
        comments: comment,
        phone: phone
      }
      let status = contactService.postComments(com).catch(err => toast.error(err, { theme: "colored" }));
      if (status != null) {
        toast.success("Your information recieved",  { theme: "colored" })
        navigate("/");
      } else {

      }
    }
    if (name == "" || name == null) {
      setNameError("Name required");
    } else {
      setNameError();
    }
    if (email == "" || email == null) {
      setEmailError("Email required");
    } else {
      setEmailError();
    }
    if (phone == "" || phone == null) {
      setNumberError("Number required and length should be 10");
    } else {
      setNumberError();
    }
    if (comment == "" || comment == null) {
      setTextError("Write something required");
    } else {
      setTextError();
    }
  };

  return (
    <div className="container-fluid p-0">
      <div className="bg-dark">
        <div className="bg-light">
          <div className="p-5">
            <div className="box ">
              <div className="text-center py-4">
                <h2>Contact us</h2>
              </div>
              <div className="row px-5 pb-3">
                <div className="col-lg-2 col-md-3">
                  <h4 className="text-color">Name</h4>
                </div>
                <div className="col-lg-10 col-md-9">
                  <input
                    type={"text"}
                    className="custom-input"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                  <p className="form-text text-danger">{nameErr}</p>
                </div>
              </div>
              <div className="row px-5 py-3">
                <div className="col-lg-2 col-md-3">
                  <h4 className="text-color">Email</h4>
                </div>
                <div className="col-lg-10 col-md-9">
                  <input
                    type={"email"}
                    className="custom-input"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <p className="form-text text-danger">{emailErr}</p>
                </div>
              </div>
              <div className="row px-5 py-3">
                <div className="col-lg-2 col-md-3">
                  <h4 className="text-color">Phone Number</h4>
                </div>
                <div className="col-lg-10 col-md-9">
                  <input
                    type={"text"}
                    className="custom-input"
                    onChange={(e) => {
                      setPhone(e.target.value);

                    }}
                    maxLength="10"
                  />
                  <p className="form-text text-danger">{numberErr}</p>
                </div>
              </div>
              <div className="col px-5 pt-3 pb-2">
                <textarea
                  placeholder="Write something here"
                  className="p-3 textarea"
                  onChange={(e) => {
                    setComments(e.target.value);
                  }}
                />
                <p className="form-text text-danger">{textErr}</p>
              </div>
              <div className="px-5 pb-5 d-flex justify-content-end">
                <div>
                  <button
                    className="bg-dark py-2 px-5 fs-5 text-white"
                    onClick={(e) => {
                      handleContact(e);
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
