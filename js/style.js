(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 200) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}());

//Burger menu

(function () {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const menuClose = document.querySelector('.header__nav-close')
    burger.addEventListener('click', () => {
        menu.classList.add('header__nav-active');
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__nav-active');
    })
}())