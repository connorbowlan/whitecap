import logoIcon from "../img/logo-icon.png";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img className="h-10" src={logoIcon} alt="WhiteCap Energy Logo" />
        </div>
        <ul className="flex space-x-4">
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              About
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Services
            </a>
          </li>
          <li>
            <a className="text-white hover:text-gray-300" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
