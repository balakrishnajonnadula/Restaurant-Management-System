import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import categoriesService from "../services/categoriesService";
import { Link } from "react-router-dom";

const AdminViewCategory = () => {
  const { id } = useParams();

  const [category, setCategory] = useState([]);
  useEffect(() => {
    categoriesService
      .getCategoriesById(id)
      .then((res) => setCategory(res.data));
  }, []);

  return (
    <div className='container' style={{ height: "82.5vh" }}>
      <div className="row">
        {category != null ? (
          <div className="col-lg-3 col-md-9 col-sm-12 my-5">
            <div className="mx-5">
              <img
                src={category.image}
                className="img-fluid"
                alt={category.title}
                title={category.title}
                width={"100%"}
                height={"100%"}
              />
            </div>

          </div>
        ) : (
          console.log()
        )}
        {category != null ? (
          <div className="col-lg-7 col-md-9 col-sm-12 my-5">
            <div >
              <h2 className="text-uppercase">{category.name}</h2>
              <h6 className="mt-3">{category.description}</h6>
            </div>
            <div className='mt-5'>
              <Link className="p-2 bg-success"
                style={{ textDecoration: "none", color: 'white', borderRadius: '1rem' }}
                to={"/admin/categories/update/"+category.id}>
                Update
              </Link>
              <Link
                className=" mx-5 p-2 bg-danger"
                style={{ textDecoration: "none", color: 'white', borderRadius: '1rem' }}
                to={"/admin/itemlist/view/"}
              >
                Delete
              </Link>
            </div>
          </div>
        ) : (
          console.log()
        )}
      </div>
    </div>

  );
}


export default AdminViewCategory;
