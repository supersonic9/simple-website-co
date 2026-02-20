import './NavBar.css';

import { useState } from 'react';

interface NavBarProps {
  onContactClick?: () => void;
}

function NavBar({ onContactClick }: NavBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  const handleMobileContactClick = (e: React.MouseEvent) => {
    closeMobileMenu();
    if (onContactClick) {
      e.preventDefault();
      onContactClick();
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <img src="/logo.png" alt="Simple Web Co Logo" className="logo-image" />
            <h2>Simple Web Co</h2>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-links desktop-nav">
            <li><a href="#what-we-do">What We Do</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#faqs">FAQ's</a></li>
            <li><a href="#contact" onClick={handleContactClick}>Contact Us</a></li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            <li><a href="#what-we-do" onClick={closeMobileMenu}>What We Do</a></li>
            <li><a href="#about" onClick={closeMobileMenu}>About Us</a></li>
            <li><a href="#faqs" onClick={closeMobileMenu}>FAQ's</a></li>
            <li><a href="#contact" onClick={handleMobileContactClick}>Contact Us</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;