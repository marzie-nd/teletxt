import BackButton from "./BackButton";
import "./Header.scss";

const Header = ({ headerTitle, onBack, toggleVisible }) => {

  return (
    <div className="header">
        {toggleVisible && <BackButton onBack={onBack}/>}
      <div>{headerTitle}</div>
    </div>
  );
};

export default Header;
