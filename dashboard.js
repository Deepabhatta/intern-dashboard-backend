// dashboard.js
const nameEl = document.getElementById('name');
const referralCodeEl = document.getElementById('referralCode');
const donationsEl = document.getElementById('donations');
const rewardsList = document.getElementById('rewards');

// ✅ Fetch dashboard data from LIVE backend
fetch('https://intern-dashboard-backend-jz14.onrender.com/api/dashboard')
  .then(response => response.json())
  .then(data => {
    nameEl.textContent = data.name;
    referralCodeEl.textContent = data.referralCode;
    donationsEl.textContent = data.totalDonations;

    // Add rewards
    data.rewards.forEach(reward => {
      const li = document.createElement('li');
      li.textContent = reward;
      rewardsList.appendChild(li);
    });
  })
  .catch(error => console.error('Error fetching dashboard data:', error));
