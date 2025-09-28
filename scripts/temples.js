// Toggle hamburger menu
const menuButton = document.getElementById('menu');
const nav = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('open');
  menuButton.textContent = nav.classList.contains('open') ? '✖' : '☰';
});

// Footer year and last modified
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
