const headerBurger = document.querySelector('.header__burger');

const burgerTop = document.querySelector('.burger__item_top');
const burgerMiddle = document.querySelector('.burger__item_middle');
const burgerButton = document.querySelector('.burger__item_but');

const container = document.querySelector('.header__menu');

headerBurger.addEventListener('click', () => {
    burgerTop.classList.toggle('active');
    burgerMiddle.classList.toggle('active');
    burgerButton.classList.toggle('active');
    // header__burger.classList.toggle('active');
    container.classList.toggle('active');
    document.body.style.toggle.overflow = 'hidden';
})