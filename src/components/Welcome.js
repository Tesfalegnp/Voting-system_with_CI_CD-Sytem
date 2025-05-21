import React from 'react';
import { Link } from 'react-router-dom';

function Welcome() {
  return (
    <div className="form-container text-center">
      <h1 className="mb-4">Welcome to Online Voting Platform</h1>
      <div className="d-flex gap-3 justify-content-center">
        <Link to="/vote" id="vote" className="custom-link-btn">Vote Now</Link>
      </div>
    </div>
  );
}

export default Welcome;