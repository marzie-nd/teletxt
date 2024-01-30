import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Search from "../components/Search";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

import "./Chats.scss";

const Chats = () => {
  const users = ["ahmad", "milad", "maman"];
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [chatHistory, setChatHistory] = useState({});

  const handleUserChange = (user) => {
    if (!chatHistory[user]) {
      setChatHistory({
        ...chatHistory,
        [user]: []
      });
    }
    setSelectedUser(user);
  };

  const handleSendMessage = (message, user) => {
    const updatedMessages = [...chatHistory[user], {text: message, user}];
    setChatHistory({
      ...chatHistory,
      [user]: updatedMessages
    })
  }

  return (
    <div className="chats">
      <Header />
      <Search />
      <ChatList users={users} selectedUser={selectedUser} onUserChange={handleUserChange} />
      <ChatBox user={selectedUser} chatHistory={chatHistory} onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chats;
