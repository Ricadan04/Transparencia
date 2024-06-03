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

const CardGrid = ({ menu }) => {
  const navigate = useNavigate();
  let cards = [];
  // Definir las tarjetas dependiendo del contexto
    switch (menu) {
        case 'admin':
           cards = [
              { title: 'Gestión de Usuarios', description: 'Administra los usuarios del sitio.', onClick: () => navigate('/admin/users') },
              { title: 'Gestión de Contenidos', description: 'Administra el contenido del sitio.', onClick: () => navigate('/manage/content') },
              // Otras opciones de administración
            ];
            break;
        case 'home':
           cards = [
            { title: 'Nóminas', description: 'Consulta las nóminas de PLAi.', onClick: () => navigate('/nominas') },
            { title: 'Organigrama', description: 'Consulta el organigrama y personal de PLAi.', onClick: () => navigate('/organigrama') },
            { title: 'Contratos', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
            { title: 'Adjudicaciones directas', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
            { title: 'Licitaciones', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
            // Agrega más tarjetas aquí
          ];
          break;
        case 'content':
          cards = [
            { title: 'Nóminas', description: 'Gestionar registro de nóminas de PLAi.', onClick: () => navigate('/nominassubir') },
            { title: 'Organigrama', description: 'Gestionar organigrama y personal de PLAi.', onClick: () => navigate('/organigramasubir') },
            { title: 'Contratos', description: 'Gestionar registro de nóminas de PLAi.', onClick: () => navigate('/') },
            { title: 'Adjudicaciones directas', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
            { title: 'Licitaciones', description: 'Mas funciones podrán incorporarse al sistema.', onClick: () => navigate('/') },
            // Agrega más tarjetas aquí
          ];
          break;
        default:
          cards = [];
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
