import React from 'react';
import { CORPORATE_RED } from '../../constants';

export const BeerIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
    style={{ color: CORPORATE_RED }}
  >
    <path d="M18 9.93l-3.23.29a2.5 2.5 0 01-2.45-2.95l.59-3.25A2.5 2.5 0 0010.66 2H9.34a2.5 2.5 0 00-2.25 1.72l.59 3.25a2.5 2.5 0 01-2.45 2.95L2 9.93V14a1 1 0 001 1h14a1 1 0 001-1V9.93z" />
    <path d="M2 16a1 1 0 001 1h14a1 1 0 001-1v-1H2v1z" />
  </svg>
);