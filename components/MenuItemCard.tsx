import React from 'react';
import { MenuItem } from '../types';
import { CORPORATE_RED } from '../constants';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  // Crear alt descriptivo basado en el nombre y ingredientes
  const generateAltText = (item: MenuItem) => {
    const baseText = `<span translate="no">Hot Dog</span> ${item.name} de <span translate="no">Smile Hot Dog</span> Gijón`;
    const ingredients = item.ingredients?.toLowerCase() || '';
    
    if (ingredients.includes('bockwurst')) {
      return `${baseText} con salchicha bockwurst XXL y ingredientes gourmet`;
    } else if (ingredients.includes('bacon')) {
      return `${baseText} con bacon ahumado y salsa especial`;
    } else if (ingredients.includes('trufada')) {
      return `${baseText} con mayonesa trufada y queso grana padano`;
    } else if (ingredients.includes('jalapeño')) {
      return `${baseText} con jalapeño y sabores picantes`;
    } else {
      return `${baseText} con ingredientes frescos y pan brioche`;
    }
  };

  return (
    <div className="group bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-red-100">
      {item.imageUrl && (
        <div className="relative overflow-hidden">
          <img 
              className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110" 
              src={item.imageUrl} 
              alt={generateAltText(item)}
              loading="lazy"
              decoding="async"
              title={`${item.name} - ${item.price} - Smile Hot Dog Gijón`}
          />
           <div className="absolute top-0 right-0 m-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 text-sm font-bold shadow-lg" style={{ color: CORPORATE_RED }}>
             {item.price}
           </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-bangers text-2xl text-gray-900 tracking-wide mb-2" translate="no">{item.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed flex-grow">
          {item.ingredients}
        </p>
      </div>
    </div>
  );
};

export default MenuItemCard;
