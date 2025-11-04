
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'About Us' },
    { href: '#success-stories', label: 'Success Stories' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-slate-900">
          <span className="text-indigo-600">Innobryx Consulting</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-medium ${isScrolled || isMenuOpen ? 'text-slate-700' : 'text-white md:text-opacity-80'} hover:text-indigo-600 transition-colors`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden z-50"
        >
          {isMenuOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
             </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${isScrolled ? 'text-slate-800' : 'text-white'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6 absolute top-full left-0 right-0 shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-slate-700 hover:text-indigo-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
