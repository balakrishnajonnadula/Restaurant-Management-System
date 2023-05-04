import React, { useEffect, useState } from "react";

//jquery
import "/node_modules/jquery/dist/jquery.min.js";
//Datatable Modules
import "/node_modules/datatables.net-dt/js/dataTables.dataTables";
import "/node_modules/datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import itemsService from "../services/itemsService";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);

  const ordersList = [];

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = async () => {
    await itemsService.viewCartItems().then((res) => setOrders(res.data));
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };
  orders.map((item) => {
    if (item.status === "Delivered") {
      ordersList.push(item);
    }
  });
  console.log(orders, "Orders");
  return (
    <div className="container">
      <div>
        <div className="d-flex justify-content-between">
          <div>
            <h3>Items List</h3>
          </div>
          <div>
            {/* <div>
              <button
                className="btn btn-dark"
                style={{ borderRadius: "18rem" }}
              >
                &nbsp;Add Item
              </button>
            </div> */}
          </div>
        </div>
      </div>
      <div>
        <div className="card mt-3">
          <div className="card-body">
            <table id="example">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Item</th>
                  <th>Item Name</th>
                  <th>Customer Name</th>
                  <th>Date</th>
                  <th>Quantity</th>
                  <th>Unit Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersList &&
                  ordersList.map((item) => (
                    <tr>
                      <th>{item.id}</th>
                      <td>
                        <img
                          src={item.item.image}
                          alt={item.item.title}
                          width={"70px"}
                          height={"70px"}
                        />
                      </td>
                      <td>{item.item.title}</td>
                      <td>{item.user.username}</td>
                      <td>{item.ordered_date.substring(0, 10)}</td>
                      <td>{item.quantity}</td>
                      <td>{item.item.price}</td>
                      <td>{item.status}</td>
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

export default AdminOrders;
