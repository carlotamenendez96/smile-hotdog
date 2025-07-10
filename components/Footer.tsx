import React from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { CORPORATE_RED } from '../constants';

const Footer: React.FC = () => {

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
             <h2 className="text-3xl font-anton tracking-wider text-white">SMILE<span className="font-pacifico text-3xl" style={{color: CORPORATE_RED, marginLeft: '6px'}}>HotDog</span></h2>
            <p className="text-gray-400 text-base leading-relaxed">
              Los mejores Hot Dogs de Gijón.<br/>
              C/ Artillería 10<br/>
              33201 Cimavilla, Gijón, Asturias
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110" title="Visita nuestro Facebook">
                <span className="sr-only">Facebook</span>
                <FacebookIcon />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110" title="Visita nuestro Instagram">
                <span className="sr-only">Instagram</span>
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Navegación</h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#menu" onClick={handleScrollClick} className="text-base text-gray-400 hover:text-white transition-colors cursor-pointer">Carta</a></li>
                  <li><a href="#location" onClick={handleScrollClick} className="text-base text-gray-400 hover:text-white transition-colors cursor-pointer">Ubicación</a></li>
                   <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-base text-gray-400 hover:text-white transition-colors cursor-pointer">Inicio</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Aviso Legal</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Política de Privacidad</a></li>
                  <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Política de Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-500 text-center">&copy; {new Date().getFullYear()} Smile Hot Dog Gijón. Especialistas en Hot Dogs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;