import './ChatList.scss'

const ChatList = ({ users, name, hasUnread, children }) => {
  return (
    <div className="chatList">
      {users.map((user) => (
        <div key={user} className="userItem">
          <h4>{user}</h4>
          <div style={{ fontWeight: hasUnread ? "bold" : "normal" }}>
            {children}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatList;
