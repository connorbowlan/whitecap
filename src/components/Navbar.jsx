import NavItems from "./subcomponents/NavItems";
import horizontalLogo from "../img/logos/horizontal-logo.png";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-10" src={horizontalLogo} alt="WhiteCap Energy Logo" />
        </div>

        <NavItems />
      </div>
    </nav>
  );
}

export default Navbar;
