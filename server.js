const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

// ✅ Root route — handles http://localhost:5000/
app.get('/', (req, res) => {
  res.send('✅ Backend is running! Use /api/dashboard or /api/leaderboard');
});

// ✅ Dummy user dashboard API
app.get('/api/dashboard', (req, res) => {
  res.json({
    name: "Deepa",
    referralCode: "deepa2025",
    totalDonations: 5000,
    rewards: ["Free T-Shirt", "Coffee Voucher", "Event Badge"]
  });
});

// ✅ Dummy leaderboard API
app.get('/api/leaderboard', (req, res) => {
  res.json([
    { name: "Deepa", donations: 5000 },
    { name: "Alex", donations: 3000 },
    { name: "Sam", donations: 2000 }
  ]);
});

// ✅ Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
