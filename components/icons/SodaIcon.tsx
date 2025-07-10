import React from 'react';
import { CORPORATE_RED } from '../../constants';

export const SodaIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ color: CORPORATE_RED }}
  >
    <path
      fillRule="evenodd"
      d="M7 2a1 1 0 00-1 1v1H4a1 1 0 00-1 1v10a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1h-2V3a1 1 0 00-1-1H7zm2 3h2V3H9v2zM4 6h12v9H4V6z"
      clipRule="evenodd"
    />
    <path d="M7 9a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" />
  </svg>
);