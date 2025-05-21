import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './components/Welcome';
import VoteForm from './components/VoteForm';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';

// Import CSS
import './App.css';

function App() {
  return (
    <Router>
      {/* Background */}
      <div className="background-image"></div>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3 fixed-top">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to="/" className="logo">
            <img src="https://data.textstudio.com/output/sample/animated/2/6/8/5/vote-1-5862.gif" alt="Logo" width="30" height="30" className="me-2" />
            Online Voting System
          </Link>
          <Link to="/login" id= "login"className="custom-link-btn">Sign In</Link>        </div>
      </nav>

      {/* Main Content */}
      <main className="app-container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/vote" element={<VoteForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="footer text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2025 Online Voting System. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;