import { useState } from "react";
import "../styles.scss";
import Users from "../components/Users";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="home">
      <div className="wrapper">
        <Sidebar />
        <div className="content">
          <Users onChatToggle={handleChatToggle} />
          {isChatOpen && <Chat />}
        </div>
      </div>
    </div>
  );
};

export default Home;
