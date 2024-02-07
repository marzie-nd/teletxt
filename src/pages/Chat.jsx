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
        { senderId: 1, text: "Hey, how are you?", timeStamp: 14182940000 },
        { senderId: 2, text: "I'm good, thanks! How about you?", timeStamp: 1707289093 },
        { senderId: 1, text: "Doing pretty well, just been busy with work.", timeStamp: 14182951000 },
        { senderId: 1, text: "Yeah, working on a new web application for a client.", timeStamp: 14188520000 },
        { senderId: 2, text: "That sounds exciting! What's it about?", timeStamp: 14181230000 },
        { senderId: 1, text: "It's a platform for event management.", timeStamp: 14182958400 },
        { senderId: 2, text: "Sounds like a useful tool.", timeStamp: 14182456000 },
        { senderId: 1, text: "Definitely, it's been challenging but rewarding.", timeStamp: 14123940000 },
        { senderId: 2, text: "Can't wait to see it once it's done.", timeStamp: 15972940200 },
        { senderId: 1, text: "I'll definitely give you a demo.", timeStamp: 14182940000 },
        { senderId: 2, text: "Looking forward to it. How's everything else?", timeStamp: 14182940123 },
        { senderId: 2, text: "That's great! What kind of exercise?", timeStamp: 14182940000 },
        { senderId: 1, text: "Mostly running and some cycling.", timeStamp: 14191300000 },
        { senderId: 2, text: "Nice, I've been getting into hiking myself.", timeStamp: 12382940000 },
        { senderId: 1, text: "Hiking is fantastic. Where do you usually go?", timeStamp: 14123940000 },
        { senderId: 2, text: "There are some great trails just outside the city.", timeStamp: 14112340000 },
        { senderId: 1, text: "Would love to join you sometime.", timeStamp: 13882912300 },
        { senderId: 2, text: "Absolutely, let's plan for that!", timeStamp: 11232940000 }
    ];

    const handleBack = () => {
        navigate(`/chats`);
    };

    return (
        <div className="chatContainer">
            <Header>
                <Back onClick={handleBack} />
                <h1 className="headerTitle">{senderName}</h1>
            </Header>
            <div className='messageThreadContainer'>
                <MessageThread messages={conversation} currentUserId={currentUserId} senderName={senderName} />
            </div>
            <div className="messageInput">
                <input type="text" placeholder="Type a message..." />
                <img src={ImageSend} alt="Send" className="sendIcon" />
            </div>
        </div>
    );
};

export default Chat;