import React from 'react';
import { Link } from 'react-router-dom';

function AdminDashboard() {
  const isAdmin = localStorage.getItem('isAdminLoggedIn');

  if (!isAdmin) {
    window.location.href = '/login';
    return null;
  }

  return (
    <div className="dashboard-container">
      <h1>Welcome, Admin!</h1>
      <p>You are now logged in.</p>
      <Link to="/" className="btn btn-primary">Logout</Link>
    </div>
  );
}

export default AdminDashboard;