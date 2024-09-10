import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPUC, setShowPUC] = useState(false);
  const [showEngg, setShowEngg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handlePUCToggle = () => {
    setShowPUC(!showPUC);
    setShowEngg(false); // Close Engineering dropdown when PUC is opened
  };

  const handleEnggToggle = () => {
    setShowEngg(!showEngg);
    setShowPUC(false); // Close PUC dropdown when Engineering is opened
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src="https://res.cloudinary.com/dxyzgyveu/image/upload/v1725688981/rgukt_r1thhn.jpg"
          alt="RGUKT Logo"
        />
      </div>
      <div
        className="navbar-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li onClick={() => setShowDropdown(!showDropdown)}>
          <a href="#department">Department courses</a>
          {showDropdown && (
            <ul className="dropdown">
              <li onClick={handlePUCToggle}>
                <a href="#puc">PUC</a>
                {showPUC && (
                  <ul className="sub-dropdown">
                    <li>
                      <a href="#puc1">PUC1</a>
                    </li>
                    <li>
                      <a href="#puc2">PUC2</a>
                    </li>
                  </ul>
                )}
              </li>
              <li onClick={handleEnggToggle}>
                <a href="#engineering">Engineering</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#faculty">Faculty List</a>
        </li>
        <li>
          <a href="#achievements">Achievements</a>
        </li>
        <li>
          <a href="#library">Library</a>
        </li>
        <li>
          <a href="#english">Competitive English</a>
        </li>
        <li>
          <a href="#logout" className="logout-button">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
