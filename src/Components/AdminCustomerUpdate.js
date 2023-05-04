import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import userService from "../services/userService";
import { toast } from "react-toastify";
import "../styles/Login.css";

const AdminCustomerUpdate = () => {
  const { id } = useParams();
  //   const [role, setRole] = useState(true);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    userService.getUserById(id).then((res) => setUser(res.data));
  }, []);
  //   console.log(user);

  // handle update

  const handleUpdate = (e) => {
    e.preventDefault();
    // console.log(user);
    userService
      .updateUser(id, user)
      .then((res) =>
        res.status === 200 ? toast.success("Updated successful") : console.log()
      )
      .then(navigate("/admin/customers/view/" + id))
      .catch((err) => toast.error(err));
  };

  //   handle cancel

  const handleCancel = (e) => {
    e.preventDefault();
    navigate("/admin/customers/view/" + id);
  };

  return (
    <div className="container " style={{ height: "70.5vh" }}>
      <div>
        <h3 className="text-center">Update Customer Details</h3>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="mt-3 mb-3">
            <label className="form-label">User Id </label>
            <input
              type="text"
              className="custom-input"
              readonly
              value={user.id}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Username </label>
            <input
              type="text"
              className="custom-input"
              value={user.username}
              onChange={(e) => {
                setUser({ ...user, username: e.target.value });
              }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email </label>
            <input
              type="text"
              className="custom-input"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div>
            <button
              className="custom-btn bg-primary my-2 w-100 py-2"
              onClick={(e) => {
                handleUpdate(e);
              }}
            >
              Update
            </button>
          </div>
          <div>
            <button
              className="custom-btn bg-danger my-2 w-100 py-2"
              onClick={(e) => {
                handleCancel(e);
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      {/* <div>
        <label className="form-label">Email </label>
        <input
          type="date"
          className="form-control custom-input"
          value={user.date_joined.substring(0, 10)}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
        />
      </div> */}

      {/* <div>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(e) => {
              setRole(Boolean.valueOf(e.target.value));
            }}
          >
            <option selected value="false">
              Customer
            </option>
            <option value="true">Admin</option>
          </select>
        </div> */}
    </div>
  );
};

export default AdminCustomerUpdate;
