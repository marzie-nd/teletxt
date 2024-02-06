import React from 'react';

const Message = ({ text, timeStamp, isSender }) => {

    let time = new Date(timeStamp);
    time = time.toLocaleString();
    const [hours, minutes] = time.split(' ')[1].split(':');
    time = `${hours}:${minutes}`;
    console.log(time);
    
    return (
        <div className={`message ${isSender ? 'sender' : 'receiver'}`}>
            <p>{text}</p>
            <span>{time}</span>
        </div>
    );
};

export default Message;