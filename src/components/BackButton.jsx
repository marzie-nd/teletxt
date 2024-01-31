import Img from '../img/up.png';

const BackButton = ({ onBack }) => {
  return (
    <div className="backButton">
      <button onClick={onBack} style={{backgroundColor: "transparent", padding: '0', margin: '0'}}>
        <img
        src={Img} 
        alt='back'
        style={{width: "35px"}}
        />
      </button>
    </div>
  );
};

export default BackButton;
