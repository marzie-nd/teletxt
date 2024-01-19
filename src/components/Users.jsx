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

      <Link to={{}} onClick={onchatToggle}>
        <div className="userChat">
          <div className="userChatInfo">
            <div className="user">maman</div>
            <p>miss you</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Users;
