import React from 'react';

export const ChevronLeftIcon: React.FC<{onClick: () => void}> = ({onClick}) => (
  <svg 
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2.5} 
    stroke="currentColor" 
    className="w-8 h-8"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);