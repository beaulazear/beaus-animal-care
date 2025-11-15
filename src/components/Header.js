import React, { useState, useEffect } from 'react';
import BeausAnimalCareLogo from '../images/BeausAnimalCare.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-brand-500/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-24 py-4">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 focus:outline-none p-3"
          >
            <div className="relative">
              <img
                src={BeausAnimalCareLogo}
                alt="Beau's Animal Care"
                className="h-22 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
