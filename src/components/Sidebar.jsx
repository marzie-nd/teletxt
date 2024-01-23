import ChatPage from "../pages/ChatPage";
import ChatBox from "./ChatBox";
import Navbar from "./Navbar";
import Search from "./Search";
import UsersList from "./UsersList";
import { useState } from "react";

const Sidebar = () => {
  const users = ["Ahmad", "maman", "milad"];
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
    const updateMessage = [...chatHistory[user], { text: message, user }];
    setChatHistory({
      ...chatHistory,
      [user]: updateMessage,
    });
  };

  return (
    <div className="sidebar">
      <div>
        {selectedUser ? (
          <ChatPage
            selectedUser={selectedUser}
            users={users}
            onUserChange={handleUserChange}
            chatHistory={chatHistory}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div>
            <Navbar />
            <Search />
            <UsersList users={users} onUserChange={handleUserChange} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
