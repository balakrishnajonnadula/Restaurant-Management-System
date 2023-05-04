import React, { useEffect, useState } from "react";
import categoriesService from "../services/categoriesService";
import $ from "jquery";
import { Link } from "react-router-dom";
const AdminCategories = () => {
  const [categories, setCategories] = useState([]);

  const getCategoriesList = async () => {
    await categoriesService
      .getCategories()
      .then((res) => setCategories(res.data));
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  };
  console.log(categories);
  useEffect(() => {
    getCategoriesList();
  }, []);

  return (
    <div>
      <div className="container" style={{ height: "100%" }}>
        <div className="d-flex justify-content-between">
          <div>
            <h3>Customers List</h3>
          </div>
          <div>
            <button className="btn btn-dark" style={{ borderRadius: "18rem" }}>
              &nbsp;Add Category
            </button>
          </div>
        </div>
        <div className="card mt-3">
          <div className="card-body">
            <table id="example" className="">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Category Name</th>
                  <th>image</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((cat, index) => (
                    <tr key={index}>
                      <td>{cat.id}</td>
                      <td>{cat.name}</td>

                      <td>
                        {" "}
                        <img
                          className="image"
                          src={cat.image}
                          alt={cat.slug}
                          width={"100px"}
                          height={"100px"}
                          style={{ borderRadius: "18rem" }}
                        />
                      </td>
                      <td>
                        <Link
                          className="p-2 bg-primary"
                          style={{ textDecoration: "none",color:'white' ,borderRadius:'10px'}}
                          to={"/admin/categories/view/" + cat.id}
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

export default AdminCategories;
