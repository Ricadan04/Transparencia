import React from 'react';
import CardGrid from '../components/CardGrid';

const HomePage = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Transparencia PLAi</h1>
    <CardGrid menu={'home'} />
  </div>
);

export default HomePage;
