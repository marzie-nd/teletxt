import React from 'react'
import { useState, useEffect } from 'react';
import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';

const ChatBox = ({user, chatHistory, onSendMessage}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
      setMessages(chatHistory[user] || [user]);
    }, [user, chatHistory]);

  return (
    <div className='chatbox'>
      <div className='chatUser'>
        {user}
      </div>
      <ChatHistory message={messages} user={user} />
      <MessageInput onSendMessage={(message) => onSendMessage(message, user)} />
    </div>
  )
}

export default ChatBox
