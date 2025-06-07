
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top border-bottom border-danger">
      <div className="container">
        <a className="navbar-brand fw-bold fs-2" href="#" style={{color: '#e50914'}}>
          <span className="text-white">Genius</span><span className="text-danger">TV</span>
        </a>
        
        {/* Mobile toggle button */}
        <button 
          className="navbar-toggler border-0 p-0" 
          type="button" 
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? (
            <X className="text-white" size={24} />
          ) : (
            <Menu className="text-white" size={24} />
          )}
        </button>

        {/* Navigation menu */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#features" onClick={closeMenu}>Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#content" onClick={closeMenu}>Content</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing" onClick={closeMenu}>Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#devices" onClick={closeMenu}>Devices</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq" onClick={closeMenu}>FAQ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={closeMenu}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
