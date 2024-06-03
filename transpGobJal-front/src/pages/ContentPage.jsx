import React from 'react';
import CardGrid from '../components/CardGrid';

const ContentPage = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Gestion de contenidos Transparencia PLAi</h1>
    <CardGrid menu={'content'} />
  </div>
);

export default ContentPage;
