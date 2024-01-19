import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';
import Contacts from './Contacts';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
      <Contacts />
    </div>
  )
}

export default Sidebar;  
