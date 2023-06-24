import "./navbar.css";

import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import logo from "../../assets/logo.png";
import { navLinks } from "../../assets/layoutConstants";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gradient-bg">
      <div className="logo">
        <img src={logo} alt="WhiteCap Logo" />
      </div>

      <div class="desktop-menu">
        <ul>
          {navLinks.map((item) => (
            <li>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div> */}

      <div className="mobile-menu">
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
      </div>
      {toggleMenu && (
        <div className="mobile-links">
          <ul>
            {navLinks.map((item) => (
              <li>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
          </ul>

          {/* <div className="navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div> */}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
