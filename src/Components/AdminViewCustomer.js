import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import userService from "../services/userService";

const AdminViewCustomer = () => {
  const { id } = useParams();

  const [userData, setUserData] = useState();
  console.log(id);

  useEffect(() => {
    userService.getUserById(id).then((res) => setUserData(res.data));
  }, []);

  return (
    <div className="container" style={{ height: "82.5vh" }}>
      <div>
        <div>
          <h1>General Info</h1>
        </div>
        <hr />
        {userData != null ? (
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12">
              <div>
                <img
                  src="https://img.icons8.com/bubbles/250/null/user.png"
                  alt={userData.username}
                />
              </div>
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <div>
                <div className="mt-3 d-flex ">
                  <div>
                    <h6>User Id &emsp;:</h6>
                  </div>
                  <div>
                    <h6 className="ps-3">{userData.id}</h6>
                  </div>
                </div>
                <div className="mt-3 d-flex">
                  <div>
                    <h6> Username &emsp;:</h6>
                  </div>
                  <div>
                    <h6 className="ps-3">{userData.username}</h6>
                  </div>
                </div>
                <div className="mt-3 d-flex">
                  <div>
                    <h6> Email &emsp;:</h6>
                  </div>
                  <div>
                    <h6 className="ps-3">{userData.email}</h6>
                  </div>
                </div>
                <div className="mt-3 d-flex">
                  <div>
                    <h6> DOJ &emsp;:</h6>
                  </div>
                  <div>
                    <h6 className="ps-3">{userData.date_joined.substring(0,10)}</h6>
                  </div>
                </div>
                <div className="mt-3 d-flex">
                  <div>
                    <h6> Role &emsp;:</h6>
                  </div>
                  <div>
                    <h6 className="ps-3">{(userData.is_superuser)?("Admin"):("Customer")}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          console.log()
        )}
      </div>
    </div>
  );
};

export default AdminViewCustomer;
