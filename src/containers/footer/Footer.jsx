import "./footer.css";

import React from "react";
import whitecapLogo from "../../assets/logo.png";

const Footer = () => (
  <div className="footer section__padding">
    <div className="footer-heading">
      <h1 className="gradient__text">
        Do you want to step into the future before others?
      </h1>
    </div>

    <div className="footer-btn">
      <p>Request Access</p>
    </div>

    <div className="footer-links">
      <div className="footer-links_logo">
        <img src={whitecapLogo} alt="whitecap_logo" />
        <p>
          Address, <br /> All Rights Reserved
        </p>
      </div>
      <div className="footer-links_div">
        <h4>Links</h4>
        <p>Over ons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="footer-links_div">
        <h4>Get in touch</h4>
        <p>5030 N May Ave #123, Oklahoma CIty, OK 73112</p>
        <p>405-384-7189</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>@2023 WhiteCap. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
