import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import Chat from './Chat';

const Chats = () => {

  const onChatToggle = () => {

  }

  return (
    <div className="chats">
      <Routes>
        <Route index element={<Users username="ahmad" onChatToggle={onChatToggle} />} />
        <Route path="/:username" element={<Chat />} />
      </Routes>
    </div>
  );
};

export default Chats;
