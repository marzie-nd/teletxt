import Menu from '../img/menu.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <img src={Menu} alt="Menu" width="30vw" />
        <div className="logo">TeLeTxt</div>
      </div>
      <nav className='navItems'>
        <span>Chats</span>
        <span>Contacts</span>
      </nav>
    </div>
  )
}

export default Navbar
