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

const headerTitle = document.getElementById('header-title');
const headerSubtitle = document.getElementById('header-subtitle');

const slideData = [
  {
    title: `Project Paramour`,
    subTitle:
      'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
  },
  {
    title: `Seraph Station`,
    subTitle:
      'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
  },
  {
    title: `Federal II Tower`,
    subTitle:
      'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
  },
  {
    title: `Trinity Bank Tower`,
    subTitle:
      'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
  },
];

for (let i = 0; i < headerBtns.length; i++) {
  headerBtns[i].addEventListener('click', () => {
    // Disable active class on other buttons and add to current
    for (let j = 0; j < headerBtns.length; j++) {
      headerBtns[j].classList.remove('header__next-btn--active');
    }

    headerBtns[i].classList.add('header__next-btn--active');

    headerContainer.id = `header__container-${headerBtns[i].innerHTML}`;

    headerTitle.innerHTML = slideData[i].title;
    headerSubtitle.innerHTML = slideData[i].subTitle;
  });
}
