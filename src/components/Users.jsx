import { NavLink } from "react-router-dom";

const Users = ({ onChatToggle, username }) => {

  return (
    <div className="users">
      <NavLink to={username} onClick={onChatToggle} className='navLink'>
        <div className="userChat">
          <div className="userChatInfo">
            <div className="user">{username}</div>
            <p>ok, see you</p>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Users;
