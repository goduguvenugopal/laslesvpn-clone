import React from "react";
import './App2.css'

const Locations = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 pb-5">
           <h4 className="global-heading">Huge Global Network <br/>of Fast VPN</h4>
         <p className="global-para">See LaslesVPN everywhere to make it easier for you when you move <br/>locations.</p>
          </div>
          <div className="col-12 pt-4">
            <img src="/images/global.jpg" alt="location" className="global-img w-100"/>
          </div>
          <div className="col-12 pt-4">
            <img src="/images/Sponsored.jpg" alt="location" className="global-im w-100"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
