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
            <h3>Categories List</h3>
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
                  <th>Item</th>
                  <th>Image</th>
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
                      <td>{item.title}</td>
                      <td>
                        <img
                          className="image"
                          src={item.image}
                          alt={item.slug}
                          width={"70px"}
                          height={"70px"}
                          style={{ borderRadius: "18rem" }}
                        />
                      </td>
                      <td>{item.category_name}</td>
                      <td>₹{item.price}</td>
                      <td>
                        <Link
                          className="p-2 bg-primary"
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
