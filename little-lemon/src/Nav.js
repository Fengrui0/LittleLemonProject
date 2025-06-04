import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/booking">Reservations</Link>
      <Link to="/order">Order Online</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Nav;