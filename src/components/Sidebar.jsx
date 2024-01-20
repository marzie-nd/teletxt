import Navbar from "./Navbar";
import Search from "./Search";
import { Routes, Route } from "react-router-dom";
import Chats from "./Chats";
import Contacts from "./Contacts";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <Chats />
      {/* <Routes>
        <Route path="chats" element={<Chats />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes> */}
    </div>
  );
};

export default Sidebar;
