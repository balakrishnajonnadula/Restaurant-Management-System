import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import itemsService from "../services/itemsService";
import "../styles/viewitem.css"

const ViewItem = () => {
  const { id } = useParams();
  const [viewItem, setViewItem] = useState();

  const [reviews, setReviews] = useState([]);
  const [custReview, setCustReview] = useState("");
  useEffect(() => {
    itemsService.getItem(id).then((res) => setViewItem(res.data));

    itemsService.getReviews().then(res => setReviews(res.data));
  }, []);



  const handleReview = (e) => {
    e.preventDefault();
    let date = new Date();
    let reviewDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    let rew = {
      item: id,
      rslug: viewItem.category_slug,
      review: custReview,
      posted_on: reviewDate
    }
    // console.log(rew);
    itemsService.postReview(rew).catch(err => alert(err));
  }

  console.log(viewItem);
  console.log("Review : ", reviews)
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
      <div className="my-3  bg-light p-5">
        <h3 className="fs-3 fw-bold mb-3">Reviews</h3>
        <textarea
          style={{ height: "100px" }}
          placeholder="Write something here"
          className="p-3"
          onChange={(e) => {
            setCustReview(e.target.value);
          }}
        />
        <div className="d-flex justify-content-end">
          <button
            className="custom-btn py-1 px-5 fs-5"
            onClick={(e) => {
              handleReview(e)
            }}
          >
            Submit
          </button>
        </div>
        <div className="mt-3">
          {
            (reviews.length > 0) ? ((reviews.map((item, index) => (item.item == id) ? (<div className="row mt-5">
              <div className="col-lg-1 col-md-2 col-sm-3">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibvKJtq-VzB2zyyrotYleT2adJX0VWLN20j36MuEN6ld2ghuDqnavfiYINs3d7PjjHs8&usqp=CAU" alt="userimg" height={"40px"} width={"40px"} style={{ borderRadius: "16rem" }} />
              </div>
              <div className="col-lg-11 col-md-10 col-sm-9">
                <p className="pe-5">{item.review}</p>
              </div>

            </div>) : (console.log("sorry"))))) : (console.log("no data"))
          }

        </div>
      </div>
    </div>
  );
};

{/*  */ }

export default ViewItem;
