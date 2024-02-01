import React from 'react';
import ImageBack from '../images/back.png';
import "./Back.scss";

function Back({ onClick }) {
  return (
    <div className="backButton" onClick={onClick}>
      <img src={ImageBack} alt='Back' />
    </div>
  );
}

export default Back;
