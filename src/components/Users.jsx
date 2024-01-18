import { Link } from "react-router-dom";

const Users = ({ onchatToggle }) => {

  return (
    <div className="users">
      <Link to={{}} onClick={onchatToggle}>
        <div className="userChat">
          <div className="userChatInfo">
            <div className="user">Ahmad</div>
            <p>ok, see you</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Users;
