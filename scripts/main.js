var doc = document;

var mobile_menu = doc.getElementById('mobile-menu-btn');

var body = doc.querySelector('body');

mobile_menu.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu()
{
    body.classList.toggle('toggled');
}