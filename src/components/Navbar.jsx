// import NavItem from "./subcomponents/NavItem";
// import logoIcon from "../img/logo-icon.png";
// import { navItems } from "../assets/constants";
// import React from "react";


// function Navbar() {
//   return (
//     <nav className="bg-gray-800 py-4">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex items-center">
//           <img className="h-10" src={logoIcon} alt="WhiteCap Energy Logo" />
//         </div>
//         <ul className="flex space-x-4">
//           {navItems.map((navItem) => (
//             <NavItem path={navItem.path} text={navItem.text} />
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;



import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

