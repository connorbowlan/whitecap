import "./navigation.css";

import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import HorziontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";
import logo from "../../images/layout/logo.png";
import { useState } from "react";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="gradient-bg">
      <div className="logo">
        <img src={logo} alt="WhiteCap Logo" />
      </div>

      <HorziontalNav />

      <div className="mobile-menu-icon">
        {toggleMenu ? (
          <div>
            <RiCloseLine
              color="#ffffff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
            <VerticalNav />
          </div>
        ) : (
          <RiMenu3Line
            color="#ffffff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
