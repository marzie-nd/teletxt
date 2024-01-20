import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Contacts from "./Contacts";
import { Routes, Route } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar>
        <Routes>
          <Route path="/chats" element={<Chats />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </Navbar>
      <Search />
      <Chats />
      <Contacts />
    </div>
  );
};

export default Sidebar;
