function NavItem(props) {
  return (
    <li>
    <a className="text-white hover:text-gray-300" href={props.path}>
        {props.text}
      </a>
    </li>
  );
}

export default NavItem;
