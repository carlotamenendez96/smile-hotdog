import React from 'react';
import { MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';
import { CORPORATE_RED } from '../constants';
import { SodaIcon } from './icons/SodaIcon';
import { WaterIcon } from './icons/WaterIcon';
import { BeerIcon } from './icons/BeerIcon';

interface MenuSectionProps {
  hotDogs: MenuItem[];
  drinks: MenuItem[];
}

const DrinkItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  const getIcon = () => {
    switch (item.category) {
      case 'soda':
        return <SodaIcon />;
      case 'water':
        return <WaterIcon />;
      case 'beer':
        return <BeerIcon />;
      default:
        return null;
    }
  };

  return (
    <li className="py-4 flex items-center space-x-4">
      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full" style={{ backgroundColor: `${CORPORATE_RED}1A`}}>
        {getIcon()}
      </div>
      <div className="flex-grow">
        <span className="text-lg font-semibold text-gray-800">{item.name}</span>
      </div>
      <span className="text-lg font-bold" style={{ color: CORPORATE_RED }}>{item.price}</span>
    </li>
  );
};


const MenuSection: React.FC<MenuSectionProps> = ({ hotDogs, drinks }) => {
  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="font-anton uppercase text-4xl md:text-5xl tracking-wide text-gray-900">Nuestra Carta de Hot Dogs</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">Todos nuestros hot dogs van acompañados de patatas paja para una experiencia completa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {hotDogs.map((item) => (
            <MenuItemCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-16 md:mt-24">
            <div className="text-center mb-12">
                 <h3 className="font-anton uppercase text-3xl md:text-4xl tracking-wide text-gray-900">Para Beber</h3>
                 <p className="mt-3 text-gray-600">El acompañamiento perfecto para tu hot dog.</p>
            </div>
            <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
                    <ul className="divide-y divide-gray-200">
                        {drinks.slice(0, Math.ceil(drinks.length / 2)).map((drink, index) => (
                            <DrinkItem key={index} item={drink} />
                        ))}
                    </ul>
                    <ul className="divide-y divide-gray-200">
                        {drinks.slice(Math.ceil(drinks.length / 2)).map((drink, index) => (
                           <DrinkItem key={index} item={drink} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default MenuSection;