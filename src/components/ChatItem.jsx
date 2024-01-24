import './ChatItem.scss'

const ChatItem = ({ name, hasUnread, children }) => {
    return (
        <div className="chatItem">
            <h3>{name}:</h3>
            <div style={{ fontWeight: hasUnread ? 'bold' : 'normal' }}>{children}</div>
        </div>
    );
};

export default ChatItem;
