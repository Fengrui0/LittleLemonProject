import logo from './logo.svg';
import Nav from './Nav';
function Header(){
    return(
        <header className="header">
            <a href="/">
                <img src={logo} alt="Little Lemon Logo" />
            </a>
            <Nav />
        </header>
    )
}
export default Header;