import React from 'react';
import Message from './Message'; 
import './MessageThread.scss';

const MessageThread = ({ messages, currentUserId, senderName }) => {
    return (
        <div className="messageThread">
            {messages.map(msg => (
                <div className={`messageContainer ${msg.senderId === currentUserId ? 'sender' : 'receiver'}`}>
                    {msg.senderId !== currentUserId && <span className="senderName">{senderName}</span>}
                    <Message text={msg.text} isSender={msg.senderId === currentUserId} isRead={msg.isRead} />
                </div>
            ))}
        </div>
    );
};

export default MessageThread;
