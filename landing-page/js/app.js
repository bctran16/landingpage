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
    link.innerText = title.innerText;
    list.appendChild(link);
    navbar.appendChild(list);
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/
// Build menu 
let mainLinks = document.querySelectorAll('nav ul li a');

document.addEventListener("mouseover", event => { 
    let elems = document.querySelectorAll(':hover');
    if (elems[3].tagName==='SECTION'){
        let text =elems[3].querySelector('h2').innerText;
        let li = navbar.querySelectorAll('a');
        for (let i = 0; i<li.length; i++)
        {
            if(li[i].innerText===text){
                li[i].style.color = 'salmon';
                li[i].style.textShadow = '0 0 50px red';
            }
        }   
    }
});

document.addEventListener("mouseout", event=> {
    let li = navbar.querySelectorAll('a');
        for (let i = 0; i<li.length; i++)
        {
                li[i].style.color = 'white';
                li[i].style.textShadow = 'none';
        }
}); 


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


