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
    let date = new Date().toUTCString();

    const conversation = [
        { senderId: 1, text: "Hey, how are you?", timeStamp: date },
        { senderId: 2, text: "I'm good, thanks! How about you?", timeStamp: date },
        { senderId: 1, text: "Doing pretty well, just been busy with work.", timeStamp: date },
        { senderId: 2, text: "I know the feeling. Any big projects lately?", timeStamp: date },
        { senderId: 1, text: "Yeah, working on a new web application for a client.", timeStamp: date },
        { senderId: 2, text: "That sounds exciting! What's it about?", timeStamp: date },
        { senderId: 1, text: "It's a platform for event management.", timeStamp: date },
        { senderId: 2, text: "Sounds like a useful tool.", timeStamp: date },
        { senderId: 1, text: "Definitely, it's been challenging but rewarding.", timeStamp: date },
        { senderId: 2, text: "Can't wait to see it once it's done.", timeStamp: date },
        { senderId: 1, text: "I'll definitely give you a demo.", timeStamp: date },
        { senderId: 2, text: "Looking forward to it. How's everything else?", timeStamp: date },
        { senderId: 1, text: "All good. Been trying to get more exercise lately.", timeStamp: date },
        { senderId: 2, text: "That's great! What kind of exercise?", timeStamp: date },
        { senderId: 1, text: "Mostly running and some cycling.", timeStamp: date },
        { senderId: 2, text: "Nice, I've been getting into hiking myself.", timeStamp: date },
        { senderId: 1, text: "Hiking is fantastic. Where do you usually go?", timeStamp: date },
        { senderId: 2, text: "There are some great trails just outside the city.", timeStamp: date },
        { senderId: 1, text: "Would love to join you sometime.", timeStamp: date },
        { senderId: 2, text: "Absolutely, let's plan for that!", timeStamp: date }
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