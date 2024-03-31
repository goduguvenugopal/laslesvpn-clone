import React from "react";
import "./App1.css";

const Prices = () => {
  return (
    <>
      <div className="container  mt-4" id="prices-main">
        <div className="row">
          <div className="col-12 pt-5">
            <div className=" ">
              <h5 className="prices-heading">Choose Your Plan</h5>
              <p className="price-para">
                Let's choose the package that is best for you and explore it
                happily and cheerfully.
              </p>
            </div>
          </div>
          <div className="prices-cont-div">
            <div className="col col-md-4">
              <div className="prices-card">
                <div style={{height:'25rem'}} className="">
                    <img src="/images/Free.jpg" className="free-img" />
                <h5 className="free-text">Free Plan</h5> 
         
               <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Unlimited Bandwitch.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Encrypted Connection.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">No Traffic Logs.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Works on All Devices.</h5>
                </div>
               
                </div>
                <div className="">
                  <h5 className="free">Free</h5>
                <button className="free-bt">Select</button></div>
                 
              </div>
            </div>
            <div className="col col-md-4">
              <div className="prices-card">
              <div className="" style={{height:'25rem'}}>
                    <img src="/images/standard.jpg" className="free-img" />
                <h5 className="free-text">Standard plan</h5> 
         
               <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">unlimited Bandwitch.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Encrypted Connection.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Yes Traffic Logs.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Works on All Devices.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Connect Anywhere.</h5>
                </div>
               
                </div>
                <div className="">
                  <h5 className="free"><b>$9 </b>/ mo</h5>
                <button className="free-bt">Select</button></div>
              </div>
            </div>
            <div className="col col-md-4">
              <div className="prices-card">
              <div className="" style={{height:'25rem'}}>
                    <img src="/images/Premium.jpg" className="free-img" />
                <h5 className="free-text">Premium Plan</h5> 
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">unlimited Bandwitch.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Encrypted Connection.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Yes Traffic Logs.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Works on All Devices.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Connect Anywhere.</h5>
                </div>
                <div className="d-flex align-items-center">
                  <img
                    src="/images/check2.jpg"
                    className="check-img"
                    alt="check"
                  />
                  <h5 className="free-list">Get New features.</h5>
                </div>
              
               
                </div>
                <div className="">
                  <h5 className="free"><b>$12 </b>/ mo</h5>
                <button className="free-bt">Select</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prices;
