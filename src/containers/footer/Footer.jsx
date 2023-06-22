import React from 'react';
import whitecapLogo from '../../assets/horizontal-logo.png';
import './footer.css';

const Footer = () => (
  <div className="whitecap__footer section__padding">
    <div className="whitecap__footer-heading">
      <h1 className="gradient__text">Do you want to step into the future before others?</h1>
    </div>

    <div className="whitecap__footer-btn">
      <p>Request Access</p>
    </div>

    <div className="whitecap__footer-links">
      <div className="whitecap__footer-links_logo">
        
        <img src={whitecapLogo} alt="whitecap_logo" />
        <p>Address, <br /> All Rights Reserved</p>
      </div>
      <div className="whitecap__footer-links_div">
        <h4>Links</h4>
        <p>Over ons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="whitecap__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="whitecap__footer-links_div">
        <h4>Get in touch</h4>
        <p>Address</p>
        <p>085-132567</p>
        <p>info@payme.net</p>
      </div>
    </div>

    <div className="whitecap__footer-copyright">
      <p>@2023 WhiteCap. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
