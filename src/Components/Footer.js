import React from "react";
import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid py-5 bg-dark">
      <div className="py-5">
        <div className="row">
          <div className="col-lg-4 col-md-12 col-sm-12 px-5">
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">
                    <Link to={"/"}>Home</Link>
                  </p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/color/20/null/whatsapp--v1.png"
                    alt="whatsapp"
                  />
                </div>
              </div>
            </div>
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">About Us</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/fluency/20/null/facebook-new.png"
                    alt="facebook"
                  />
                </div>
              </div>
            </div>
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">Book a table</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/fluency/20/null/instagram-new.png"
                    alt="instagram"
                  />
                </div>
              </div>
            </div>
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text"><Link to={"/categories"}>Order Food</Link></p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/fluency/20/null/pinterest.png"
                    alt="Pinterest"
                  />
                </div>
              </div>
            </div>
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">Reviews</p>
                </div>
                <div>
                  <img
                    src="https://img.icons8.com/fluency/20/null/twitter.png"
                    alt="twitter"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">
                    Street: Shop 3, Darbar Mkt, D Silva Road, Darbar(w)
                  </p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">City Mumbai</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">Street/area : Maharastra</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">Zip code 400028</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="bg_color" >
                    phone number +91 9966003344
                  </p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="bg_color">yellochilliresturants@gamil.com</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <div className="d-block text-white px-5">
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">
                    Street: Shop 3, Darbar Mkt, D Silva Road, Darbar(w)
                  </p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">City Mumbai</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">Street/area : Maharastra</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className="form-text">Zip code 400028</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className=" bg_color">phone number +91 9966003344</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <p className=" bg_color">yellochilliresturants@gamil.com</p>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <p className="form-text">&copy; Copyright to yellochilliresturants</p>
      </div>
    </div>
  );
};

export default Footer;
