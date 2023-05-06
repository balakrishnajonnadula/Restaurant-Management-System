import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import itemsService from "../services/itemsService";

const AdminViewItem = () => {
  const { id } = useParams();
  const [viewItem, setViewItem] = useState();
  console.log(id);
  useEffect(() => {
    itemsService.getItem(id).then((res) => setViewItem(res.data));
  }, []);

  console.log(viewItem);
  return (
    <div className="container" style={{ height: "82.5vh" }}>
      <div className="row">
        {viewItem != null ? (
          <div className="col-lg-3 col-md-9 col-sm-12 my-5">
            <div className="mx-5">
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
          <div className="col-lg-7 col-md-9 col-sm-12 my-5">
            <div>
              <h4>Item id : {viewItem.id}</h4>
              <h2 className="text-uppercase">{viewItem.title}</h2>
              <h4 className="mt-3">Category : {viewItem.category_name}</h4>

              <h6 className="mt-3">{viewItem.description}</h6>
              <h5>Price : ₹&nbsp;{viewItem.price}</h5>
              
            </div>
            <div className="mt-5">
              <Link
                className=" px-4 py-1 bg-primary"
                style={{
                  textDecoration: "none",
                  color: "white",
                  borderRadius: "1rem",
                }}
                to={"/admin/itemlist/update/" + viewItem.id}
              >
                Update
              </Link>
              <Link
                className=" mx-5 px-4 py-1 bg-danger"
                style={{
                  textDecoration: "none",
                  color: "white",
                  borderRadius: "1rem",
                }}
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
};

export default AdminViewItem;
