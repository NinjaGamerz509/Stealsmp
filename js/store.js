// ─── STORE SIDEBAR LOGIC ───

function toggleCat(cat) {
  const sub = document.getElementById(`sub-${cat}`);
  const btn = document.querySelector(`#cat-${cat} .sidebar-cat-btn`);
  const isOpen = sub.classList.contains('open');

  // Close all cats
  document.querySelectorAll('.sidebar-sub').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.sidebar-cat-btn').forEach(b => b.classList.remove('open'));

  if (!isOpen) {
    sub.classList.add('open');
    btn.classList.add('open');
  }
}

function toggleSub(id) {
  const items = document.getElementById(`sub-${id}`);
  const btn = items.previousElementSibling;
  const isOpen = items.classList.contains('open');

  // Close all sub-items in same parent
  const parent = items.closest('.sidebar-sub');
  parent.querySelectorAll('.sidebar-items').forEach(s => s.classList.remove('open'));
  parent.querySelectorAll('.sidebar-sub-btn').forEach(b => b.classList.remove('active'));

  if (!isOpen) {
    items.classList.add('open');
    btn.classList.add('active');
  }
}

function showItem(id) {
  // Hide all panels
  document.querySelectorAll('.item-panel').forEach(p => p.classList.remove('active'));

  // Show selected panel
  const panel = document.getElementById(`panel-${id}`);
  if (panel) panel.classList.add('active');

  // Highlight active item btn
  document.querySelectorAll('.sidebar-item-btn').forEach(b => b.classList.remove('active'));
  const btns = document.querySelectorAll('.sidebar-item-btn');
  btns.forEach(btn => {
    if (btn.getAttribute('onclick')?.includes(`'${id}'`)) {
      btn.classList.add('active');
    }
  });

  // Scroll content to top on mobile
  if (window.innerWidth <= 768) {
    document.querySelector('.store-content')?.scrollIntoView({ behavior: 'smooth' });
  }
}
