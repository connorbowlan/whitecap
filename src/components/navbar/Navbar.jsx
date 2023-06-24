import "./navbar.css";

import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../../assets/logo.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gradient-bg">
      
      <div className="logo">
        <img src={logo} alt="WhiteCap Logo" />
      </div>
      
      <div class="horizontal-links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#whitecap">Information</a>
          </li>
          <li>
            <a href="#possibility">Natural Gas</a>
          </li>
          <li>
            <a href="#features">Case Studies</a>
          </li>
          <li>
            <a href="#blog">News</a>
          </li>
        </ul>
      </div>

      {/* <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}
      
      <div className="navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#ffffff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#ffffff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu_container">
            <div className="navbar-menu_container-links">
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#whitecap">Information</a>
                </li>
                <li>
                  <a href="#possibility">Natural Gas</a>
                </li>
                <li>
                  <a href="#features">Case Studies</a>
                </li>
                <li>
                  <a href="#blog">News</a>
                </li>
              </ul>
            </div>

            {/* <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div> */}
          </div>
        )}
      </div>
      
    </nav>
  );
}

export default Navbar;
