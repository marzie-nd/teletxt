import { useState } from 'react';
import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';

const ChatPage = ({ user, selectedUser }) => {
  const [messages, setMessages] = useState([]);
  
  return (
    <div className='chatPage'>
      <h2>{selectedUser}</h2>
      <ChatHistory messages={messages} user={user} />
      <MessageInput />
    </div>
  )
}

export default ChatPage
