// адаптивная верстка

const navLinks = document.querySelectorAll('.nav-link');
const navBar = document.querySelector('.blog-header-center');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navBar.classList.remove('show');
  });
});

const toggleNavBar = document.querySelector('.toggle-nav');

toggleNavBar.addEventListener('click', () => {
  navBar.classList.toggle('show');
});
