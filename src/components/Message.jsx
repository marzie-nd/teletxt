import React from 'react';
import './Message.scss';

const Message = ({ text, timeStamp, isSender }) => {

    const [hours, minutes] = timeStamp.split(' ')[4].split(':');
    const time = `${hours}:${minutes}`;
    console.log(time);
    
    return (
        <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
            <p>{text}</p>
            <span>{time}</span>
        </div>
    );
};

export default Message;