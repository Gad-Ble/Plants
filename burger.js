let burger = document.querySelector('.burger');
let nav = document.querySelector('.header_nav');
const wrap = document.querySelector('.body');
const main = document.querySelector('.main');

burger.addEventListener('click', () => {
    nav.classList.toggle('head_active');
    burger.classList.toggle('burger_active');
    wrap.classList.toggle('lock');
});


    main.addEventListener('click', () => {
        if(burger.classList.contains('burger_active') === true) {
        nav.classList.toggle('head_active');
        burger.classList.toggle('burger_active');
        wrap.classList.toggle('lock');
        }
    });