const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));

// Vote Schema
const voteSchema = new mongoose.Schema({
  name: String,
  phone: String,
  choice: String
});
const Vote = mongoose.model('Vote', voteSchema);

// Routes
app.use(cors());
app.use(express.json());

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});