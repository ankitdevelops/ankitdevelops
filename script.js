// Theme: respect system, persist override
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('theme');
  if (stored) {
    root.setAttribute('data-theme', stored);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }
  const syncIcon = () => {
    btn.textContent = root.getAttribute('data-theme') === 'dark' ? '☾' : '○';
  };
  syncIcon();
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    syncIcon();
  });

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Collapsible experience entries
  document.querySelectorAll('.job-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const body = document.getElementById(btn.getAttribute('aria-controls'));
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      if (body) body.hidden = open;
    });
  });

  // Mobile nav
  const nav = document.getElementById('siteNav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => nav.classList.remove('open')));
})();
