import { useState } from 'react';
import ChatBox from './ChatBox';

const ChatPage = ({ users, selectedUser }) => {
  
  return (
    <div className='chatPage'>
      <h2>{selectedUser}</h2>
      <ChatBox user={selectedUser} />      
    </div>
  )
}

export default ChatPage
