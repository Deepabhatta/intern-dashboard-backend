// leaderboard.js
const leaderboardEl = document.getElementById('leaderboard');

fetch('https://intern-dashboard-backend-jz14.onrender.com/api/leaderboard')
  .then(response => response.json())
  .then(data => {
    data.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.name} — ₹${entry.donations}`;
      leaderboardEl.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching leaderboard:', error));
