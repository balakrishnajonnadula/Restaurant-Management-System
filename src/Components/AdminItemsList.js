import React, { useEffect, useState } from "react";
import itemsService from "../services/itemsService";
import $ from "jquery";
import { Link } from "react-router-dom";
const AdminItemsList = () => {
  const [itemsList, setItemsList] = useState([]);

  const getItemsList = async () => {
    await itemsService.getItemsList().then((res) => setItemsList(res.data));
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };
  console.log(itemsList);
  useEffect(() => {
    getItemsList();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="d-flex justify-content-between">
          <div>
            <h3>Items List</h3>
          </div>
          <div>
            <div>
              <button
                className="btn btn-dark"
                style={{ borderRadius: "18rem" }}
              >
                &nbsp;Add Item
              </button>
            </div>
          </div>
        </div>

        <div className="card my-3">
          <div className="card-body my-3">
            <table id="example" className="">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Category Name</th>
                  <th>Price ₹</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {itemsList &&
                  itemsList.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>
                        <img
                          className=""
                          src={item.image}
                          alt={item.slug}
                          width={"70px"}
                          height={"70px"}
                          // style={{ borderRadius: "18rem" }}
                        />
                      </td>
                        <td>{item.title}</td>
                      <td>{item.category_name}</td>
                      <td>₹&nbsp;{item.price}</td>
                      <td>
                        <Link
                          className="px-3 py-1 bg-primary"
                          style={{ textDecoration: "none" ,color:'white',borderRadius:'1rem'}}
                          to={"/admin/itemlist/view/" + item.id}
                        >
                          View
                        </Link>
                      </td>
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

export default AdminItemsList;
