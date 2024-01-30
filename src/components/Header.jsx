import "./Header.scss"

const Header = ({headerTitle}) => {
    return (
    <div className='header'>
        <div>{headerTitle}</div>
    </div>
    );
}

export default Header;