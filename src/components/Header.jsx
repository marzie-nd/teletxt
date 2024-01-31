import Back from "./Back";
import "./Header.scss";

const Header = ({ headerTitle, onBack, toggleVisible }) => {

  return (
    <div className="header">
      {toggleVisible && <Back onBack={onBack}/>}
      <div>{headerTitle}</div>
    </div>
  );
};

export default Header;
