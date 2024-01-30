import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Search from "../components/Search";
import ChatBox from "../components/ChatBox";
import ChatPage from "../components/ChatPage";
import { useState } from "react";

import "./Chats.scss";

const Chats = () => {
  const users = ["ahmad", "milad", "maman"];
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatHistory, setChatHistory] = useState({});

  const handleUserChange = (user) => {
    if (!chatHistory[user]) {
      setChatHistory({
        ...chatHistory,
        [user]: [],
      });
    }
    setSelectedUser(user);
  };

  const handleSendMessage = (message, user) => {
    const updatedMessages = [...chatHistory[user], { text: message, user }];
    setChatHistory({
      ...chatHistory,
      [user]: updatedMessages,
    });
  };

  const handleBack = () => {
    setSelectedUser(null);
  }

  return (
    <div className="chats">
      {selectedUser ? (
        <>
          <Header headerTitle={selectedUser} />

          <ChatPage
            selectedUser={selectedUser}
            users={users}
            onUserChange={handleUserChange}
            chatHistory={chatHistory}
            onSendMessage={handleSendMessage}
            onBack={handleBack}
          />
        </>
      ) : (
        <>
          <Header headerTitle="TeLeTxt" />
          <Search />
          <ChatList users={users} onUserChange={handleUserChange} />
        </>
      )}
    </div>
  );
};

export default Chats;
