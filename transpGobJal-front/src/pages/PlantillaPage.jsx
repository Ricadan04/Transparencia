import React, { useState } from 'react';

const PlantillaPage = () => {
  const [filters, setFilters] = useState({
    name: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    // Aquí podrías añadir la lógica para buscar los registros basados en los filtros
    console.log('Filtros aplicados:', filters);
  };

  const sampleData = [
    { name: 'Juan Pérez', address: 'Direccion General' },
    { name: 'Ana Gómez', address: 'Direccion Administrativa' },
    { name: 'Daniel Gomez', address: 'Direccion General' },
    { name: 'Juana Lara', address: 'Direccion Planeacion' },
    // Agrega más datos de ejemplo aquí
  ];

  // Filtrar los datos según los filtros aplicados
  const filteredData = sampleData.filter(item => 
    (filters.name === '' || item.name.toLowerCase().includes(filters.name.toLowerCase())) &&
    (filters.address === '' || item.address.toLowerCase().includes(filters.address.toLowerCase()))
  );

  return (
    <div className="container mx-auto p-6">
      {/* <h1 className="text-3xl font-bold mb-6">Plantilla</h1> */}

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={filters.name}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Buscar por nombre"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
            <input
              type="text"
              id="address"
              name="address"
              value={filters.address}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
              placeholder="Buscar por dirección"
            />
          </div>

          {/* <div className="flex items-end">
            <button
              onClick={handleSearch}
              className="w-full bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            >
              Buscar
            </button>
          </div> */}
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredData.map((row, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{row.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlantillaPage;
