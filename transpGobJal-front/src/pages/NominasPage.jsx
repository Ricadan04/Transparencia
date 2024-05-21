import React, { useState } from 'react';

const NominasPage = () => {
  const [filters, setFilters] = useState({
    month: '',
    year: '',
    name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Aquí podrías añadir la lógica para buscar las nóminas basadas en los filtros
    console.log('Filtros aplicados:', filters);
  };

  const sampleData = [
    { name: 'Juan Pérez', position: 'Desarrollador', grossSalary: 50000, netSalary: 40000 },
    { name: 'Ana Gómez', position: 'Diseñadora', grossSalary: 45000, netSalary: 36000 },
    // Agrega más datos de ejemplo aquí
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Nóminas</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
          <div>
            <label htmlFor="month" className="block text-sm font-medium text-gray-700">Mes</label>
            <select
              id="month"
              name="month"
              value={filters.month}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">Seleccionar</option>
              <option value="01">Enero</option>
              <option value="02">Febrero</option>
              {/* Agrega más opciones de mes aquí */}
            </select>
          </div>

          <div>
            <label htmlFor="year" className="block text-sm font-medium text-gray-700">Año</label>
            <input
              type="number"
              id="year"
              name="year"
              value={filters.year}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="2023"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={filters.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Buscar por nombre"
            />
          </div>

          <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
            >
              Buscar
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Puesto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sueldo bruto mensual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sueldo neto estimado</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {sampleData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.grossSalary}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.netSalary}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-indigo-600 hover:text-indigo-900">Ver detalle</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NominasPage;
