import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/listitems.css";
import itemsService from "../services/itemsService";

const ListItems = () => {
  const { slug } = useParams();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  // console.log(slug);

  useEffect(() => {
    itemsService.getItemsList().then((res) => setItems(res.data));
  }, []);

  console.log(items);

  const handleDetails = (e, id) => {
    e.preventDefault()
    navigate(`/viewitem/${id}`)

  }

  return (
    <div className="container-fluid">
      <div className="container">
        <div className="my-4">
          <button className="text-success item-btn me-4">Veg</button>
          <button className="text-danger item-btn">Non-veg</button>
        </div>
      </div>
      <div className="container">
        <div className="my-4">
          <h3>Choose Items</h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {
            items &&
            items.map((item, index) =>
              (item.category_slug == slug) ? (<div className="col-lg-2 col-md-4 col-sm-12 " key={index}>
                <div className="box-item text-center my-5">
                  <div className="image-item shape ">
                    <div className="">
                      <img
                        className="img"
                        src={item.image}
                        alt={item.slug}
                        width={"100px"}
                        height={"100px"}
                      />
                      <div className="background pb-3">
                        <h6>{item.title}</h6>
                        <h6>₹ {item.price}</h6>
                        <button className="custom-btn w-75 py-1" onClick={(e) => { handleDetails(e, item.id) }}>Details</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>) : (console.log())
            )
          }
        </div>
      </div>
    </div>
  );
};

export default ListItems;
