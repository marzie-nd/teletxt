import { useNavigate } from 'react-router-dom';
import "./ChatItem.scss";
import deleteIcon from '../images/delete.png';

const ChatItem = ({ id, name, content, isUnread }) => {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/chats/${name}`);
    }

    return (
        <div className={`chatItem ${isUnread ? 'unread' : ''}`} onClick={handleClick}>
            <h4>{name}</h4>
            <p className="chatContent">{content}</p>
            <img className='delete' src={deleteIcon} alt="Delete" />
        </div>
    );
}

export default ChatItem;