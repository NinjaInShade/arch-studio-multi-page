const navbarBtn = document.getElementById('navbar-btn');
const navbarOpenIcon = document.getElementById('navbar-open');
const navbarCloseIcon = document.getElementById('navbar-close');

const sidebar = document.getElementById('sidebar');

navbarBtn.addEventListener('click', () => {
  navbarOpenIcon.classList.toggle('navbar__hamburger--active');
  navbarCloseIcon.classList.toggle('navbar__hamburger--active');

  sidebar.classList.toggle('sidebar--active');
});
