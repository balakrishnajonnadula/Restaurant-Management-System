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

  // console.log(items);

  const handleDetails = (e, id) => {
    e.preventDefault()
    navigate(`/viewitem/${id}`)

  }

  return (
    <div className="container-fluid">
      
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
              (item.category_slug == slug) ? (<div className="col-lg-3 col-md-4 col-sm-12 " key={index}>
                <div className=" text-center my-5">
                  <div className=" ">
                    <div className="border_box  pt-4 pb-3 mx-2" >

                      <img
                        className="image"
                        src={item.image}
                        alt={item.slug}
                        width={"100px"}
                        height={"100px"}
                        style={{ borderRadius: '18rem' }}
                      />

                      <div className="background pb-3" >
                        <br/>
                        <h5 className="form-text px-3">{item.title}</h5>
                        <h5 className="form-text">₹ {item.price}</h5>
                        <button className="custom-btn w-50 py-1" onClick={(e) => { handleDetails(e, item.id) }}>Details</button>

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
