const hamburger_menu = document.querySelector('.hamburger-menu');
const mobile_menu = document.querySelector('.menu-mobile');
const navbar = document.querySelector('.navbar');

hamburger_menu.addEventListener('click', function(){
    hamburger_menu.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
    navbar.classList.toggle('is-active');
});