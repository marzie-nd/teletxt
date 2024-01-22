import React from 'react'
import { useState } from 'react';

const ChatBox = ({user}) => {

    const [messages, setMessages] = useState([]);

  return (
    <div className='chatbox'>
      <div className='chatUser'>
        {user}
      </div>
      <div className='displayMessage'>
        {
            messages.map((message, index) => (
                <div key={index}>
                    {message.user}: {message.text}
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ChatBox
