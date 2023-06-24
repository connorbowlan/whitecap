import "./navigation.css";

import { navLinks } from "../../assets/layoutConstants";

function VerticalNav() {
  return (
    <div className="navigation">
      <div className="mobile-menu">
        <ul>
          {navLinks.map((item) => (
            <li key={item.id}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default VerticalNav;
