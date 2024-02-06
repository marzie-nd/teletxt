import React from 'react';
import ChatItem from "../components/ChatItem";
import Header from "../components/Header";
import "./Chats.scss";

const Chats = () => {

  const chats = [
    { 'id': 874, 'name': 'Milad', 'lastMessage': "Call me", 'unreadMessage': 1 },
    { 'id': 1234, 'name': 'Ahmad', 'lastMessage': 'How are you today?', 'unreadMessage': 0 },
    { 'id': 875, 'name': 'Maman', 'lastMessage': "Don't forget to have your meal!", 'unreadMessage': 0 },
    { 'id': 876, 'name': 'Lina', 'lastMessage': "Are we still on for tonight?", 'unreadMessage': 3 },
    { 'id': 877, 'name': 'Jonas', 'lastMessage': "Received the documents, thanks!", 'unreadMessage': 0 },
    { 'id': 878, 'name': 'Sophia', 'lastMessage': "Let's catch up soon.", 'unreadMessage': 0 },
    { 'id': 879, 'name': 'Erik', 'lastMessage': "Can you send me the report?", 'unreadMessage': 5 },
    { 'id': 880, 'name': 'Olivia', 'lastMessage': "Happy Birthday!", 'unreadMessage': 0 },
    { 'id': 881, 'name': 'Leo', 'lastMessage': "What's the plan for the weekend?", 'unreadMessage': 2 },
    { 'id': 882, 'name': 'Emma', 'lastMessage': "I loved the movie recommendation.", 'unreadMessage': 0 },
    { 'id': 883, 'name': 'Noah', 'lastMessage': "Let's play a game online tonight.", 'unreadMessage': 1 },
    { 'id': 884, 'name': 'Mia', 'lastMessage': "How's the project going?", 'unreadMessage': 0 },
    { 'id': 885, 'name': 'Liam', 'lastMessage': "Are we meeting tomorrow?", 'unreadMessage': 2 },
    { 'id': 886, 'name': 'Zoe', 'lastMessage': "I have some ideas for the party.", 'unreadMessage': 0 },
    { 'id': 887, 'name': 'Ethan', 'lastMessage': "Do you need help with your assignment?", 'unreadMessage': 3 },
    { 'id': 888, 'name': 'Ava', 'lastMessage': "Thanks for your help today!", 'unreadMessage': 0 },
    { 'id': 889, 'name': 'Mason', 'lastMessage': "I'll call you later.", 'unreadMessage': 7 },
    { 'id': 890, 'name': 'Isabella', 'lastMessage': "What time is the meeting?", 'unreadMessage': 0 },
    { 'id': 891, 'name': 'Jacob', 'lastMessage': "Let's have lunch tomorrow.", 'unreadMessage': 0 },
    { 'id': 892, 'name': 'Emily', 'lastMessage': "I've sent you the playlist.", 'unreadMessage': 2 }
  ];

  return (
    <div className='chats'>
      <Header>
        <h1 className="title">TeleTxt</h1>
      </Header>
      <input className='search' type="text" placeholder='Search...' />
      <div className="chatList">
        {chats.map(chat => (
          <ChatItem
            id={chat.id}
            name={chat.name}
            content={chat.lastMessage}
            unreadMessage={chat.unreadMessage}
          />
        ))}
      </div>
    </div>
  );
};

export default Chats;
