// ─── FEATURE CARD FILTERS ───
document.addEventListener('DOMContentLoaded', () => {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.feature-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;

      cards.forEach((card, i) => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? 'block' : 'none';
        if (match) {
          card.style.animationDelay = `${i * 0.05}s`;
          card.style.animation = 'none';
          requestAnimationFrame(() => {
            card.style.animation = `cardReveal 0.5s ease both`;
          });
        }
      });
    });
  });
});
