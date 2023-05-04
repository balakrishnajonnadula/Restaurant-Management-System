import React, { useEffect, useState } from "react";
import categoriesService from "../services/categoriesService";
import "../styles/categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
<<<<<<< HEAD
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        categoriesService.getCategories().then(res=> setCategories(res.data));
    }, []);
    const navigate = useNavigate();
=======
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    categoriesService.getCategories().then((res) => setCategories(res.data));
  }, []);
  const navigate = useNavigate();
>>>>>>> origin/master

  const handleItem = (e, slug) => {
    e.preventDefault();
    navigate(`/listitems/${slug}`);
  };

  // console.log(categories);
  return (
    <div className="container-fluid">
      <div className="row">
        {categories &&
          categories.map((item, index) => (
            <div className="col-lg-3 col-md-4 col-sm-12 p-0" key={index}>
              <div
                className="m-5 mt-4"
                onClick={(e) => {
                  handleItem(e, item.slug);
                }}
              >
                <div className=" text-center">
                  <img
                    src={item.image}
                    alt={item.slug}
                    className="image image-fluid"
                    width={"75%"}
                  />
                </div>
                {/* height={"220px"} width={"240px"} */}
                <div className="mt-2">
                  <h4 className="text-center">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Categories;
