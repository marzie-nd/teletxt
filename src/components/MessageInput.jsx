import { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };
  return (
    <div className="messageInput">
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type a message..."
      />
      <button
        onClick={() => {
          onSendMessage(newMessage);
          setNewMessage("");
        }}
      >
        send
      </button>
    </div>
  );
};

export default MessageInput;
