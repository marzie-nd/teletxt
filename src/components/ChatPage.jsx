import ChatBox from './ChatBox';
import ChatList from './ChatList';

const ChatPage = ({ users, selectedUser, onUserChange, chatHistory, onSendMessage }) => {
  if (!selectedUser) {
    return (
      <div className='chatPage_chatList'>
        <ChatList user={selectedUser} />      
      </div>
    )
  }
  return (
    <div className='chatPage_chatBox'>
      <ChatBox user={selectedUser} chatHistory={chatHistory} onSendMessage={onSendMessage} />      
    </div>
  )
  
}

export default ChatPage
