import React from 'react';

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="max-w-md w-full bg-white p-6 shadow-md rounded-md">
        <div className="text-center mb-6">
          <img src="/plai.svg" alt="Logo" className="mx-auto h-16" />
        </div>
        <p className="text-sm text-gray-600 m-6" >Este sitio requiere credenciales administrativas para Ingresar</p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Contraseña"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
