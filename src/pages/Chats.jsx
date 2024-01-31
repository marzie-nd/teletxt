import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Search from "../components/Search";
import ChatPage from "../components/ChatPage";
import { useState } from "react";

import "./Chats.scss";

const Chats = () => {
  const users = ["ahmad", "milad", "maman"];
  const [selectedUser, setSelectedUser] = useState(null);
  const [chatHistory, setChatHistory] = useState({});
  const [isVisible, setIsVisible] = useState(true);

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

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  }

  return (
    <div className="chats">
      {selectedUser ? (
        <>
          <Header headerTitle={selectedUser} onBack={handleBack} toggleVisible={toggleVisible}  />
          <ChatPage
            selectedUser={selectedUser}
            users={users}
            onUserChange={handleUserChange}
            chatHistory={chatHistory}
            onSendMessage={handleSendMessage}
            // onBack={handleBack}
          />
        </>
      ) : (
        <>
          <Header headerTitle="TeLeTxt" onBack={`{style: display:"none"}`} />
          <Search />
          <ChatList users={users} onUserChange={handleUserChange} />
        </>
      )}
    </div>
  );
};

export default Chats;
