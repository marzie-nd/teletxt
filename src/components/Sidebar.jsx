import Navbar from "./Navbar";
import Search from "./Search";
import UsersList from "./UsersList";
import { useState } from "react";

const Sidebar = () => {

  const users = ['Ahmad', 'maman', 'milad'];
  const [selectedUser, setSelectedUser] = useState([users[0]]);

  const handleUserChange = (user) => {
    setSelectedUser(user);
  }
  return (
    <div className="sidebar">
      <Navbar />
      <Search />
      <UsersList users={users} selectedUser={selectedUser} onUserChange={handleUserChange} />
      
    </div>
  );
};

export default Sidebar;
