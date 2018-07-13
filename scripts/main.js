var doc = document;

var mobile_menu = doc.getElementById('mobile-menu-btn');

mobile_menu.addEventListener('click', toggleBurgerMenu);

function toggleBurgerMenu() {
    mobile_menu.classList.toggle('toggled');
}