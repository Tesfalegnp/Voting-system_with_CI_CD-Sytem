import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container text-white text-center p-5">
      <h2 className="mb-4">Admin Login</h2>
      <form onSubmit={handleLogin} className="bg-dark p-4 rounded shadow" style={{ maxWidth: 400, margin: 'auto', opacity: 0.95 }}>
        <div className="form-group mb-3">
          <label>Username</label>
          <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form-group mb-4">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-success w-100">Login</button>
      </form>
      <Link to="/" className="btn btn-link mt-3 text-white">Back to Home</Link>
    </div>
  );
}

export default Login;