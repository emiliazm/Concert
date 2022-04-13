/* eslint-disable linebreak-style */
const barImage = document.querySelector('.mobile-menu');
const crossMenu = document.querySelector('.close');
const desktopMenu = document.querySelector('.mobile-menu-up');
barImage.addEventListener('click', () => {
  desktopMenu.style.display = 'block';
});
crossMenu.addEventListener('click', () => {
  desktopMenu.style.display = 'none';
});
document.querySelectorAll('.hamburger-nav-list').forEach((n) => n.addEventListener('click', () => {
  desktopMenu.style.display = 'none';
}));
