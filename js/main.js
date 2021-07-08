const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger-btn');
const links = nav.querySelectorAll('.nav__item');
const navbars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav--active');
    changeBarsColor();
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

const handleCurrentYear = () => 
{
    let year = (new Date).getFullYear();
    footerYear.innerText = year;
}

const handleObserver = () => 
{
    const currentSection = window.scrollY;
    allSections.forEach(section => {

        if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60)
        {
            navbars.classList.add('black-bars-color');
        }
        else if(!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60)
        {
            navbars.classList.remove('black-bars-color');
        }

    });
}
const changeBarsColor = () =>
{
    if(navbars.classList.contains('black-bars-color'))
    {
        navbars.classList.remove('black-bars-color');
    }
}
window.addEventListener('scroll', handleObserver);
handleCurrentYear();