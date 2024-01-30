import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Search from "../components/Search";
import ChatPage from "../components/ChatPage";
import ChatBox from "../components/ChatBox";
import { useState } from "react";

import "./Chats.scss";

const Chats = () => {
  const [users, setUsers] = useState(["ahmad", "milad", "maman"]);
  const [selectedUser, setSelectedUser] = useState(null); 

  return (
    <div className="chats">
      <Header />
      <Search />
      <div>
        {users.map((user) => (
          <ChatBox key={user} user={user} />
        ))}
        
        {/* {selectedUser ? (
          <ChatPage users={users} selectedUser={selectedUser} />
        ) : (
          <ChatList users={users} hasUnread={true} />
        )} */}
      </div>
    </div>
  );
};

export default Chats;
