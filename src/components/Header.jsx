import "./Header.scss";

const Header = ({ children }) => {

  return (
    <div className="header">
      {children}
    </div>
  );
};

export default Header;
