import React from 'react';
import ChatItem from "../components/ChatItem";
import Header from "../components/Header";
import "./Chats.scss";

const Chats = () => {

  const chats = [
    { 'id': 874, 'name': 'Milad', 'lastMessage': "Call me", 'isUnread': true },
    { 'id': 1234, 'name': 'Ahmad', 'lastMessage': 'How are you today?', 'isUnread': false },
    { 'id': 875, 'name': 'Maman', 'lastMessage': "Don't forget to have your meal!", 'isUnread': false },
    { 'id': 876, 'name': 'Lina', 'lastMessage': "Are we still on for tonight?", 'isUnread': true },
    { 'id': 877, 'name': 'Jonas', 'lastMessage': "Received the documents, thanks!", 'isUnread': false },
    { 'id': 878, 'name': 'Sophia', 'lastMessage': "Let's catch up soon.", 'isUnread': false },
    { 'id': 879, 'name': 'Erik', 'lastMessage': "Can you send me the report?", 'isUnread': true },
    { 'id': 880, 'name': 'Olivia', 'lastMessage': "Happy Birthday!", 'isUnread': false },
    { 'id': 881, 'name': 'Leo', 'lastMessage': "What's the plan for the weekend?", 'isUnread': true },
    { 'id': 882, 'name': 'Emma', 'lastMessage': "I loved the movie recommendation.", 'isUnread': false },
    { 'id': 883, 'name': 'Noah', 'lastMessage': "Let's play a game online tonight.", 'isUnread': true },
    { 'id': 884, 'name': 'Mia', 'lastMessage': "How's the project going?", 'isUnread': false },
    { 'id': 885, 'name': 'Liam', 'lastMessage': "Are we meeting tomorrow?", 'isUnread': true },
    { 'id': 886, 'name': 'Zoe', 'lastMessage': "I have some ideas for the party.", 'isUnread': false },
    { 'id': 887, 'name': 'Ethan', 'lastMessage': "Do you need help with your assignment?", 'isUnread': true },
    { 'id': 888, 'name': 'Ava', 'lastMessage': "Thanks for your help today!", 'isUnread': false },
    { 'id': 889, 'name': 'Mason', 'lastMessage': "I'll call you later.", 'isUnread': true },
    { 'id': 890, 'name': 'Isabella', 'lastMessage': "What time is the meeting?", 'isUnread': false },
    { 'id': 891, 'name': 'Jacob', 'lastMessage': "Let's have lunch tomorrow.", 'isUnread': false },
    { 'id': 892, 'name': 'Emily', 'lastMessage': "I've sent you the playlist.", 'isUnread': true }
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
            isUnread={chat.isUnread}
          />
        ))}
      </div>
    </div>
  );
};

export default Chats;
