import "./navbar.css";

import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../../assets/logo.png";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="whitecap__navbar">
      <div className="whitecap__navbar-links">
        <div className="whitecap__navbar-links_logo">
          <img src={logo} alt="WhiteCap Logo" />
        </div>
        <div className="whitecap__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whitecap">Who is WhiteCap?</a>
          </p>
          <p>
            <a href="#possibility">Natural Gas</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>
      <div className="whitecap__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="whitecap__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="whitecap__navbar-menu_container scale-up-center">
            <div className="whitecap__navbar-menu_container-links">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#about">About Us</a>
              </p>
              <p>
                <a href="#services">Our Services</a>
              </p>
              <p>
                <a href="#products">Products</a>
              </p>
              <p>
                <a href="#contact">Contact Us</a>
              </p>
            </div>

            <div className="whitecap__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
