import BackButton from "./BackButton";
import { useState } from 'react';
import "./Header.scss";

const Header = ({ headerTitle, onBack }) => {

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
      }

  return (
    <div className="header">
        <BackButton onBack={onBack}/>
      <div>{headerTitle}</div>
    </div>
  );
};

export default Header;
