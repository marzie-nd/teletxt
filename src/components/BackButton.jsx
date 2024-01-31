import React from "react";

const BackButton = ({ onBack }) => {
  return (
    <div>
      <button onClick={onBack}>back</button>
    </div>
  );
};

export default BackButton;
