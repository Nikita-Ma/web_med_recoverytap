// переключение на темную тему

const themeSwitcher = document.querySelector('.theme-switcher');
const body = document.querySelector('body');

themeSwitcher.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
});
