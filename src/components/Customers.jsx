import React, { useRef } from "react";
import "./App2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Customers = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="container pb-5">
        <div className="">
          <h5 className="customers-heading">
            Trusted by Thousands of
            <br /> Happy Customer
          </h5>
          <p className="customers-para">
            These are the stories of our customers who have joined us with great
            <br />
            pleasure when using this crazy feature.
          </p>
        </div>
        <div className="slider-container container">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <div className="slider-card p-4">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src="/images/customer3.jpg"
                    className="customer-img"
                    alt=""
                  />
                  <div className="d-flex flex-column mt-1">
                    <h5 className="customer-name">Viezh Robert</h5>
                    <h5 className="customer-para">Warsaw, Poland</h5>
                  </div>
                </div>
                <div className="d-flex ">
                  <h4 className="custo-rating">4.5</h4>
                  <img src="/images/star.jpg" alt="" className="star-img" />
                </div>
              </div>
              <div className="pt-4">
                <h4 className="comment-text">
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </h4>
              </div>
            </div>
            <div className="slider-card p-4">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src="/images/customer2.jpg"
                    className="customer-img"
                    alt=""
                  />
                  <div className="d-flex flex-column mt-1">
                    <h5 className="customer-name">Kim Young Jou</h5>
                    <h5 className="customer-para">Seoul, South Korea</h5>
                  </div>
                </div>
                <div className="d-flex ">
                  <h4 className="custo-rating">4.5</h4>
                  <img src="/images/star.jpg" alt="" className="star-img" />
                </div>
              </div>
              <div className="pt-4">
                <h4 className="comment-text">
                  {" "}
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </h4>
              </div>
            </div>
            <div className="slider-card p-4">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src="/images/customer1.jpg"
                    className="customer-img"
                    alt=""
                  />
                  <div className="d-flex flex-column mt-1">
                    <h5 className="customer-name">Yessica Christy</h5>
                    <h5 className="customer-para">Shanxi, China</h5>
                  </div>
                </div>
                <div className="d-flex ">
                  <h4 className="custo-rating">4.5</h4>
                  <img src="/images/star.jpg" alt="" className="star-img" />
                </div>
              </div>
              <div className="pt-4">
                <h4 className="comment-text">
                
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </h4>
              </div>
            </div>
            <div className="slider-card p-4">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src="/images/customer3.jpg"
                    className="customer-img"
                    alt=""
                  />
                  <div className="d-flex flex-column mt-1">
                    <h5 className="customer-name">Viezh Robert</h5>
                    <h5 className="customer-para">Warsaw, Poland</h5>
                  </div>
                </div>
                <div className="d-flex ">
                  <h4 className="custo-rating">4.5</h4>
                  <img src="/images/star.jpg" alt="" className="star-img" />
                </div>
              </div>
              <div className="pt-4">
                <h4 className="comment-text">
                  “Wow... I am very happy to use this VPN, it turned out to be
                  more than my expectations and so far there have been no
                  problems. LaslesVPN always the best”.
                </h4>
              </div>
            </div>
            <div className="slider-card p-4">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src="/images/customer2.jpg"
                    className="customer-img"
                    alt=""
                  />
                  <div className="d-flex flex-column mt-1">
                    <h5 className="customer-name">Kim Young Jou</h5>
                    <h5 className="customer-para">Seoul, South Korea</h5>
                  </div>
                </div>
                <div className="d-flex ">
                  <h4 className="custo-rating">4.5</h4>
                  <img src="/images/star.jpg" alt="" className="star-img" />
                </div>
              </div>
              <div className="pt-4">
                <h4 className="comment-text">
                  “This is very unusual for my business that currently requires
                  a virtual private network that has high security.”.
                </h4>
              </div>
            </div>
            <div className="slider-card p-4">
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex">
                  <img
                    src="/images/customer1.jpg"
                    className="customer-img"
                    alt=""
                  />
                  <div className="d-flex flex-column mt-1">
                    <h5 className="customer-name">Yessica Christy</h5>
                    <h5 className="customer-para">Shanxi, China</h5>
                  </div>
                </div>
                <div className="d-flex ">
                  <h4 className="custo-rating">4.5</h4>
                  <img src="/images/star.jpg" alt="" className="star-img" />
                </div>
              </div>
              <div className="pt-4">
                <h4 className="comment-text">
                  “I like it because I like to travel far and still can connect
                  with high speed.”.
                </h4>
              </div>
            </div>
          </Slider>
        </div>
        <div className="pt-2" style={{ textAlign: "center" }}>
          <img
            onClick={previous}
            src="/images/left.jpg"
            alt=""
            className="left-bt"
            id="left-bt"
          />
          <img src="/images/right.jpg" alt="" className="right-bt" onClick={next} />
        </div>
        <div className="px-5 mt-5  shadow  subscribe-main-card">
          <div className="">
            <h5 className="subscribe-heading">
              Subscribe Now for
              <br /> Get Special Features!
            </h5>
            <h5 className="subscribe-para">
              Let's subscribe with us and find the fun.
            </h5>
          </div>
          <button className="subscribe-btn">Subscribe Now</button>
        </div>
      </div>
    </>
  );
};

export default Customers;
