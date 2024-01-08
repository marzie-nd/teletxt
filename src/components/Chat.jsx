import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>Milad</span>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat
