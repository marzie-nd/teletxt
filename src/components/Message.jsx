import { useState } from 'react';
const Message = () => {

  const [message, setMessage] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="message">
      <div className="messageContent">
        <p>Lorem ipsum dolor sit, amet consectetur</p>
      </div>
    </div>
  )
}
export default Message;
