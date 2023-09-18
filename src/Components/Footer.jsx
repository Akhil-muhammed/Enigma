import React from "react";
import "../Components/Footer.css";

function Footer() {
  return (
    <div className="big-footer">
      <div className="footer-img">
        <img src="https://www.tatacliq.com/src/experience-score-feedback/images/banner.svg" />
      </div>
      <div className="sub-big-footer">
        <div className="footer-text-div">
          <div className="text-div1">
            <span className="tata-head">Tata MarketPlace</span>
            <span className="tata-data">About Us</span>
            <span className="tata-data">Careers</span>
            <span className="tata-data">Sell With Us</span>
            <span className="tata-data">Terms of Use</span>
            <span className="tata-data">Privacy Policy</span>
            <span className="tata-data">Affiliates</span>
            <span className="tata-data">Sitemap</span>
          </div>

          <div className="text-div2">
            <span className="tata-head">Customer Service</span>
            <span className="tata-data">Shopping</span>
            <span className="tata-data">Offers & Promotions</span>
            <span className="tata-data">Payments</span>
            <span className="tata-data">Cancellation</span>
            <span className="tata-data">Returns & Refunds</span>
            <span className="tata-data">CliQ And PiQ</span>
            <span className="tata-data">Return To Store</span>
            <span className="tata-data">Electronics Return Policy</span>
            <span className="tata-data">Contact Us</span>
            <span className="tata-data">Reviews Guidelines</span>
            <span className="tata-data">Furniture Return Policy</span>
            <span className="tata-data">Replacement Policy</span>
          </div>

          <div className="text-div3">
            <span className="tata-head">My Tata CLiQ</span>
            <span className="tata-data">My Account</span>
            <span className="tata-data">My Orders</span>
            <span className="tata-data">My Shopping Bag</span>
            <span className="tata-data">My Wishlist</span>
          </div>

          <div className="text-div4">
            <span className="tata-head">Tata CLiQ Offerings</span>
            <span className="tata-data">Puma Caps</span>
          </div>
        </div>
      </div>

      <div className="footer-discription">
        <span>© 2023 Tata CLiQ | All rights reserved</span>
      </div>
      <div className="footer-lastpart">
        <span style={{ fontSize: "17px", fontWeight: "600" }}>
          More about online shopping at Tata CLiQ
        </span>
      </div>
    </div>
  );
}

export default Footer;
