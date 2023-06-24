import "./navigation.css";

import { navLinks } from "../../assets/layoutConstants";

function VerticalNav() {
  return (
    <div className="navigation">
      <div className="mobile-menu">
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
    </div>
  );
}

export default VerticalNav;
