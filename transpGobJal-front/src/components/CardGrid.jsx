import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, description, onClick }) => (
  <div 
    className="bg-gray-100 shadow-md rounded-lg p-6 cursor-pointer hover:shadow-xl transition-shadow"
    onClick={onClick}
  >
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

const CardGrid = ({ isAdminPage }) => {
  const navigate = useNavigate();

  // Definir las tarjetas dependiendo del contexto
  const cards = isAdminPage
    ? [
        { title: 'Gestión de Usuarios', description: 'Administra los usuarios del sitio.', onClick: () => navigate('/admin/users') },
        { title: 'Gestión de Contenidos', description: 'Administra el contenido del sitio.', onClick: () => navigate('/admin/content') },
        // Otras opciones de administración
      ]
    : [
        { title: 'Nóminas', description: 'Consulta las nóminas de Plai.', onClick: () => navigate('/nominas') },
        { title: 'Organigrama', description: 'Consulta el organigrama.', onClick: () => navigate('/organigrama') },
        { title: 'Contratos', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
        { title: 'Adjudicaciones directas', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
        { title: 'Licitaciones', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
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

