import React from 'react';
import Navbar from './components/Navbar';
import ComplaintForm from './components/ComplaintForm';
import ComplaintList from './components/ComplaintList';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ComplaintForm />
        <ComplaintList />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default complaint;
