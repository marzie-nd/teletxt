import { NavLink } from "react-router-dom";
import Menu from "../img/menu.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={Menu} alt="Menu" width="30vw" />
        <div className="logo">TeLeTxt</div>
      </div>
      <ul className="navItems">
        <li>
          <NavLink to='/chats'>Chats</NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
