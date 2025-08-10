import React from 'react';
import { ChevronRightIcon } from './icons/ChevronRightIcon';

interface BreadcrumbItem {
  label: string;
  href?: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
            )}
            {item.current ? (
              <span 
                className="text-sm font-medium text-gray-500"
                aria-current="page"
              >
                {item.label}
              </span>
            ) : item.href ? (
              <a
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors duration-200"
                title={`Ir a ${item.label}`}
              >
                {item.label}
              </a>
            ) : (
              <span className="text-sm font-medium text-gray-700">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
