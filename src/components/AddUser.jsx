import ImageAdd from "../images/add.png";
import './AddUser.scss';

const AddUser = (onClick) => {
  return (
    <div className="AddUser">
      <div className="AddButton" onClick={onClick}>
        <img src={ImageAdd} alt="Add user" />
      </div>
    </div>
  );
};

export default AddUser;
