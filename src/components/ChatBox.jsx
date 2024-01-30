import { useState, useEffect } from "react";
import ChatHistory from './ChatHistory';
import MessageInput from './MessageInput';

const ChatBox = ({ user, chatHistory, onSendMessage }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(chatHistory[user] || [])
  }, [user, chatHistory]);

  return (
    <div className="chatBox">
      <ChatHistory messages={messages} user={user} />
      <MessageInput onSendMessage={(message) => onSendMessage(message, user)} />
    </div>
  );
};

export default ChatBox;
