import React from 'react';
import Message from './Message'; 
import './MessageThread.scss';

const MessageThread = ({ messages, currentUserId, senderName }) => {
    return (
        <div className="messageThread">
            {messages.map(msg => (
                <div className={`messageContainer ${msg.senderId === currentUserId ? 'sender' : 'receiver'}`}>
                    {msg.senderId !== currentUserId && <span className="senderName">{senderName}</span>}
                    <Message text={msg.text} timeStamp={msg.timeStamp} isSender={msg.senderId === currentUserId} />
                </div>
            ))}
        </div>
    );
};

export default MessageThread;
