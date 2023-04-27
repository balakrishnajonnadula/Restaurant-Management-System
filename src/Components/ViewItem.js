import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsService from "../services/itemsService";
import "../styles/viewitem.css";

const ViewItem = () => {
  const { id } = useParams();
  const [viewItem, setViewItem] = useState();

  useEffect(() => {
    itemsService.getItem(id).then((res) => setViewItem(res.data));
  }, []);

  console.log(viewItem);
  return (
    <div className="container">
      <div className="row">
        {viewItem != null ? (
          <div className="col-lg-4 col-md-3 col-sm-12 my-5">
            <div className="">
              <img
                src={viewItem.image}
                className="img-fluid"
                alt={viewItem.title}
                title={viewItem.title}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </div>
        ) : (
          console.log()
        )}
        {viewItem != null ? (
          <div className="col-lg-8 col-md-9 col-sm-12 my-5">
            <div>
              <h2 className="text-uppercase">{viewItem.title}</h2>
              <h3>₹ {viewItem.price}</h3>
              <h6>{viewItem.description}</h6>
              <button className="view-button my-4">Add to Cart</button>
            </div>
          </div>
        ) : (
          console.log()
        )}
      </div>
    </div>
  );
};

export default ViewItem;
