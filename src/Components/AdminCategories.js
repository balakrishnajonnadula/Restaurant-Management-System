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
            <h3>Categories List</h3>
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
                  <th>image</th>
                  <th>Category Name</th>
                  <th>View</th>
                </tr>
              </thead>
              <tbody>
                {categories &&
                  categories.map((cat, index) => (
                    <tr key={index}>
                      <td>{cat.id}</td>

                      <td>
                        {" "}
                        <img
                          className="image"
                          src={cat.image}
                          alt={cat.slug}
                          width={"70px"}
                          height={"70px"}
                          // style={{ borderRadius: "18rem" }}
                        />
                      </td>
                      <td>{cat.name}</td>
                      <td>
                        <Link
                          className=""
                          style={{ textDecoration: "none" }}
                          to={"/admin/categories/view/" + cat.id}
                        >
                          view
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
