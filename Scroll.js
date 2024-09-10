import React, { useState } from 'react';
import './Scroll.css';

const Scroll = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/">
          <img src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1725688981/rgukt_r1thhn.jpg" alt="RGUKT Logo" className="logo" />
        </a>
      </div>
      <div className={`navbar-right ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="login-button">Login</button>
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </nav>
  );
}

export default Scroll;
