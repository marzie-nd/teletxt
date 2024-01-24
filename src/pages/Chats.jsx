import ChatItem from "../components/ChatItem";
import ChatList from "../components/ChatList"
import Header from "../components/Header";
import Search from "../components/Search";

const Chats = () => {
  return (
    <div className='chats'>
      <Header/>
      <Search/>
      <ChatList>
        <ChatItem name={'Maman'} hasUnread={true}>Where are you?</ChatItem>
        <ChatItem name={'Ahmad'} hasUnread={false}>Hello</ChatItem>
      </ChatList>
    </div>
  );
};

export default Chats;
