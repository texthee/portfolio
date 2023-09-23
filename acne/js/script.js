

AOS.init();

let swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});

const menu = document.querySelector('.menu-i');

menu.addEventListener("click", () => {
    let innerMenu = document.getElementsByClassName('inner-menu')[0];
    let nav = document.getElementsByClassName('menu')[0];
    innerMenu.classList.toggle('active');
    nav.classList.toggle('active');
});

