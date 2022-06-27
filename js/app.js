// SHOW MENU 
const navMneu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// MENU SHOW
// Validate if constants exists 
if (navToggle) {
    navToggle.addEventListener('click', () =>{
        navMneu.classList.add('show-menu')
    });
}

// MENU HIDDEN
// Validate if constants exist 
if (navToggle) {
    navClose.addEventListener('click', () => {
        navMneu.classList.remove('show-menu')
    });
}

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // On clicking each nav__menu, the show-menu is removed
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// CHANGE BACKGROUND HEADER
function scrollHeader() {
    const header = document.getElementById('header');
    // When the scroll is lesser than 80vh, add the 'scroll-header' class to the header tag
    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// TESTIMONIAL SWIPER
let testimoialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',


    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// NEW SWIPER
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});