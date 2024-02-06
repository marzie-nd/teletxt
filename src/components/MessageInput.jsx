import React from "react";
import "./MessageInput.scss";
import ImageSend from "../images/send.png";

const MessageInput = () => {
  return (
    <div className="messageInput">
      <input type="text" placeholder="Type a message..." />
      <img src={ImageSend} alt="Send" className="sendIcon" />
    </div>
  );
};

export default MessageInput;
