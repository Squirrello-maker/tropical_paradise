const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger-btn');
const links = nav.querySelectorAll('.nav__item');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
    handleNavItemsAnimation();
});
links.forEach(item => {
    item.addEventListener('click', () => {
        nav.classList.remove('nav--active');
    });
});

const handleNavItemsAnimation = () =>
{
    let delay = 0;
    links.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delay + 's';
        delay++;
    });
}