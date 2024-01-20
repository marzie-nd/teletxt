import Messages from './Messages';
import Input from './Input';

const Chat = ({username}) => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{username}</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat;
