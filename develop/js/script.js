var hamburgerMenu = document.getElementById('menu-toggle');
var navBar = document.getElementById('nav-bar');
var menuIsOpen = 'false';
hamburgerMenu === null || hamburgerMenu === void 0 ? void 0 : hamburgerMenu.addEventListener('click', function (e) {
    var button = e.currentTarget;
    if (button != null) {
        button.setAttribute('aria-expanded', toggle(menuIsOpen));
    }
});
function toggle(bool) {
    var isTrue = !(bool === 'true');
    menuIsOpen = isTrue.toString();
    return menuIsOpen;
}
