import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Search from "../components/Search";
import ChatPage from "../components/ChatPage";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

import "./Chats.scss";

const Chats = () => {
  const [users, setUsers] = useState(["ahmad", "milad", "maman"]);
  const [selectedUser, setSelectedUser] = useState(users[0]);
  const [chatPage, setChatPage] = useState({});
  const [chatHistory, setChatHistory] = useState({});

  const handleUserChange = (user) => {
    if (!chatPage[user]) {
      setChatPage({
        ...chatPage,
        [user]: <ChatBox key={user} user={user} chatHistory={chatHistory} />,
      });
    }
    setSelectedUser(user);
  };

  return (
    <div className="chats">
      <Header />
      <Search />
      <div>
        <div>
          {users.map((user) => (
            <div
              key={user}
              value={user}
              className={`userItem ${user === selectedUser ? "selected" : ""}`}
              onClick={() => handleUserChange(user)}
            >
              {user}
            </div>
          ))}
        </div>
      </div>
      {chatPage[selectedUser]}
    </div>
  );
};

export default Chats;
