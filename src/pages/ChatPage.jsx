import React from "react";
import UserList from "../components/UsersList";
import ChatBox from "../components/ChatBox";
import BackImg from "../img/back.png";

const ChatPage = ({
  selectedUser,
  users,
  onUserChange,
  chatHistory,
  onSendMessage,
  onBack,
}) => {
  if (!selectedUser) {
    return (
      <div>
        <UserList users={users} onUserChange={onUserChange} />
      </div>
    );
  }

  return (
    <div className="chatPage">
      <div className="navbarChat">
        <button onClick={onBack} className="backButton">
          <img src={BackImg} alt="back" />
        </button>
        {selectedUser}
      </div>
      <ChatBox
        user={selectedUser}
        chatHistory={chatHistory}
        onSendMessage={onSendMessage}
      />
    </div>
  );
};

export default ChatPage;
