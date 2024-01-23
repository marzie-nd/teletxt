import ChatBox from "./ChatBox";
import Navbar from "./Navbar";
import Search from "./Search";
import UsersList from "./UsersList";
import { useState } from "react";

const Sidebar = () => {

  const users = ['Ahmad', 'maman', 'milad'];
  const [selectedUser, setSelectedUser] = useState([users[0]]);
  const [chatHistory, setChatHistory] = useState({});

  const handleUserChange = (user) => {
    setSelectedUser(user);
  }

  const handleSendMessage = (message, user) => {
    const updateMessage = [...chatHistory[user], { text: message, user}];
    setChatHistory({
      ...chatHistory,
      [user]: updateMessage
    })
  }

  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <UsersList users={users} selectedUser={selectedUser} onUserChange={handleUserChange} />
      <ChatBox user={selectedUser} chatHistory={chatHistory} onSendMessage={handleSendMessage } />
    </div>
  );
};

export default Sidebar;
