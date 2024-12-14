'use client'; // Ensure this is at the top to mark the component as client-side

import { useState, useEffect, useRef } from 'react';
import '../css/style.css'; // Import the external CSS for the animation

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  // Create refs for the elements
  const mobileMenuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navbarRef = useRef(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Change navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };

    const mobileMenuButton = mobileMenuButtonRef.current;
    const mobileMenu = mobileMenuRef.current;
    const navbar = navbarRef.current;

    // Add event listener for mobile menu toggle
    const handleMobileMenuToggle = () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenuButton.classList.toggle('active');
      mobileMenuButton.blur(); // Remove focus after clicking
    };

    // Attach event listeners
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', handleMobileMenuToggle);
    }

    // Attach scroll event listener for navbar
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listeners on component unmount
    return () => {
      if (mobileMenuButton) {
        mobileMenuButton.removeEventListener('click', handleMobileMenuToggle);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-gray-800 bg-opacity-80 backdrop-blur-md z-50 transition-all ${
        isNavbarScrolled ? 'navbar-scroll' : ''
      }`}
      id="navbar"
      ref={navbarRef}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-bold text-white relative flex items-center"
          >
            Rangga
            <span className="ml-2 text-xl text-yellow-500 font-extrabold rounded-full bg-yellow-500 w-3 h-3"></span>
          </a>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-md font-medium text-gray-300 hover:text-white">
              Home
            </a>
            <a href="#about-me" className="text-md font-medium text-gray-300 hover:text-white">
              About
            </a>
            <a href="#services" className="text-md font-medium text-gray-300 hover:text-white">
              Services
            </a>
            <a href="#projects" className="text-md font-medium text-gray-300 hover:text-white">
              Projects
            </a>
            <a href="#contact" className="text-md font-medium text-gray-300 hover:text-white">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white burger ${isMobileMenuOpen ? 'open' : ''}`}
            id="mobile-menu-button"
            ref={mobileMenuButtonRef}
          >
            <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-300 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-300"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu" ref={mobileMenuRef}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Home
          </a>
          <a href="#about-me" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            About
          </a>
          <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Services
          </a>
          <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Projects
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
