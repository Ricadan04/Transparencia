// src/components/Menu.js
import React from 'react';
import Card from './Card';

const Menu = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, index) => (
        <Card 
          key={index} 
          title={item.title} 
          description={item.description} 
          onClick={item.onClick} 
        />
      ))}
    </div>
  );
};

export default Menu;
