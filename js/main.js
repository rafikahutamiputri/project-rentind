// TOGGLE MENU

const navToggle = document.getElementById("nav-toggle"), 
navMenu = document.getElementById("nav-Menu");

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle("top-[-1000%]");
    navMenu.classList.toggle("top-10");


});