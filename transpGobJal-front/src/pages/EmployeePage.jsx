import React, { useState } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import Papa from 'papaparse';

const EmployeePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showBulkForm, setShowBulkForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    codigo: '',
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    cargo: '',
    nivel: '',
    direccion: '',
  });
  const [employees, setEmployees] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const employeesPerPage = 5;

  const directions = [
    'Dirección Administrativa',
    'Dirección General',
    'Dirección Jurídica',
    // Agrega más direcciones según sea necesario
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updatedEmployees = employees.map((employee, index) =>
        index === editIndex ? newEmployee : employee
      );
      setEmployees(updatedEmployees);
      setEditIndex(null);
    } else {
      setEmployees([...employees, newEmployee]);
    }
    setNewEmployee({
      codigo: '',
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      cargo: '',
      nivel: '',
      direccion: '',
    });
    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  const handleEdit = (index) => {
    setNewEmployee(employees[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDownloadCSV = () => {
    const csvContent = 'codigo,nombres,apellidoPaterno,apellidoMaterno,cargo,nivel,direccion\n';
    const encodedUri = encodeURI(`data:text/csv;charset=utf-8,${csvContent}`);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'plantilla_empleados.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setEmployees([...employees, ...results.data]);
      },
    });
  };

  // Obtener los empleados actuales
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = employees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Empleados PLAi</h1>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex space-x-4">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Nuevo Empleado
          </button>
          <button
            onClick={() => setShowBulkForm(!showBulkForm)}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Subir Masivo
          </button>
        </div>

        {showForm && (
          <div className="mt-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="codigo" className="block text-sm font-medium text-gray-700">Código</label>
                <input
                  type="number"
                  id="codigo"
                  name="codigo"
                  value={newEmployee.codigo}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ingresar código"
                />
              </div>
              <div>
                <label htmlFor="nombres" className="block text-sm font-medium text-gray-700">Nombres</label>
                <input
                  type="text"
                  id="nombres"
                  name="nombres"
                  value={newEmployee.nombres}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ingresar nombres"
                />
              </div>
              <div>
                <label htmlFor="apellidoPaterno" className="block text-sm font-medium text-gray-700">Apellido Paterno</label>
                <input
                  type="text"
                  id="apellidoPaterno"
                  name="apellidoPaterno"
                  value={newEmployee.apellidoPaterno}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ingresar apellido paterno"
                />
              </div>
              <div>
                <label htmlFor="apellidoMaterno" className="block text-sm font-medium text-gray-700">Apellido Materno</label>
                <input
                  type="text"
                  id="apellidoMaterno"
                  name="apellidoMaterno"
                  value={newEmployee.apellidoMaterno}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ingresar apellido materno"
                />
              </div>
              <div>
                <label htmlFor="cargo" className="block text-sm font-medium text-gray-700">Cargo</label>
                <input
                  type="text"
                  id="cargo"
                  name="cargo"
                  value={newEmployee.cargo}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ingresar cargo"
                />
              </div>
              <div>
                <label htmlFor="nivel" className="block text-sm font-medium text-gray-700">Nivel</label>
                <input
                  type="number"
                  id="nivel"
                  name="nivel"
                  value={newEmployee.nivel}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Ingresar nivel"
                />
              </div>
              <div>
                <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
                <select
                  id="direccion"
                  name="direccion"
                  value={newEmployee.direccion}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="">Seleccionar dirección</option>
                  {directions.map((direction, index) => (
                    <option key={index} value={direction}>{direction}</option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleSave}
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              >
                {editIndex !== null ? 'Actualizar' : 'Guardar'}
              </button>
            </div>
          </div>
        )}

        {showBulkForm && (
          <div className="mt-4 p-4 border rounded-md">
            <div className="flex justify-between items-center">
              <button
                onClick={handleDownloadCSV}
                className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
              >
                Descargar Plantilla CSV
              </button>
              <div className="relative group">
                <FaQuestionCircle className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                <div className="absolute left-0 bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded-md p-2 shadow-lg">
                  Las instrucciones para el archivo CSV son las siguientes: cada columna debe tener el nombre correspondiente en la primera fila. Asegúrese de que los datos estén correctamente alineados.
                </div>
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="csvUpload" className="block text-sm font-medium text-gray-700">Subir archivo CSV</label>
              <input
                type="file"
                id="csvUpload"
                accept=".csv"
                onChange={handleFileUpload}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        )}
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Código</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombres</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido Paterno</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Apellido Materno</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cargo</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nivel</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dirección</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentEmployees.map((employee, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{employee.codigo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.nombres}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.apellidoPaterno}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.apellidoMaterno}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.cargo}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.nivel}</td>
                <td className="px-6 py-4 whitespace-nowrap">{employee.direccion}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => handleEdit(index)}
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
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
        <div className="py-2 flex justify-end">
          <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            {[...Array(Math.ceil(employees.length / employeesPerPage)).keys()].map((number) => (
              <button
                key={number + 1}
                onClick={() => paginate(number + 1)}
                className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${
                  currentPage === number + 1 ? 'bg-gray-300' : 'hover:bg-gray-50'
                }`}
              >
                {number + 1}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
