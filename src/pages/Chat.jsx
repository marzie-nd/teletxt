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
        { senderId: 1, text: "Hey, how are you?", timeStamp: "Tue, 06 Feb 2024 10:38:25 GMT" },
        { senderId: 2, text: "I'm good, thanks! How about you?", timeStamp: "Tue, 06 Feb 2024 10:58:25 GMT" },
        { senderId: 1, text: "Doing pretty well, just been busy with work.", timeStamp: "Tue, 06 Feb 2024 11:11:25 GMT" },
        { senderId: 2, text: "I know the feeling. Any big projects lately?", timeStamp: "Tue, 06 Feb 2024 11:12:25 GMT" },
        { senderId: 1, text: "Yeah, working on a new web application for a client.", timeStamp: "Tue, 06 Feb 2024 11:17:25 GMT" },
        { senderId: 2, text: "That sounds exciting! What's it about?", timeStamp: "Tue, 06 Feb 2024 11:27:25 GMT" },
        { senderId: 1, text: "It's a platform for event management.", timeStamp: "Tue, 06 Feb 2024 11:36:25 GMT" },
        { senderId: 2, text: "Sounds like a useful tool.", timeStamp: "Tue, 06 Feb 2024 11:39:25 GMT" },
        { senderId: 1, text: "Definitely, it's been challenging but rewarding.", timeStamp: "Tue, 06 Feb 2024 12:05:25 GMT" },
        { senderId: 2, text: "Can't wait to see it once it's done.", timeStamp: "Tue, 06 Feb 2024 12:07:25 GMT" },
        { senderId: 1, text: "I'll definitely give you a demo.", timeStamp: "Tue, 06 Feb 2024 12:15:25 GMT" },
        { senderId: 2, text: "Looking forward to it. How's everything else?", timeStamp: "Tue, 06 Feb 2024 12:23:25 GMT" },
        { senderId: 1, text: "All good. Been trying to get more exercise lately.", timeStamp: "Tue, 06 Feb 2024 12:24:25 GMT" },
        { senderId: 2, text: "That's great! What kind of exercise?", timeStamp: "Tue, 06 Feb 2024 12:35:25 GMT" },
        { senderId: 1, text: "Mostly running and some cycling.", timeStamp: "Tue, 06 Feb 2024 12:37:25 GMT" },
        { senderId: 2, text: "Nice, I've been getting into hiking myself.", timeStamp: "Tue, 06 Feb 2024 12:44:25 GMT" },
        { senderId: 1, text: "Hiking is fantastic. Where do you usually go?", timeStamp: "Tue, 06 Feb 2024 13:01:25 GMT" },
        { senderId: 2, text: "There are some great trails just outside the city.", timeStamp: "Tue, 06 Feb 2024 13:20:25 GMT" },
        { senderId: 1, text: "Would love to join you sometime.", timeStamp: "Tue, 06 Feb 2024 13:36:25 GMT" },
        { senderId: 2, text: "Absolutely, let's plan for that!", timeStamp: "Tue, 06 Feb 2024 13:40:25 GMT" }
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