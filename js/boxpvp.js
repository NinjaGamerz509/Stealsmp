// ─── BOXPVP LAUNCH COUNTDOWN ───
// Launch: Monday June 1, 2026 at 6:00 PM IST (UTC+5:30)
const LAUNCH_DATE = new Date('2026-06-01T18:00:00+05:30');

function updateCountdown() {
  const now = new Date();
  const diff = LAUNCH_DATE - now;

  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-mins').textContent = '00';
    document.getElementById('cd-secs').textContent = '00';

    // Show launched message
    const badge = document.querySelector('.boxpvp-badge');
    if (badge) badge.innerHTML = '<div class="badge-dot"></div> Now Live!';
    return;
  }

  const days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins  = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const secs  = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('cd-days').textContent  = String(days).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2, '0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
