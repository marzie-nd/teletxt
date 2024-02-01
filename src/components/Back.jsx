import ImageBack from '../images/back.png';
import "./Back.scss";

const Back = ({ onClick }) => {
  return (
    <img className="back" onClick={onClick}
      src={ImageBack}
      alt='Back'
    />
  );
};

export default Back;
