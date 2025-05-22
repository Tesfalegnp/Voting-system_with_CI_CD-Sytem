import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './login.css'; // Make sure this import exists


function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '123') {
      localStorage.setItem('isAdminLoggedIn', 'true');
      navigate('/admin');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Portal</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <input 
            type="password" 
            className="form-control" 
            placeholder="password"
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
       <center><button type="submit" className="btn btn-success">
          Login
        </button> </center> 
      </form>

      <Link to="/" className="btn btn-link">
        ← Back to Home
      </Link>
    </div>
  );
}

export default Login;