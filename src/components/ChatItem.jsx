import { useNavigate } from 'react-router-dom';
import "./ChatItem.scss";
import deleteIcon from '../images/delete.png';

const ChatItem = ({ id, name, content, isUnread, unreadMessage }) => {
    
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/chats/${id}`);
    }

    return (
        <div className={`chatItem ${isUnread ? 'unread' : ''}`} onClick={handleClick}>
            <h4>{name}</h4>
            <p className="chatContent">{content}</p>
            {unreadMessage > 0 && <div className='unreadBadge'>{unreadMessage}</div>}
            <img className='delete' src={deleteIcon} alt="Delete" />
        </div>
    );
}

export default ChatItem;