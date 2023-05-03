import React, { useEffect, useState } from "react";
import userService from "../services/userService";

//jquery
import "/node_modules/jquery/dist/jquery.min.js";
//Datatable Modules
import "/node_modules/datatables.net-dt/js/dataTables.dataTables";
import "/node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

const AdminCustomers = () => {
  const [users, setUsers] = useState([]);

  let listOfUsers = [];

  const getUserList = async () => {
    await userService.getUsers().then((res) => setUsers(res.data));
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };
  useEffect(() => {
    getUserList();
  }, []);

  users.map((user) =>
    user.is_superuser === false ? listOfUsers.push(user) : console.log()
  );
  console.log("Users : ", listOfUsers);
  return (
    <div>
      <div className="container">
        <div className="card my-5">
          <div className="card-header">
            <h3>Customers List</h3>
          </div>
          <div className="card-body">
            <table id="example" className="">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Date Of Join</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {listOfUsers &&
                  listOfUsers.map((user, index) => (
                    <tr key={index}>
                      <th>{user.id}</th>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.date_joined.substring(0, 10)}</td>
                      <td>view</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomers;
