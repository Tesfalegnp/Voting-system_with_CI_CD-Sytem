import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import VoteForm from './components/VoteForm';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

function App() {
  return (
    <Router>
      {/* Background */}
      <div className="background-image"></div>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3 fixed-top">
        <a className="navbar-brand" href="/">
          <img src="/logo13.jpg" alt="Logo" width="30" height="30" className="d-inline-block align-top" />{' '}
          Online Voting System
        </a>
        <a href="/login" className="btn btn-outline-light">Sign In</a>
      </nav>

      {/* Content */}
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/vote" element={<VoteForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>

      {/* Footer */}
      <footer className="footer text-white text-center py-3 mt-5">
        <p>&copy; 2025 Online Voting System. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;