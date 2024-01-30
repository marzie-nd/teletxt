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

  const handleUserChange = (user) => {
    if(!chatPage[user]) {
      setChatPage({
        ...chatPage, [user]: <ChatBox key={user} user={user} />
      })
    }
    setSelectedUser(user);
  }

  return (
    <div className="chats">
      <Header />
      <Search />
      <div>
        <select value={selectedUser} onChange={(e) => handleUserChange(e.target.value)}>
        {users.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
        </select>
        </div>
          {chatPage[selectedUser]}
    </div>
  );
};

export default Chats;

{/* {selectedUser ? (
  <ChatPage users={users} selectedUser={selectedUser} />
) : (
  <ChatList users={users} hasUnread={true} />
)} */}