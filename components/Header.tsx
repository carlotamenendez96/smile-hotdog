import React, { useState, useEffect } from 'react';
import { CORPORATE_RED } from '../constants';
import { MenuIcon } from './icons/MenuIcon';
import { XIcon } from './icons/XIcon';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detectar si es dispositivo móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Prevenir scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      // Bloquear scroll en todos los dispositivos
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      // Restaurar scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      // Cleanup: restaurar scroll al desmontar
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Efecto adicional para asegurar que el scroll se restaure correctamente
  useEffect(() => {
    const handleResize = () => {
      if (!isMenuOpen) {
        // Restaurar scroll en resize si el menú no está abierto
        document.body.style.position = '';
        document.body.style.width = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        // Calcular la posición del elemento objetivo
        const elementPosition = targetElement.offsetTop;
        // Añadir offset para el header fijo (ajustar según dispositivo)
        const offsetPosition = elementPosition - (isMobile ? 100 : 80);
        
        // Cerrar el menú móvil primero si está abierto
        if (isMenuOpen) {
          setIsMenuOpen(false);
          // Pequeño delay para que el menú se cierre antes de hacer scroll
          setTimeout(() => {
            try {
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: 'smooth'
              });
            } catch (error) {
              // Fallback para navegadores que no soportan scroll suave
              window.scrollTo(0, Math.max(0, offsetPosition));
            }
          }, 150);
        } else {
          // Si no hay menú móvil abierto, hacer scroll inmediatamente
          try {
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          } catch (error) {
            // Fallback para navegadores que no soportan scroll suave
            window.scrollTo(0, Math.max(0, offsetPosition));
          }
        }
      } else {
        console.warn(`Elemento con ID "${targetId}" no encontrado`);
      }
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="flex items-center space-x-2">
              <img src="/logo.PNG" alt="Logo Smile Hot Dog" className="h-10 w-10 rounded-full" />
              <span className="text-3xl font-anton tracking-wider text-gray-900" translate="no">SMILE<span className="font-pacifico text-3xl" style={{color: CORPORATE_RED, marginLeft: '6px'}}>HotDog</span></span>
            </a>
          </div>
          
          <nav className="hidden md:flex md:space-x-8">
            <a href="#menu" onClick={handleNavClick} className="nav-underline text-gray-600 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out cursor-pointer">Carta</a>
            <a href="#location" onClick={handleNavClick} className="nav-underline text-gray-600 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out cursor-pointer">Ubicación</a>
            <a href="#footer" onClick={handleNavClick} className="nav-underline text-gray-600 hover:text-gray-900 font-semibold text-lg transition duration-150 ease-in-out cursor-pointer">Contacto</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="https://glovoapp.com/es/es/gijon/smile-hot-dog-gijon/" target="_blank" rel="noopener noreferrer" className="group inline-block text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer shadow-md hover:shadow-lg" style={{ backgroundColor: CORPORATE_RED }} title="Pedir en Glovo - Smile Hot Dog Gijón">
              <span className="group-hover:brightness-110 transition-all duration-300">Haz tu pedido</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center p-3 rounded-xl text-gray-700 hover:text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              style={{ 
                backgroundColor: isMenuOpen ? CORPORATE_RED : 'transparent',
                transform: isMenuOpen ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? <XIcon className="w-6 h-6 text-white" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil rediseñado */}
      <div 
        className={`fixed top-0 bottom-0 right-0 w-full max-w-sm bg-white shadow-2xl z-50 md:hidden transform transition-all duration-300 ease-in-out h-screen overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        id="mobile-menu"
        style={{ zIndex: 10000 }}
      >
        {/* Header del menú con gradiente sutil */}
        <div className="relative bg-gradient-to-br from-red-50 via-white to-white p-4 sm:p-6 pt-16">
          {/* Botón de cerrar prominente */}
          <button
            onClick={toggleMenu}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 sm:p-3 rounded-full bg-red-500 hover:bg-red-600 text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="Cerrar menú"
          >
            <XIcon className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          
          {/* Logo y branding */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 sm:space-x-3 mb-2">
              <img src="/logo.PNG" alt="Logo Smile Hot Dog" className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-md" />
              <div className="text-left">
                <h1 className="text-lg sm:text-xl font-anton tracking-wider text-gray-900" translate="no">SMILE</h1>
                <span className="font-pacifico text-base sm:text-lg" style={{color: CORPORATE_RED}} translate="no">HotDog</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600">¡Los mejores{' '}<span translate="no">hot dogs</span>{' '}de Gijón!</p>
          </div>
        </div>

        {/* Navegación principal con mejor jerarquía */}
        <nav className="p-4 sm:p-6 space-y-2 sm:space-y-3 bg-white">
          <h2 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 sm:mb-4 px-2">Navegación</h2>
          
          <a 
            href="#menu" 
            onClick={handleNavClick} 
            className="group flex items-center justify-between p-3 sm:p-4 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 group-hover:bg-white transition-colors duration-300 shadow-sm"></div>
              <span className="font-semibold text-base sm:text-lg">🍔 Carta</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>
          
          <a 
            href="#location" 
            onClick={handleNavClick} 
            className="group flex items-center justify-between p-3 sm:p-4 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 group-hover:bg-white transition-colors duration-300 shadow-sm"></div>
              <span className="font-semibold text-base sm:text-lg">📍 Ubicación</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>
          
          <a 
            href="#footer" 
            onClick={handleNavClick} 
            className="group flex items-center justify-between p-3 sm:p-4 rounded-xl text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-600 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-transparent shadow-sm hover:shadow-md transform hover:-translate-y-1"
          >
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500 group-hover:bg-white transition-colors duration-300 shadow-sm"></div>
              <span className="font-semibold text-base sm:text-lg">📞 Contacto</span>
            </div>
            <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
          </a>
        </nav>

        {/* Botón de pedido destacado con mejor diseño */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 bg-white">
          <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-4 sm:p-6 shadow-xl">
            <div className="text-center text-white mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold mb-2">¿Tienes hambre?</h3>
              <p className="text-red-100 text-xs sm:text-sm">¡Haz tu pedido ahora!</p>
            </div>
            <a 
              href="https://glovoapp.com/es/es/gijon/smile-hot-dog-gijon/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group w-full inline-flex items-center justify-center text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-105 cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30"
              title="Pedir en Glovo - Smile Hot Dog Gijón"
            >
              <span className="text-base sm:text-lg mr-2">🍔</span>
              <span className="text-sm sm:text-base">Haz tu pedido</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
          </div>
        </div>

        {/* Información contextual mejorada */}
        <div className="px-4 sm:px-6 pb-4 sm:pb-6 bg-white">
          <div className="bg-gray-50 rounded-xl p-3 sm:p-4 border border-gray-100">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <span className="text-xs sm:text-sm font-semibold text-gray-700">Información</span>
            </div>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <span className="text-red-500">📍</span>
                <span>Cimavilla, Gijón</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">🕒</span>
                <span>Abierto de Martes a Domingo</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-500">⭐</span>
                <span>Los mejores{' '}<span translate="no">hot dogs</span>{' '}de la ciudad</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer del menú */}
        <div className="px-4 sm:px-6 pb-6 sm:pb-8 bg-white border-t border-gray-100">
          <div className="text-center">
            <p className="text-xs text-gray-400 mb-2" translate="no">SMILE HotDog</p>
            <p className="text-xs text-gray-400">Gracias por elegirnos</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;