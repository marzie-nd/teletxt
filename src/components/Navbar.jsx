import { Link } from 'react-router-dom';
import Menu from '../img/menu.png';

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="container">
        <img src={Menu} alt="Menu" width="30vw" />
        <div className="logo">TeLeTxt</div>
      </div>
      <nav className='navItems'>
        <span style={{backgroundColor: "#A9B388"}}>
          <Link to={{}}>Chats</Link>
        </span>
        <span>
          <Link to={{}}>Contacts</Link>
        </span>
      </nav>
    </div>
  )
}

export default Navbar
