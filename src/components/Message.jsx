import React from 'react';
import './Message.scss';

const Message = ({ text, timeStamp, isSender }) => {

    let date = new Date (timeStamp);
    date = `${date.getHours()}:${date.getMinutes()}`;
    console.log(date);
    

    return (
        <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
            <p>{text}</p>
            <span>{date}</span>
        </div>
    );
};

export default Message;