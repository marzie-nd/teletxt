import { useNavigate, useParams } from 'react-router-dom';
import ImageSend from '../images/send.png';
import "./Chat.scss";
import MessageThread from '../components/MessageThread';
import Back from "../components/Back"
import Header from "../components/Header"

const Chat = () => {
    const { chatId } = useParams();

    const currentUserId = 1;
    const senderName = "Alice";
    const conversation = [
        { senderId: 1, text: "Hey, how are you?" },
        { senderId: 2, text: "I'm good, thanks! How about you?" },
        { senderId: 1, text: "Doing pretty well, just been busy with work." },
        { senderId: 2, text: "I know the feeling. Any big projects lately?" },
        { senderId: 1, text: "Yeah, working on a new web application for a client." },
        { senderId: 2, text: "That sounds exciting! What's it about?" },
        { senderId: 1, text: "It's a platform for event management." },
        { senderId: 2, text: "Sounds like a useful tool." },
        { senderId: 1, text: "Definitely, it's been challenging but rewarding." },
        { senderId: 2, text: "Can't wait to see it once it's done." },
        { senderId: 1, text: "I'll definitely give you a demo." },
        { senderId: 2, text: "Looking forward to it. How's everything else?" },
        { senderId: 1, text: "All good. Been trying to get more exercise lately." },
        { senderId: 2, text: "That's great! What kind of exercise?" },
        { senderId: 1, text: "Mostly running and some cycling." },
        { senderId: 2, text: "Nice, I've been getting into hiking myself." },
        { senderId: 1, text: "Hiking is fantastic. Where do you usually go?" },
        { senderId: 2, text: "There are some great trails just outside the city." },
        { senderId: 1, text: "Would love to join you sometime." },
        { senderId: 2, text: "Absolutely, let's plan for that!" }
    ];

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(`/chats`);
    }

    return (
        <>
            <Header>
                <Back onClick={handleBack} />
                <h1>{senderName}</h1>
            </Header>
            <MessageThread className="chat" messages={conversation} currentUserId={currentUserId} senderName={senderName} />
            <div className="write">
                <input type="text" placeholder="Type a message..." />
                <img src={ImageSend} alt="Send" />
            </div>
        </>
    );
};

export default Chat;
