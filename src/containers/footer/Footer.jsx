import "./footer.css";

import logo from "../../assets/logo.png";

const Footer = () => (
  <footer className="section-padding">
    {/* <div className="footer-heading">
      <h1 className="gradient-text">
        Do you want to step into the future before others?
      </h1>
    </div> */}

    <div className="columns">
      <div className="logo">
        <img src={logo} alt="WhiteCap Logo" />
      </div>

      <div>
        <h4>Links</h4>
        <p>Over ons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>

      <div>
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
      </div>

      <div>
        <h4>Get in touch</h4>
        <p>5030 N May Ave #123, Oklahoma CIty, OK 73112</p>
        <p>405-384-7189</p>
        <p>
          <a href="mailto:info@wcngs.com">info@wcngs.com</a>
        </p>
      </div>
    </div>

    <div className="footer-copyright">
      <p>Copyright 2023 WhiteCap. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
