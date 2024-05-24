import React, { useState } from 'react';
import PlantillaPage from './PlantillaPage';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        className="flex justify-between w-full px-12 py-6 text-base font-medium text-left text-gray-900 bg-gray-100 rounded-t-lg hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-gray-500 focus-visible:ring-opacity-75"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-12 pt-10 pb-6 text-base text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
};

const OrganigramaPage = () => (
  <div className="container mx-auto p-6">
    <h1 className="text-3xl font-bold mb-6">Organigrama</h1>
    <div className="space-y-4">
      <Accordion title="Organigrama">
      <iframe
          src="/organigrama.pdf"
          title="Organigrama"
          width="100%"
          height="500px"
          className="mt-4 border border-gray-300"
        ></iframe>
      </Accordion>
      <Accordion title="Plantilla">
        <PlantillaPage/>
      </Accordion>
    </div>
  </div>
);

export default OrganigramaPage;
