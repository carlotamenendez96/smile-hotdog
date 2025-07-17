import React from 'react';
import { CORPORATE_RED } from '../constants';
import { LocationMarkerIcon } from './icons/LocationMarkerIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { ClockIcon } from './icons/ClockIcon';

const InfoSection: React.FC = () => {
  return (
    <section id="location" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-wide text-gray-900">Visítanos en Cimavilla, Gijón</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-600">Estamos en el emblemático barrio de Cimavilla, ¡te esperamos para que pruebes los mejores hot dogs de Asturias!</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="rounded-lg shadow-xl overflow-hidden aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2899.719662391039!2d-5.666111884510793!3d43.54483787912497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd367b8483bcf3d9%3A0xba0034346817b165!2sC.%20de%20la%20Artiller%C3%ADa%2C%2010%2C%2033201%20Gij%C3%B3n%2C%20Asturias%2C%20Spain!5e0!3m2!1sen!2sus!4v1678886400000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Smile Hot Dog en Gijón"
            ></iframe>
          </div>
          <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <img src="/logo.PNG" alt="Logo Smile Hot Dog" className="h-10 w-10 rounded-full" />
                <h3 className="text-2xl font-bold text-gray-900 mb-0">Smile Hot Dog Gijón</h3>
              </div>
              <p className="mt-2 text-gray-600">
                Parte del grupo <span className="font-semibold" style={{ color: CORPORATE_RED }}>Smile Smash Burger</span>, trayendo los mejores hot dogs a Gijón.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1"><LocationMarkerIcon /></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Dirección</h4>
                  <p className="text-gray-600">C/ Artillería 10, 33201 Gijón, Asturias</p>
                </div>
              </div>
              {/* <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1"><PhoneIcon /></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Teléfono para Pedidos</h4>
                  <a href="tel:+34987654321" className="text-gray-600 hover:text-red-600 transition-colors" title="Llamar para hacer un pedido">987 654 321</a>
                </div>
              </div> */}
               <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 pt-1"><ClockIcon /></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">Horario</h4>
                  <p className="text-gray-600">Lunes a Domingo: 19:00 - 23:30</p>
                </div>
              </div>
            </div>
            {/* <a href="tel:+34987654321" className="inline-block text-white font-bold py-3 px-6 rounded-lg transition-transform duration-200 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg" style={{ backgroundColor: CORPORATE_RED }} title="Llamar para hacer un pedido">
              Llamar para Pedir
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;