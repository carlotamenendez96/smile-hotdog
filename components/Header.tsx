import React, { useState } from 'react';
import { CORPORATE_RED } from '../constants';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2">
              <span className="text-3xl font-anton tracking-wider text-gray-900">SMILE<span className="font-pacifico text-3xl" style={{color: CORPORATE_RED, marginLeft: '6px'}}>HotDog</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex md:space-x-8">
            <a href="#menu" onClick={handleNavClick} className="nav-underline text-gray-600 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out cursor-pointer">Carta</a>
            <a href="#location" onClick={handleNavClick} className="nav-underline text-gray-600 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out cursor-pointer">Ubicación</a>
            <a href="#footer" onClick={handleNavClick} className="nav-underline text-gray-600 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out cursor-pointer">Contacto</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#menu" onClick={handleNavClick} className="group inline-block text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg" style={{ backgroundColor: CORPORATE_RED }}>
              <span className="group-hover:brightness-110 transition-all duration-300">Haz tu pedido</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
            <a href="#menu" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-800 cursor-pointer">Carta</a>
            <a href="#location" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-800 cursor-pointer">Ubicación</a>
            <a href="#footer" onClick={handleNavClick} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-800 cursor-pointer">Contacto</a>
            <div className="mt-4">
               <a href="#menu" onClick={handleNavClick} className="inline-block text-white font-bold py-3 px-6 rounded-lg cursor-pointer" style={{ backgroundColor: CORPORATE_RED }}>
                Haz tu pedido
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;