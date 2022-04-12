// Sidebar

const navbarBtn = document.getElementById('navbar-btn');
const navbarOpenIcon = document.getElementById('navbar-open');
const navbarCloseIcon = document.getElementById('navbar-close');

const sidebar = document.getElementById('sidebar');

navbarBtn.addEventListener('click', () => {
  navbarOpenIcon.classList.toggle('navbar__hamburger--active');
  navbarCloseIcon.classList.toggle('navbar__hamburger--active');

  sidebar.classList.toggle('sidebar--active');
});

// Hero section
const headerContainer = document.getElementsByClassName('header__container')[0];
const headerBtns = document.getElementsByClassName('header__next-btn');

for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener('click', () => {
    // Disable active class on other buttons and add to current
    for (let j = 0; j < headerBtns.length; j++) {
      headerBtns[j].classList.remove('header__next-btn--active');
    }

    headerBtns[i].classList.add('header__next-btn--active');

    headerContainer.id = `header__container-${headerBtns[i].innerHTML}`;
  });
}
