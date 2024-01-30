import { useState } from 'react'
import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';

const ChatBox = ({ user }) => {
const [messages, setMessages] = useState([]);

  return (
    <div className='chatBox'>
      <h2>{user}</h2>
      <ChatHistory user={user} messages={messages} />
      <MessageInput />
    </div>
  )
}

export default ChatBox
