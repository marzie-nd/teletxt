import { useState } from 'react'
import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';

const ChatBox = ({ user }) => {
const [messages, setMessages] = useState([]);
const [newMessage, setNewMessage] = useState('');

const handleSendMessage = () => {
  if (newMessage.trim() !== '') {
    setMessages([...messages, {text:newMessage}]);
    setNewMessage('');
  }
}

  return (
    <div className='chatBox'>
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <div>
        <input type='text' value={newMessage} onChange={(e) => setNewMessage(e.target.value)} />
        <button onClick={handleSendMessage}>Send</button>
      </div>



      {/* <h2>{user}</h2>
      <ChatHistory user={user} messages={messages} />
      <MessageInput /> */}
    </div>
  )
}

export default ChatBox
