import ChatItem from "../components/ChatItem";
import ChatList from "../components/ChatList"
import Header from "../components/Header";
import Search from "../components/Search";
import { useState } from 'react';

import './Chats.scss'

const Chats = () => {

  const [selectedUser, setSelectedUser] = useState(null);

  return (
    
    <div className='chats'>
      <Header/>
      <Search/>
      <div>
        {!selectedUser ? (
          <h1 style={{color: "black"}}>Hello world</h1>
        ) : (
          <ChatList>
          <ChatItem name={'Maman'} hasUnread={true}>Where are you?</ChatItem>
          <ChatItem name={'Ahmad'} hasUnread={false}>Hello</ChatItem>
        </ChatList>
        )
      }
      </div>

      
    </div>
  );
};

export default Chats;
