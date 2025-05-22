const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection (modern syntax, no deprecated options)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// Vote Schema
const voteSchema = new mongoose.Schema({
  name: String,
  phone: String,
  choice: String
});
const Vote = mongoose.model('Vote', voteSchema);

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/vote', async (req, res) => {
  const { name, phone, choice } = req.body;
  try {
    const newVote = new Vote({ name, phone, choice });
    await newVote.save();
    res.status(201).json({ message: "Vote recorded!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save vote" });
  }
});

app.get('/', (req, res) => {
  res.json({ message: "Backend is running" });
});

// Updated for Render: Bind to 0.0.0.0 instead of localhost
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});

// Route to get all votes
app.get('/vote', async (req, res) => {
  try {
    const votes = await Vote.find(); // Get all vote records
    res.json(votes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch votes' });
  }
});