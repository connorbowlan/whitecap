import "./navigation.css";

import { navLinks } from "../../assets/layoutConstants";

function HorziontalNav() {
  return (
    <div className="navigation">
      <div class="desktop-menu">
        <ul>
          {navLinks.map((item) => (
            <li>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HorziontalNav;
