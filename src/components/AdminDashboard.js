import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AdminDashboard.css';

function AdminDashboard() {
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem('isAdminLoggedIn');

  const [votes, setVotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [voteCounts, setVoteCounts] = useState({});
  const [totalVotes, setTotalVotes] = useState(0);

  useEffect(() => {
    if (!isAdmin) {
      navigate('/login');
    }

    const fetchVotes = async () => {
      try {
        const response = await axios.get('https://voting-system-with-ci-cd-sytem.onrender.com/votes');
        setVotes(response.data);
        
        // Calculate vote counts
        const counts = response.data.reduce((acc, vote) => {
          acc[vote.choice] = (acc[vote.choice] || 0) + 1;
          return acc;
        }, {});
        
        setVoteCounts(counts);
        setTotalVotes(response.data.length);
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
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Voting Results Dashboard</h1>
        <div className="total-votes">
          <span className="badge">{totalVotes}</span>
          <span>Total Votes</span>
        </div>
      </div>

      <div className="dashboard-content">
        {loading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>Loading voting data...</p>
          </div>
        ) : (
          <>
            <div className="results-summary">
              {Object.entries(voteCounts).map(([choice, count]) => (
                <div key={choice} className="choice-card">
                  <div className="choice-name">{choice}</div>
                  <div className="choice-count">{count}</div>
                  <div className="choice-percent">
                    {Math.round((count / totalVotes) * 100)}%
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-fill"
                      style={{ width: `${(count / totalVotes) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="votes-table-container">
              <h2>Detailed Votes</h2>
              <table className="votes-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Choice</th>
                    <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                  {votes.length > 0 ? (
                    votes.map((vote, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{vote.name}</td>
                        <td>{vote.phone}</td>
                        <td>
                          <span className={`choice-tag ${vote.choice.toLowerCase()}`}>
                            {vote.choice}
                          </span>
                        </td>
                        <td>
                          {new Date(vote.createdAt || Date.now()).toLocaleString()}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="no-votes">
                        No votes recorded yet
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>

      <div className="dashboard-footer">
        <Link to="/" className="logout-btn">
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;