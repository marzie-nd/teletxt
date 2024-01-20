import { NavLink } from "react-router-dom";
import Menu from "../img/menu.png";

const Navbar = ({children}) => {
  const navItem = [
    { path: "chats", name: "Chats" },
    { path: "contacts", name: "Contacts" },
  ];

  return (
    <div className="navbar">
      <div className="container">
        <img src={Menu} alt="Menu" width="30vw" />
        <div className="logo">TeLeTxt</div>
      </div>
      <div className="navItem">
        {navItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="navLink"
          >
            <div>{item.name}</div>
          </NavLink>
        ))}
      </div>

      <main>
        {children}
      </main>
      
    </div>
  );
};

export default Navbar;
