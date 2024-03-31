import React from "react";
import './App1.css'
const Features = () => {
  return (
    <>
      <div className="container pb-4" style={{ marginTop: "6rem",height:'100%' }}>
        <div className="row">
          <div className="col-12 col-md-6" >
            <div className="">
              <img src="/images/illustration2.jpg" className="illustration2" />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-5">
            <div className="pt-5" style={{height:'414px'}}>
                <h5 className="features-head ">We Provide Many Features You Can Use</h5>
                <h5 className="features-para">You can explore the features that we provide with fun and have their own functions each feature.</h5>
                 <div className="d-flex align-items-center">
                    <img src="/images/check.jpg" className="check-img" alt="check"/>
                    <h5 className="feature-list">Powerfull online protection.</h5>
                 </div>
                 <div className="d-flex align-items-center">
                    <img src="/images/check.jpg" className="check-img" alt="check"/>
                    <h5 className="feature-list">Internet without borders.</h5>
                 </div>
                 <div className="d-flex align-items-center">
                    <img src="/images/check.jpg" className="check-img" alt="check"/>
                    <h5 className="feature-list">Supercharged VPN</h5>
                 </div>
                 <div className="d-flex align-items-center">
                    <img src="/images/check.jpg" className="check-img" alt="check"/>
                    <h5 className="feature-list">No specific time limits.</h5>
                 </div>
             
               </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
