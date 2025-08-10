import React, { useState, useEffect } from 'react';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { CORPORATE_RED } from '../constants';

const Footer: React.FC = () => {
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

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
        
        try {
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          });
        } catch (error) {
          // Fallback para navegadores que no soportan scroll suave
          window.scrollTo(0, Math.max(0, offsetPosition));
        }
      } else {
        console.warn(`Elemento con ID "${targetId}" no encontrado`);
      }
    }
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.PNG" 
                alt="Logo Smile Hot Dog Gijón - Hot Dogs en Cimavilla" 
                className="h-8 w-8 rounded-full"
                loading="lazy"
                decoding="async"
              />
              <h2 className="text-3xl font-anton tracking-wider text-white" translate="no">SMILE<span className="font-pacifico text-3xl" style={{color: CORPORATE_RED, marginLeft: '6px'}}>HotDog</span></h2>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Los mejores{' '}<span translate="no">Hot Dogs</span>{' '}de Gijón.<br/>
              <strong>C/ Artillería 10</strong><br/>
              <strong>33201 Cimavilla, Gijón, Asturias</strong>
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong>Horario:</strong> Martes a Domingo 19:00 - 00:00</p>
              <p><strong>Especialidad:</strong>{' '}<span translate="no">Hot Dogs</span>{' '}con salchicha bockwurst XXL</p>
            </div>
            <div className="flex space-x-4">
              <a href='https://www.instagram.com/smilehot.dog/' 
                 target='_blank' 
                 rel="noopener noreferrer"
                 className="text-gray-400 hover:text-white transition-transform duration-300 transform hover:scale-110" 
                 title="Síguenos en Instagram - Smile Hot Dog Gijón">
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
                  <li><a href="#menu" onClick={handleScrollClick} className="text-base text-gray-400 hover:text-white transition-colors cursor-pointer" title="Ver nuestra carta de hot dogs">Carta de{' '}<span translate="no">Hot Dogs</span></a></li>
                  <li><a href="#location" onClick={handleScrollClick} className="text-base text-gray-400 hover:text-white transition-colors cursor-pointer" title="Encuéntranos en Cimavilla, Gijón">Ubicación</a></li>
                  <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-base text-gray-400 hover:text-white transition-colors cursor-pointer" title="Volver al inicio">Inicio</a></li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Información Local</h3>
                <ul className="mt-4 space-y-3">
                  <li><a href="https://www.turismoasturias.es/" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white transition-colors" title="Turismo en Gijón, Asturias">Turismo Gijón</a></li>
                  <li><a href="https://www.gijon.es/es/turismo" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white transition-colors" title="Oficina de Turismo de Gijón">Oficina de Turismo</a></li>
                  <li><a href="https://www.gijon.es/es/turismo/cimavilla" target="_blank" rel="noopener noreferrer" className="text-base text-gray-400 hover:text-white transition-colors" title="Barrio de Cimavilla, Gijón">Barrio Cimavilla</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-500 text-center">&copy; {new Date().getFullYear()}{' '}<span translate="no">Smile Hot Dog</span>{' '}Gijón. Especialistas en Hot Dogs en Asturias. Todos los derechos reservados.</p>
          <p className="text-xs text-gray-600 text-center mt-2">
            Web creada por{' '}<span className="font-semibold" translate="no">Carlota Menéndez Álvarez</span>  
            <a href="/sitemap.xml" className="ml-2 text-gray-500 hover:text-gray-400" title="Sitemap XML" style={{display: 'none'}}>Sitemap</a> 
            <a href="/robots.txt" className="ml-2 text-gray-500 hover:text-gray-400" title="Robots.txt" style={{display: 'none'}}>Robots.txt</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;