/*=============== SHOW & CLOSE MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
   navToggle = document.getElementById('nav-toggle'),
   navClose = document.getElementById('nav-close')

/* Show menu */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* Hide menu */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MOBILE MENU ===============*/
const navLink = document.querySelectorAll('.nav__link, .nav__contact')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   // When we click on each nav__link, we remove the show-menu class
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== HOME TEXT CIRCULAR ===============*/
const homeText = document.getElementById('.home__text'),
   letters = homeText.textContent.trim().split(''), // Converts text into an array of characters
   angleStep = 300 / letters.length // Angle for each character; length counts the number of characters

homeText.textContent = '' // Clears the original content

/*=============== HOME TYPED JS ===============*/


/*=============== CHANGE HEADER STYLES ===============*/


/*=============== SWIPER WORK ===============*/


/*=============== SERVICES ACCORDION ===============*/


/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== CONTACT EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== CUSTOM CURSOR ===============*/


/*=============== SCROLLREVEAL ANIMATION ===============*/
