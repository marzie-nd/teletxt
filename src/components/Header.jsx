import BackButton from "./BackButton";
import "./Header.scss";

const Header = ({ headerTitle, onBack, toggleVisible }) => {

  return (
    <div className="header">
      <div>{headerTitle}</div>
      {toggleVisible && <BackButton onBack={onBack}/>}
    </div>
  );
};

export default Header;
