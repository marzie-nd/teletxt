import ChatList from "../components/ChatList";
import Header from "../components/Header";
import Search from "../components/Search";
import ChatPage from "../components/ChatPage";
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
        {selectedUser ? (
          <ChatPage user={selectedUser} />
        ) : (
          <ChatList users={users} hasUnread={true} />
        )}
      </div>
    </div>
  );
};

export default Chats;
