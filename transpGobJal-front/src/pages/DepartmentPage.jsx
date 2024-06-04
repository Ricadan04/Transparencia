import React, { useState } from 'react';

const DepartmentPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [newDirectionName, setNewDirectionName] = useState('');
  const [directions, setDirections] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedDirections = directions.map((direction, index) =>
        index === editIndex ? { name: newDirectionName } : direction
      );
      setDirections(updatedDirections);
      setEditIndex(null);
    } else {
      setDirections([...directions, { name: newDirectionName }]);
    }
    setNewDirectionName('');
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedDirections = directions.filter((_, i) => i !== index);
    setDirections(updatedDirections);
  };

  const handleEdit = (index) => {
    setNewDirectionName(directions[index].name);
    setEditIndex(index);
    setShowForm(true);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Direcciones PLAi</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
        >
          Nueva Dirección
        </button>
        {showForm && (
          <div className="mt-4">
            <label htmlFor="newDirectionName" className="block text-sm font-medium text-gray-700">Nombre de la Dirección</label>
            <input
              type="text"
              id="newDirectionName"
              value={newDirectionName}
              onChange={(e) => setNewDirectionName(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Ingresar nombre"
            />
            <button
              onClick={handleSave}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {editIndex !== null ? 'Actualizar' : 'Guardar'}
            </button>
          </div>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre Dirección</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {directions.map((direction, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{direction.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DepartmentPage;

