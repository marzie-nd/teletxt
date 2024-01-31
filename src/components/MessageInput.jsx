import { useState } from "react";
import "./MessageInput.scss";
import Img from "../img/send.png";

const MessageInput = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };
  return (
    <div className="wrapper">
      <div className="messageInput" style={{ borderButtom: "1px solid red" }}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Type a message..."
          style={{
            borderBottom: "none",
          }}
        />
        <button
          onClick={() => {
            onSendMessage(newMessage);
            setNewMessage("");
          }}
          style={{
            backgroundColor: "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Img}
            alt="send"
            style={{ width: "20px", position: "absolute" }}
          />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
