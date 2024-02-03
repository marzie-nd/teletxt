import React from 'react';
import './Message.scss';

const Message = ({ text, isSender, isRead }) => {
    return (
        <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
            <p>{text}</p>
            {isSender && !isRead && <span>✓</span>}
            {isSender && isRead && <span>✓✓</span>}
        </div>
    );
};

export default Message;