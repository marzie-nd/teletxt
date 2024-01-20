import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import Contacts from "./Contacts";
import { Routes, Route, Outlet } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar>
        <Routes>
          <Route path="chats" element={<Chats />} />
          <Route path="contacts" element={<Contacts />} />
        </Routes>
      </Navbar>
      <Search />
    </div>
  );
};

export default Sidebar;
