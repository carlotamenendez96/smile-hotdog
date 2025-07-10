import React from 'react';
import { CORPORATE_RED } from '../../constants';

export const WaterIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ color: CORPORATE_RED }}
  >
    <path
      fillRule="evenodd"
      d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
      clipRule="evenodd"
    />
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zM5.05 5.05a7 7 0 119.9 9.9 7 7 0 01-9.9-9.9z"
      clipRule="evenodd"
    />
    <path d="M10.5 6a.5.5 0 00-1 0v4.586l-1.293-1.293a.5.5 0 00-.707.707l2 2a.5.5 0 00.707 0l2-2a.5.5 0 00-.707-.707L10.5 10.586V6z" />
  </svg>
);