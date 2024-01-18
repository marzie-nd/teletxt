import Navbar from './Navbar';
import { useState } from 'react';
import Search from './Search';
import Chats from './Chats';
import Contacts from './Contacts';

const Sidebar = () => {

  const [ selectedSection, setSelectedSection ] = useState("Chats");

  const handleSection = (section) => {
    setSelectedSection(section);
  }

  return (
    <div className='sidebar'>
      <Navbar onSection={handleSection} />
      <Search />
      <div className="content">
          {selectedSection === "Chats" ? <Chats /> : <Contacts />}
        </div>
    </div>
  )
}

export default Sidebar;  
