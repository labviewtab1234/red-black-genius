
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
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-red-600 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">
            <span className="text-white">Genius</span>
            <span className="text-red-600">TV</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-white hover:text-red-600 transition-colors">Features</a>
            <a href="#content" className="text-white hover:text-red-600 transition-colors">Content</a>
            <a href="#pricing" className="text-white hover:text-red-600 transition-colors">Pricing</a>
            <a href="#devices" className="text-white hover:text-red-600 transition-colors">Devices</a>
            <a href="#faq" className="text-white hover:text-red-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-white hover:text-red-600 transition-colors">Contact</a>
          </div>

          {/* Mobile toggle button */}
          <button 
            className="md:hidden p-2 text-white hover:text-red-600 transition-colors"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-t border-red-600">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a 
                href="#features" 
                className="block px-3 py-2 text-white hover:text-red-600 hover:bg-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Features
              </a>
              <a 
                href="#content" 
                className="block px-3 py-2 text-white hover:text-red-600 hover:bg-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Content
              </a>
              <a 
                href="#pricing" 
                className="block px-3 py-2 text-white hover:text-red-600 hover:bg-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Pricing
              </a>
              <a 
                href="#devices" 
                className="block px-3 py-2 text-white hover:text-red-600 hover:bg-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Devices
              </a>
              <a 
                href="#faq" 
                className="block px-3 py-2 text-white hover:text-red-600 hover:bg-gray-900 transition-colors"
                onClick={closeMenu}
              >
                FAQ
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-white hover:text-red-600 hover:bg-gray-900 transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
