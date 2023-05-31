import NavItem from "./subcomponents/NavItem";
import logoIcon from "../img/logo-icon.png";
import { navItems } from "../assets/constants";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-10" src={logoIcon} alt="WhiteCap Energy Logo" />
        </div>
        <ul className="flex space-x-4">
          {navItems.map((navItem) => (
            <NavItem path={navItem.path} text={navItem.text} />
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
