// ─── LIVE SERVER STATUS ───
async function fetchServerStatus() {
  const card = document.getElementById('status-card');
  const dot = document.getElementById('status-dot');
  const label = document.getElementById('status-label');
  const players = document.getElementById('status-players');
  const count = document.getElementById('status-count');
  const statPlayers = document.getElementById('stat-players');

  try {
    const res = await fetch('https://api.mcstatus.io/v2/status/bedrock/play.stealsmp.fun:19132');
    const data = await res.json();

    if (data.online) {
      card.classList.add('online');
      card.classList.remove('offline');
      label.textContent = 'Server Online';
      label.style.color = 'var(--green-status)';
      players.textContent = `Bedrock • Port 19132`;
      const online = data.players?.online ?? 0;
      const max = data.players?.max ?? 0;
      count.textContent = `${online}/${max}`;
      if (statPlayers) statPlayers.textContent = `${online}/${max}`;
    } else {
      throw new Error('offline');
    }
  } catch {
    card.classList.add('offline');
    card.classList.remove('online');
    label.textContent = 'Server Offline';
    label.style.color = 'var(--red-status)';
    players.textContent = 'Unable to connect';
    count.textContent = '0';
    if (statPlayers) statPlayers.textContent = '0';
  }
}

// ─── SEASON COUNTDOWN ───
// Season 4 ends approx ~2 months from now (July 27, 2026)
function updateSeasonTimer() {
  const endDate = new Date('2026-07-27T23:59:59');
  const now = new Date();
  const diff = endDate - now;

  if (diff <= 0) {
    document.getElementById('t-days').textContent = '00';
    document.getElementById('t-hours').textContent = '00';
    document.getElementById('t-mins').textContent = '00';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('t-days').textContent = String(days).padStart(2, '0');
  document.getElementById('t-hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('t-mins').textContent = String(mins).padStart(2, '0');
}

// Init
fetchServerStatus();
updateSeasonTimer();
setInterval(updateSeasonTimer, 60000);
setInterval(fetchServerStatus, 60000);
