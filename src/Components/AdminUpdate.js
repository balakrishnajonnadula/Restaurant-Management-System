import React from 'react'
import { useParams } from 'react-router-dom';

const AdminUpdate = () => {
  const { id } = useParams();

  
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
                <h1 className="text-center ">Update an Account</h1>
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
                  onClick={(e) => handleUpdate(e)}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminUpdate
