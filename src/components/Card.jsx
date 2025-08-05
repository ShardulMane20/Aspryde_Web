import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-xl shadow-md p-4 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children }) => (
  <div className="space-y-2">
    {children}
  </div>
);
