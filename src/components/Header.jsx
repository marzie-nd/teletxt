import React from 'react';
import './Header.scss';

const Header = ({ children }) => {
  return (
    <header className="customHeader">
      {children}
    </header>
  );
};

export default Header;

