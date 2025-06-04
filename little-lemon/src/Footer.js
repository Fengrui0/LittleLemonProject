function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/images/logo-footer.png" alt="Little Lemon logo" />
        </div>
        <div className="footer-column">
          <h4>Doormat Navigation</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/order">Order Online</a>
          <a href="/login">Login</a>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
        <div className="footer-column">
          <h4>Social Media Links</h4>
          <p>Address</p>
          <p>Phone number</p>
          <p>Email</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
