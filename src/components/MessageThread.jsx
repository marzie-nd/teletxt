import React from 'react';
import Message from './Message'; // Assuming Message.js is in the same directory
import './MessageThread.scss';

const MessageThread = ({ messages, currentUserId, senderName }) => {
    return (
        <div className="message-thread">
            {messages.map(msg => (
                <div className={`message-container ${currentUserId !== msg.senderId ? 'sender' : 'receiver'}`}>
                    {currentUserId !== msg.senderId && (<span className="sender-name">{senderName}</span>)}
                    <Message text={msg.text} isSender={msg.senderId === currentUserId} />
                </div>
            ))}
        </div>
    );
};

export default MessageThread;
