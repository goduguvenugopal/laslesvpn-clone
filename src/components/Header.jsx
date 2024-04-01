import React from "react";
import "../App.css";

const Header = () => {
  return (
    <>
      <div style={{ marginTop: "110px" }} className="container ">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="header-card">
              <h4 className="header-txt">
                Want anything to be easy with
                <span className="span-text"> LaslesVPN</span>
              </h4>
              <h6 className="sub-head">
                Provide a network foe all your needs with ease and fun using
                <span className="sub-span-text"> LaslesVPN</span> discover
                interesting features from us
              </h6>

              <button className=" start-bt">Get Started</button>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="">
              <img
                src="/images/Illustration1.jpg"
                alt="illustration"
                className="illustration1"
              />
            </div>
          </div>
        </div>

        <div
          style={{ marginTop: "6rem" }}
          className="row py-3 shadow rounded-3"
        >
          <div className="col-12 col-md-4">
            <div className="sub-head-card">
              <div className="d-flex">
                <img src="/images/user.jpg" className="user-img" alt="" />
                <div style={{ height: "60px", width: "54px" }} className="">
                  <h5 className="rating-text">90+</h5>
                  <h5 className="servers-text">Users</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="sub-head-card">
              <div className="d-flex">
                <img src="/images/location.jpg" className="user-img" alt="" />
                <div className="" style={{ height: "60px", width: "54px" }}>
                  <h5 className="rating-text">30+</h5>
                  <h5 className="servers-text">Locations</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div
              className="sub-head-card"
              style={{ borderRight: "none", borderBottom: "none" }}
            >
              <div className="d-flex">
                <img src="/images/server.jpg" className="user-img" alt="" />
                <div className="" style={{ height: "60px", width: "54px" }}>
                  <h5 className="rating-text">50+</h5>
                  <h5 className="servers-text">Servers</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
