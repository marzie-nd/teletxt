import Img from '../img/send.png';

const Input = () => {
  return (
    <div className="input">
      <input placeholder="Type a message ..." />

      <button>
        <img src={Img} alt="send" />
      </button>
    </div>
  )
}

export default Input;
