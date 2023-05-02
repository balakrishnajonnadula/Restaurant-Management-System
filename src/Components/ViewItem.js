import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import itemsService from "../services/itemsService";
import "../styles/viewitem.css";
import { toast } from "react-toastify";
import userService from "../services/userService";

const ViewItem = () => {
  const { id } = useParams();
  const [viewItem, setViewItem] = useState();

  const [reviews, setReviews] = useState([]);
  const [custReview, setCustReview] = useState("");

  const token = localStorage.getItem("token");
  // console.log("Token ",token);

  const [qty, setQty] = useState(1);
  const navigate = useNavigate();

  // console.log("Reviews : ", reviews);
  useEffect(() => {
    itemsService.getItem(id).then((res) => setViewItem(res.data));

    itemsService.getReviews().then((res) => setReviews(res.data));
  }, []);

  // console.log("reviews : ", viewItem);

  const handleReview = (e) => {
    if (token != null) {
      e.preventDefault();

      let date = new Date();
      let reviewDate =
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

      let rew = {
        item: id,
        rslug: viewItem.slug,
        review: custReview,
        posted_on: reviewDate,
      };
      if (custReview.length > 3) {
        userService
          .reviewItem(rew)
          .then(toast.success("Review Submitted"))
          .then(navigate(`/listitems/${viewItem.category_slug}`))
          .catch((err) => toast.error(err));
      } else {
        toast.error("Content is required to post review");
      }
    } else {
      toast.error("User must be login to review");
      navigate("/login");
    }
  };

  const handleItem = (e) => {
    if (token != null) {
      e.preventDefault();
      let addItem = {
        item_id: viewItem.id,
        ordered: true,
        quantity: qty,
        status: "Active",
      };

      itemsService
        .addToCart(addItem)
        .then(toast.success("Item added to cart"))
        .catch((err) => toast.error(err));

      navigate(`/listitems/${viewItem.category_slug}`);
      window.location.reload();
    } else {
      toast.error("User must be login");
      navigate("/login");
    }
  };

  const handleDec = (e) => {
    e.preventDefault();
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const handleInc = (e) => {
    e.preventDefault();
    if (qty < 15) {
      setQty(qty + 1);
    }
  };

  // console.log(viewItem);
  // console.log("Review : ", reviews);
  return (
    <div className="container">
      {/* View Item */}
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
              <div className="d-flex justify-content-start">
                <div className="me-5">
                  <h4>Quantity</h4>
                </div>
                <div className="input-group mb-3 w-25">
                  <button
                    className="btn btn-danger fw-bold"
                    onClick={(e) => {
                      handleDec(e);
                    }}
                  >
                    -
                  </button>
                  {/* <span className="input-group-text">First and last name</span> */}
                  <input
                    type="text"
                    aria-label="Last name"
                    className="form-control w-25 text-center"
                    value={qty}
                    readOnly
                    // onChange={(e) => {
                    //   setQty(e.target.value);
                    // }}
                  />
                  <button
                    className="btn btn-success fw-bold"
                    onClick={(e) => {
                      handleInc(e);
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
              </div>
              <h6>{viewItem.description}</h6>
              <button
                className="view-button my-4"
                onClick={(e) => {
                  handleItem(e);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          console.log()
        )}
      </div>

      {/* Post review */}
      <div className="my-3  bg-light p-5">
        <h3 className="fs-3 fw-bold mb-3">Reviews</h3>
        <textarea
          style={{ height: "100px", width: "100%" }}
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
              handleReview(e);
            }}
          >
            Submit
          </button>
        </div>

        {/* Customer Reviews */}
        <div className="mt-3">
          {reviews.length > 0
            ? reviews.map((item, index) =>
                item.item == id ? (
                  <div className="row mt-5" key={index}>
                    <div className="col-lg-1 col-md-2 col-sm-3">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSibvKJtq-VzB2zyyrotYleT2adJX0VWLN20j36MuEN6ld2ghuDqnavfiYINs3d7PjjHs8&usqp=CAU"
                        alt="userimg"
                        height={"40px"}
                        width={"40px"}
                        style={{ borderRadius: "16rem" }}
                      />
                    </div>
                    <div className="col-lg-11 col-md-10 col-sm-9">
                      <p className="pe-5">{item.review}</p>
                    </div>
                  </div>
                ) : (
                  console.log()
                )
              )
            : console.log()}
        </div>
      </div>
    </div>
  );
};

export default ViewItem;
