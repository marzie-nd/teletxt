import AddUser from "./AddUser";
import DeleteUser from "./DeleteUser";
import "./ChatList.scss";

const ChatList = ({ users, selectedUser, onUserChange, onAddUser, onDeleteUser }) => {
  return (
    <div className="chatList">
      {users.map((user) => (
        <div
          key={user}
          className={`userItem ${user === selectedUser ? "selected" : ""}`}
          onClick={() => onUserChange(user)}
        >
          <h4>{user}</h4>
          <DeleteUser user={user} onDeleteUser={onDeleteUser} />
        </div>
      ))}
      <AddUser onAddUser={onAddUser} />
    </div>
  );
};

export default ChatList;
