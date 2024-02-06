import React from 'react';
import './Message.scss';

const Message = ({ text, timeStamp, isSender }) => {
    return (
        <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
            <p>{text}</p>
            <span>{timeStamp}</span>
        </div>
    );
};

export default Message;