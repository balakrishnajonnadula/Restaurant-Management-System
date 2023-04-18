import React from "react";
import banner_one from "../assets/esperanza-doronila-Xns5s92Ipcc-unsplash-min.jpg";
import banner_two from "../assets/fabrizio-pullara-XTJjULuMBBo-unsplash-min.jpg";
import banner_three from "../assets/louis-hansel-DEYK2ecXLUg-unsplash-min.jpg";
import banner_four from "../assets/shreyak-singh-gFB1IPmH6RE-unsplash-min.jpg";
import chef from "../assets/chef.jpg";
import table from "../assets/table.jpg";
import plate from "../assets/plate.jpg";
import "../styles/categories.css";

import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const MainPage = () => {

  const navigate = useNavigate();
  return (
    <div>
      {/* Carousal */}
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img
              src={banner_one}
              className="d-block "
              width={"100%"}
              height={"700px"}
              alt=""
            />
          </div>
          <div className="carousel-item" data-bs-interval="1000">
            <img
              src={banner_two}
              className="d-block "
              width={"100%"}
              height={"700px"}
              alt=""
            />
          </div>
          <div className="carousel-item"  data-bs-interval="1000">
            <img
              src={banner_three}
              className="d-block "
              width={"100%"}
              height={"700px"}
              alt=""
            />
          </div>
          <div className="carousel-item"  data-bs-interval="1000">
            <img
              src={banner_four}
              className="d-block "
              width={"100%"}
              height={"700px"}
              alt=""
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* Our Story */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 bg-dark text-white">
            <div className="pt-4 px-3">
              <h1>Our Story</h1>
            </div>
            <div className="py-5 px-3">
              <p className="fs-5">
                In a professional context it often happens that private or
                corporate clients corder a publication to be made and presented
                with the actual content still not being ready. Think of a news
                blog that's filled with content hourly on the day of going live.
                However, reviewers tend to be distracted by comprehensible
                content, say, a random text copied from a newspaper or the
                internet. The are likely to focus on the text, disregarding the
                layout and its elements. Besides, random text risks to be
                unintendedly humorous or offensive, an unacceptable risk in
                corporate environments. Lorem ipsum and its many variants have
                been employed since the early 1960ies, and quite likely since
                the sixteenth century.Do you like Cheese Whiz? Spray tan? Fake
                eyelashes? That's what is Lorem Ipsum to many—it rubs them the
                wrong way, all the way. It's unreal, uncanny, makes you wonder
                if something is wrong, it seems to seek your attention for all
                the wrong reasons. Usually, we prefer the real thing, wine
                without sulfur based preservatives, real butter, not margarine,
                and so we'd like our layouts and designs to be filled with real
                words, with thoughts that count, information that has value.
                Cicero famously orated against his political opponent Lucius
                Sergius Catilina.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 bg-dark">
            <img
              src={chef}
              alt="chef"
              className="img-fluid p-5"
              width={"100%"}
              height={"30%"}
            />
          </div>
        </div>
      </div>
      {/* Table and order */}
      <div className="container-fluid">
        <div className="my-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="my-5">
                <div className="d-flex justify-content-center">
                  <div className="">
                    <img
                      className="text-center image"
                      src={table}
                      alt="table book"
                      width={"239px"}
                      height={"239px"}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <div>
                    <button className="button">Book a table</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="my-5">
                <div className="d-flex justify-content-center">
                  <div className="">
                    <img
                      className="text-center image "
                      src={plate}
                      alt="table book"
                      width={"239px"}
                      height={"239px"}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-center my-4">
                  <div>
                    <button className="button" onClick={()=>{navigate("/categories")}}>Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
