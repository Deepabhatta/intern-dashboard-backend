// script.js

const backendUrl = 'http://localhost:5000/api';

// Populate Dashboard
if (window.location.pathname.includes('dashboard.html')) {
  fetch(`${backendUrl}/dashboard`)
    .then(res => res.json())
    .then(data => {
      document.getElementById('name').textContent = data.name;
      document.getElementById('referralCode').textContent = data.referralCode;
      document.getElementById('donations').textContent = data.totalDonations;

      const rewardsList = document.getElementById('rewards');
      data.rewards.forEach(reward => {
        const li = document.createElement('li');
        li.textContent = reward;
        rewardsList.appendChild(li);
      });
    })
    .catch(err => console.error(err));
}

// Populate Leaderboard
if (window.location.pathname.includes('leaderboard.html')) {
  fetch(`${backendUrl}/leaderboard`)
    .then(res => res.json())
    .then(data => {
      const leaderboard = document.getElementById('leaderboard');
      data.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} - ₹${user.donations}`;
        leaderboard.appendChild(li);
      });
    })
    .catch(err => console.error(err));
}

// Signup Form Validation + Toast
if (window.location.pathname.includes('signup.html')) {
  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (!fullName || !email || !password || !confirmPassword) {
      showToast('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      showToast('Passwords do not match.');
      return;
    }

    // ✅ Here you could send this to backend or Firebase.
    // For now, simulate success:
    showToast('Signup successful! Redirecting...');
    setTimeout(() => {
      window.location.href = 'dashboard.html';
    }, 1500);
  });
}

// Simple Toast
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'show';
  setTimeout(() => {
    toast.className = toast.className.replace('show', '');
  }, 2500);
}
