import "./footer.css";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { navLinks } from "../../assets/layoutConstants";

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
        <h4>Navigation</h4>
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4>Company</h4>
        <ul>
          <li>
            <Link to="/t&c">Terms & Conditions</Link>
          </li>
          <li>
            <Link to="/privacy-policy">Privacy Policy</Link>
          </li>
        </ul>
      </div>

      <div>
        <h4>Get in Touch</h4>
        <p>5030 N May Ave #123
          <br/>
          Oklahoma CIty, OK 73112</p>
        <p>405-384-7189</p>
        <p>
          <a href="mailto:info@wcngs.com">info@wcngs.com</a>
        </p>
      </div>
    </div>

    <div className="footer-copyright">
      <span>Copyright 2023 WhiteCap. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer;
