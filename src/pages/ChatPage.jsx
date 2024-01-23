import React from 'react';
import UserList from '../components/UsersList';
import ChatBox from '../components/ChatBox';

const ChatPage = ({ selectedUser, users, onUserChange, chatHistory, onSendMessage, onBack }) => {
  if (!selectedUser) {
    return (
      <div>
        <UserList users={users} onUserChange={onUserChange} />
      </div>
    );
  }

  return (
    <div>
      <h1>{selectedUser}'s Chat</h1>
      <ChatBox user={selectedUser} chatHistory={chatHistory} onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatPage;
