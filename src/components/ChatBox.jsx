import { useState, useEffect } from "react";

const ChatBox = ({ user, chatHistory }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    setMessages(chatHistory[user] || [])
  }, [user, chatHistory]);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const updatedMessage = [...messages, {text: newMessage, user}];
      setMessages(updatedMessage);
      chatHistory[user] = updatedMessage;
      setNewMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatBox">
      <div>
        {messages.map((message, index) => (
          <div key={index}>{message.text}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>

    </div>
  );
};

export default ChatBox;
