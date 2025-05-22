import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './VoteForm.css';

function VoteForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [choice, setChoice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://voting-system-with-ci-cd-sytem.onrender.com/vote', {
        name,
        phone,
        choice
      });
      alert(response.data.message);
    } catch (error) {
      alert("Error submitting vote");
      console.error(error);
    }
  };

  return (
    <div className="vote-form-container">
      <div className="vote-header">
        <h1>Online Voting Platform</h1>
        <p>Your voice matters - cast your vote securely</p>
      </div>
      
      <form onSubmit={handleSubmit} className="vote-form">
        <div className="form-group">
          <label>Full Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your full name"
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Phone Number</label>
          <input 
            type="text" 
            className="form-control" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            placeholder="Enter your phone number"
            required 
          />
        </div>
        
        <div className="form-group">
          <label>Your Selection</label>
              <select 
            className="form-select" 
            value={choice} 
            onChange={(e) => setChoice(e.target.value)} 
            required
          > 
            <option value="">Choose an option</option>
            <option id="med" value="Prosperity">Prosperity Party</option>
            <option id="med" value="Ezema">National Movement of Amhara</option>
            <option id="med" value="TPL">Tigray People's Liberation Front</option>
          </select> 
        </div>
        
        <button type="submit" className="submit-btn">
          Submit Your Vote
        </button>
      </form>
      
      <Link to="/" className="back-link">
        ← Return to Homepage
      </Link>
    </div>
  );
}

export default VoteForm;