import Navbar from '../components/Navbar';
import Search from '../components/Search';
import Chats from '../components/Chats';

import '../styles.scss';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Home
