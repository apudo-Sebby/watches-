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

// SCROLL SECTIONS ACTIVE LINKS
const sections = document.querySelectorAll('section[id]');


function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

              if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            }
            else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)

// SHOW SCROLL UP
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 400 viewport height, and the show-scroll tag to the a tag with the scroll-t
    if (this.scrollY >= 400) {
        scrollUp.classList.add('show-scroll')
    }
     else {
         scrollUp.classList.remove('show-scroll')
     }
}
window.addEventListener('scroll', scrollUp)