import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="container mt-5 pt-5">
      <h1 className="text-white text-center mb-4">Welcome to Online Voting Platform</h1>
      <div className="text-center">
        <Link to="/vote" className="btn btn-primary me-3">Vote Now</Link>
        <Link to="/login" className="btn btn-outline-light">Admin Sign In</Link>
      </div>
    </div>
  );
}

export default Welcome;