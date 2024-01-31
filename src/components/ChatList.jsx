import AddUser from "../components/AddUser";
import "./ChatList.scss";

const ChatList = ({ users, selectedUser, onUserChange, onAddUser }) => {
  return (
    <div className="chatList">
      {users.map((user) => (
        <div
          key={user}
          className={`userItem ${user === selectedUser ? "selected" : ""}`}
          onClick={() => onUserChange(user)}
        >
          <h4>{user}</h4>
        </div>
      ))}
      <AddUser onAddUser={onAddUser} />
    </div>
  );
};

export default ChatList;
