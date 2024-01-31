import Img from '../img/back.png';
import "./Back.scss"

const Back = ({ onClick }) => {
  return (
    <div className="back">
        <img onClick={onClick}
          src={Img}
          alt='back'
        />
    </div>
  );
};

export default Back;
