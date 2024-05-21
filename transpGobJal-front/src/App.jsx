import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import NominasPage from './pages/NominasPage';
import OrganigramaPage from './pages/OrganigramaPage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nominas" element={<NominasPage />} />
            <Route path="/organigrama" element={<OrganigramaPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
