import { $, $$ } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
  // Set footer year
  const yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Active nav highlighting
  const currentPage = window.location.pathname.split('/').pop();
  $$('.nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // Fade in cards
  $$('.card').forEach((card, i) => {
    card.style.animationDelay = `${i * 0.15}s`;
    card.classList.add('fade-in');
  });
});