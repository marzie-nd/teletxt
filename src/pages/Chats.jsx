import { useState } from "react";
import ChatList from "../components/ChatList";
import ChatPage from "../components/ChatPage";
import Header from "../components/Header";
import Search from "../components/Search";
import Back from "../components/Back"
import "./Chats.scss";

const Chats = () => {
  const [users, setUsers] = useState(["ahmad", "milad", "maman"]);
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
  };

  const toggleVisible = () => {
    setIsVisible(!isVisible);
  };

  const handleAddUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  const handleDeleteUser = (userToDelete) => {
    const newUser = users.filter((user) => user !== userToDelete);
    setUsers(newUser);

    const { [userToDelete]: deletedUserHistory, ...remainingChatHistory } = chatHistory;
    setChatHistory(remainingChatHistory);

    if (selectedUser === userToDelete) {
      setSelectedUser(null);
    }
  }

  return (
    <div className="chats">
      {selectedUser ? (
        <>
          <Header>
            <Back onClick={handleBack}></Back>
            <h1>{selectedUser}</h1>
          </Header>
          <ChatPage
            selectedUser={selectedUser}
            users={users}
            onUserChange={handleUserChange}
            chatHistory={chatHistory}
            onSendMessage={handleSendMessage}
          />
        </>
      ) : (
        <>
          <Header><h1>TeleTxt</h1></Header>
          <Search />
          <ChatList
            users={users}
            selectedUser={selectedUser}
            onUserChange={handleUserChange}
            onAddUser={handleAddUser}
            onDeleteUser={handleDeleteUser}
          />
        </>
      )}
    </div>
  );
};

export default Chats;
