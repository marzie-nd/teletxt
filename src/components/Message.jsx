import React from "react";
import './Message.scss';

const Message = ({ text, timeStamp, isSender }) => {
  let time = new Date(timeStamp);
  time = time.toLocaleString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });

  return (
    <div className={`message ${isSender ? "sender" : "receiver"}`}>
      <p>{text}</p>
      <span>{time}</span>
    </div>
  );
};

export default Message;
