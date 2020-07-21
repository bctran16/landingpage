/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll('section');
let navbar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
for (let i = 0; i<sections.length; i++) {
    let title = sections[i].querySelector('h2'); 
    let list = document.createElement('li');
    let link = document.createElement('a');
    link.href='#section' + (i+1);
    link.className = 'menu__link'
    link.innerText = title.innerText;
    list.appendChild(link);
    navbar.appendChild(list);
}

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", event =>{
    let elems = document.querySelectorAll('section');
    elems.forEach(elem => {
        elem.classList.remove('your-active-class');
        let rect = elem.getBoundingClientRect();
        if (document.elementFromPoint(rect.x, rect.y)!==null) {
            elem.classList.add('your-active-class');
        }
    })
})


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
let mainLinks = document.querySelectorAll('nav ul li a');

// Scroll to section on link click

mainLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); 
        let target = document.querySelector(event.target.hash);
        target.scrollIntoView({
            behavior: "smooth",
            start: "block"
        })
    })
})


// Set sections as active


