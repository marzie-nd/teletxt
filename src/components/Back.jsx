import Img from '../img/back.png';
import "./Back.scss"

const Back = ({ onBack }) => {
  return (
    <div className="back">
        <img onClick={onBack}
          src={Img}
          alt='back'
        />
    </div>
  );
};

export default Back;
