import { navItems } from "../../assets/constants";

function NavItems() {
  return (
    <ul className="flex space-x-4">
      {navItems.map((navItem) => (
        <li>
          <a className="text-white hover:text-gray-300" href={navItem.path}>
            {navItem.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavItems;
