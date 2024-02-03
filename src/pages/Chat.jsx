import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ImageSend from '../images/send.png';
import "./Chat.scss";
import MessageThread from '../components/MessageThread';
import Back from "../components/Back";
import Header from "../components/Header";

const Chat = () => {
    const { chatId } = useParams();
    const navigate = useNavigate();

    const currentUserId = 1;
    const senderName = "Alice";

    const conversation = [
        { senderId: 1, text: "Hey, how are you?", isRead: true },
        { senderId: 2, text: "I'm good, thanks! How about you?", isRead: true },
        { senderId: 1, text: "Doing pretty well, just been busy with work.", isRead: true },
        { senderId: 2, text: "I know the feeling. Any big projects lately?", isRead: true },
        { senderId: 1, text: "Yeah, working on a new web application for a client.", isRead: true },
        { senderId: 2, text: "That sounds exciting! What's it about?", isRead: true },
        { senderId: 1, text: "It's a platform for event management.", isRead: true },
        { senderId: 2, text: "Sounds like a useful tool.", isRead: true },
        { senderId: 1, text: "Definitely, it's been challenging but rewarding.", isRead: true },
        { senderId: 2, text: "Can't wait to see it once it's done.", isRead: true },
        { senderId: 1, text: "I'll definitely give you a demo.", isRead: true },
        { senderId: 2, text: "Looking forward to it. How's everything else?", isRead: true },
        { senderId: 1, text: "All good. Been trying to get more exercise lately.", isRead: true },
        { senderId: 2, text: "That's great! What kind of exercise?", isRead: true },
        { senderId: 1, text: "Mostly running and some cycling.", isRead: true },
        { senderId: 2, text: "Nice, I've been getting into hiking myself.", isRead: true },
        { senderId: 1, text: "Hiking is fantastic. Where do you usually go?", isRead: true },
        { senderId: 2, text: "There are some great trails just outside the city.", isRead: true },
        { senderId: 1, text: "Would love to join you sometime.", isRead: false },
        // { senderId: 2, text: "Absolutely, let's plan for that!", isRead: false }
    ];

    const handleBack = () => {
        navigate(`/chats`);
    };

    return (
        <div className="chatContainer">
            <Header>
                <h1 className="headerTitle">{senderName}</h1>
                <Back onClick={handleBack} />
            </Header>
            <MessageThread messages={conversation} currentUserId={currentUserId} senderName={senderName} />
            <div className="messageInput">
                <input type="text" placeholder="Type a message..." />
                <img src={ImageSend} alt="Send" className="sendIcon" />
            </div>
        </div>
    );
};

export default Chat;