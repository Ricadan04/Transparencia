import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NominasPage from './pages/NominasPage';
import OrganigramaPage from './pages/OrganigramaPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import NotFoundPage from './pages/NotFoundPage';
import ContentPage from './pages/ContentPage';
import DepartmentPage from './pages/DepartmentPage';
import EmployeePage from './pages/EmployeePage';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen  bg-gray-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nominas" element={<NominasPage />} />
            <Route path="/organigrama" element={<OrganigramaPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/manage" element={<AdminPage />} />
            <Route path="/manage/content" element={<ContentPage />} />
            <Route path="/manage/department" element={<DepartmentPage />} />
            <Route path="/manage/employee" element={<EmployeePage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
