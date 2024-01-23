import { useState } from 'react';

const MessageInput = ({onSendMessage}) => {

    const [newMessage, setNewMessage] = useState('');

    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onSendMessage(newMessage);
            setNewMessage('');
        }
    }

  return (
    <div className='messageInput'>
      <input
        type='text'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyPress}
    />
    <button onClick={() => onSendMessage(newMessage)}>Send</button>
    </div>
  )
}

export default MessageInput