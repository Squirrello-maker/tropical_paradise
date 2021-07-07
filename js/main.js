const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger-btn');
const links = nav.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
});
links.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('nav--active');
    });
});