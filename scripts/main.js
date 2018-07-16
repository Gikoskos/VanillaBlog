const doc = document;


doc.getElementById('mobile-menu-btn').addEventListener('click', function () {
    doc.body.classList.toggle('toggled');
});

/*if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}*/

let navMenuNode = doc.getElementById('nav-menu');
let navMenuList = navMenuNode.children[0];
let navMenuLinks = [
    "##",
    "https://github.com/Gikoskos",
    "##"
];

/* handle event by delegation on the navigation menu buttons */
navMenuList.addEventListener('click', function (ev) {
    let real_target_node, target_idx;
    /* only the elements in the buttons have 0 or 2 children */
    switch (ev.target.children.length) {
        case 0:
            real_target_node = ev.target.parentNode.parentNode;
            break;
        case 2:
            real_target_node = ev.target.parentNode;
            break;
        default:
            return;
    }

    for (let i = 0; i < navMenuList.children.length; i++) {
        if (navMenuList.children[i] === real_target_node) {
            target_idx = i;
            break;
        }
    }

    //window.location.href = navMenuLinks[target_idx];
});