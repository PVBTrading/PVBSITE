function goTo(url) {
  window.open(url, "_blank");
}
// View counter simulation
const liveViewersEl = document.getElementById('liveViewers');
const totalViewsEl = document.getElementById('totalViews');

// Load total views from localStorage or start from random number
let totalViews = parseInt(localStorage.getItem('pvb_total_views')) || Math.floor(Math.random() * 500 + 200);
totalViews++;
localStorage.setItem('pvb_total_views', totalViews);

// Show random fluctuating live viewers
function updateLiveViewers() {
  const liveViewers = Math.floor(Math.random() * 20) + 5; // between 5–25
  liveViewersEl.textContent = `👁️ Live: ${liveViewers}`;
  totalViewsEl.textContent = `Viewed: ${totalViews.toLocaleString()}`;
}

// Update every few seconds
updateLiveViewers();
setInterval(updateLiveViewers, 3000);
