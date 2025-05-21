import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function VoteForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [choice, setChoice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://online-voting-api.onrender.com/vote ', {
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
    <main className="form-container text-white text-center p-4">
      <h1 className="mb-4">Online Voting Platform</h1>
      <form onSubmit={handleSubmit} className="bg-dark p-4 rounded shadow" style={{ maxWidth: 400, margin: 'auto', opacity: 0.95 }}>
        <div className="form-group mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group mb-3">
          <label>Phone:</label>
          <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="form-group mb-4">
          <label>Your Choice:</label>
          <select className="form-select" value={choice} onChange={(e) => setChoice(e.target.value)} required>
            <option value="">Select</option>
            <option value="Big">Big</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit Vote</button>
      </form>
      <Link to="/" className="btn btn-link mt-3 text-white">Back to Home</Link>
    </main>
  );
}

export default VoteForm;