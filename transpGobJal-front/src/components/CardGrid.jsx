import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, onClick }) => (
  <div 
    className="bg-white shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
    onClick={onClick}
  >
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CardGrid = () => {
  const navigate = useNavigate();

  const cards = [
    { title: 'Nóminas', description: 'Consulta las nóminas de Plai.', onClick: () => navigate('/nominas') },
    { title: 'Organigrama', description: 'Consulta el organigrama.', onClick: () => navigate('/organigrama') },
    { title: 'Contratos', description: 'Mas funciones podran incorporarse al sistema.', onClick: () => navigate('/') },
    { title: 'Adjudicaciones directas', description: 'Mas funciones podran incorporarse al sistema.', onClick: () => navigate('/') },
    { title: 'Licitaciones', description: 'Mas funciones podran incorporarse al sistema.', onClick: () => navigate('/') },
    // Agrega más tarjetas aquí
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
