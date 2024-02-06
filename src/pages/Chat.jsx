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
        { senderId: 1, text: "Hey, how are you?", timeStamp: "10:00" },
        { senderId: 2, text: "I'm good, thanks! How about you?", timeStamp: "10:05" },
        { senderId: 1, text: "Doing pretty well, just been busy with work.", timeStamp: "11:30" },
        { senderId: 2, text: "I know the feeling. Any big projects lately?", timeStamp: "12:15" },
        { senderId: 1, text: "Yeah, working on a new web application for a client.", timeStamp: "12:17" },
        { senderId: 2, text: "That sounds exciting! What's it about?", timeStamp: "12:23" },
        { senderId: 1, text: "It's a platform for event management.", timeStamp: "13:50" },
        { senderId: 2, text: "Sounds like a useful tool.", timeStamp: "15:42" },
        { senderId: 1, text: "Definitely, it's been challenging but rewarding.", timeStamp: "16:10" },
        { senderId: 2, text: "Can't wait to see it once it's done.", timeStamp: "16:12" },
        { senderId: 1, text: "I'll definitely give you a demo.", timeStamp: "16:16" },
        { senderId: 2, text: "Looking forward to it. How's everything else?", timeStamp: "16:24" },
        { senderId: 1, text: "All good. Been trying to get more exercise lately.", timeStamp: "16:28" },
        { senderId: 2, text: "That's great! What kind of exercise?", timeStamp: "17:35" },
        { senderId: 1, text: "Mostly running and some cycling.", timeStamp: "17:49" },
        { senderId: 2, text: "Nice, I've been getting into hiking myself.", timeStamp: "18:02" },
        { senderId: 1, text: "Hiking is fantastic. Where do you usually go?", timeStamp: "18:26" },
        { senderId: 2, text: "There are some great trails just outside the city.", timeStamp: "19:00" },
        { senderId: 1, text: "Would love to join you sometime.", timeStamp: "22:25" },
        { senderId: 2, text: "Absolutely, let's plan for that!", timeStamp: "23:02" }
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