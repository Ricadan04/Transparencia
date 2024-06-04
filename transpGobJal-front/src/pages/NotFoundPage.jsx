import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-full bg-gray-300">
            <div className="max-w-md w-full bg-white p-6 shadow-md rounded-md">
                <div className="text-center mb-6">
                    <img src="/plai.svg" alt="Logo" className="mx-auto h-16" />
                </div>
                <h1 className='text-center text-gray-800 m-6'>404 - Página no encontrada</h1>
                <p className="text-sm text-gray-600 m-6" >Lo sentimos, la página que estás buscando no pudo ser encontrada.</p>
                <p className="text-sm text-gray-600 m-6" >Puedes volver a la <Link to='/' className='text-blue-500'> página de inicio </Link>para encontrar lo que buscas.</p>
             </div>
        </div>
    );
};

export default NotFoundPage;
