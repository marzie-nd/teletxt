import "./ChatItem.scss";

const ChatItem = ({ users, name, hasUnread, children }) => {
  return (
    <div className="chatItem">
      {users.map((user) => (
        <div key={user} className="userItem">
          <div>{user}</div>
          <div style={{ fontWeight: hasUnread ? "bold" : "normal" }}>
            {children}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatItem;
