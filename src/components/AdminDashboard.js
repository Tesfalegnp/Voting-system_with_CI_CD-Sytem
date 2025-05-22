import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdminLoggedIn');

  const [votes, setVotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }

    const fetchVotes = async () => {
      try {
        const response = await axios.get('https://online-voting-api.onrender.com/vote');
        setVotes(response.data);
        setLoading(false);
      } catch (error) {
        alert("Error fetching votes");
        console.error(error);
        setLoading(false);
      }
    };

    fetchVotes();
  }, [navigate, isAdmin]);

  return (
    <div className="dashboard-container text-center p-5">
      <h1 className="mb-4">Admin Dashboard</h1>
      <p>Here are all submitted votes:</p>

      {loading ? (
        <p>Loading votes...</p>
      ) : (
        <table className="table table-dark table-bordered table-hover w-75 mx-auto">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Choice</th>
            </tr>
          </thead>
          <tbody>
            {votes.length > 0 ? (
              votes.map((vote, index) => (
                <tr key={index}>
                  <td>{vote.name}</td>
                  <td>{vote.phone}</td>
                  <td>{vote.choice}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No votes yet</td>
              </tr>
            )}
          </tbody>
        </table>
      )}

      <Link to="/" className="btn btn-outline-light mt-3">Logout</Link>
    </div>
  );
}

export default AdminDashboard;