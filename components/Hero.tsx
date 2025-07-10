import React from 'react';
import { CORPORATE_RED } from '../constants';

const Hero: React.FC = () => {
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
    <div
      className="relative min-h-[60vh] md:min-h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('/portada.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-2xl">
          <h1 className="font-anton uppercase tracking-wide text-5xl sm:text-6xl lg:text-7xl text-white">
            El Hot Dog que Gijón Estaba Esperando.
          </h1>
          <p className="mt-6 max-w-xl text-xl text-gray-200">
            Pan brioche tierno, salchicha bockwurst y combinaciones que te sorprenderán. El auténtico sabor de la calle en el corazón de <strong className="font-semibold text-white">Cimavilla</strong>.
          </p>
           <p className="mt-8 text-xl tracking-widest uppercase font-semibold text-white/80">
            Smile, it's gonna get hot.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="#menu"
              onClick={handleScrollClick}
              className="text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-center"
              style={{ backgroundColor: CORPORATE_RED }}
              title="Ver nuestra carta de hot dogs"
            >
              Ver la Carta
            </a>
            <a
              href="#location"
              onClick={handleScrollClick}
              className="text-gray-900 bg-white font-bold py-4 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer text-center"
              title="Encuéntranos en Cimavilla, Gijón"
            >
              Dónde Estamos
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;