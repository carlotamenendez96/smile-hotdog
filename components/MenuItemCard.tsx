import React from 'react';
import { MenuItem } from '../types';
import { CORPORATE_RED } from '../constants';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-red-100">
      {item.imageUrl && (
        <div className="relative overflow-hidden">
          <img 
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
              src={item.imageUrl} 
              alt={`Hot Dog ${item.name} de Smile Hot Dog`} 
          />
           <div className="absolute top-0 right-0 m-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-bold shadow-lg" style={{ color: CORPORATE_RED }}>
             {item.price}
           </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bangers text-2xl text-gray-900 tracking-wide mb-2">{item.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {item.ingredients}
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;