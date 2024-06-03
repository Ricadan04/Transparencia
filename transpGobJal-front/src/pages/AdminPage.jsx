import React from 'react';
import CardGrid from '../components/CardGrid';

const AdminPage = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Panel de control Transparencia PLAi</h1>
    <CardGrid menu={'admin'} />
  </div>
);

export default AdminPage;
