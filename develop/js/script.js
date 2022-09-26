var hamburgerMenu = document.getElementById('menu-toggle');
var navBar = document.getElementById('nav-bar');
hamburgerMenu === null || hamburgerMenu === void 0 ? void 0 : hamburgerMenu.addEventListener('click', function (e) {
    var button = e.currentTarget;
    if (button != null) {
        button.setAttribute('aria-expanded', 'true');
    }
    if (navBar != null && navBar.dataset.state !== 'mobile') {
        navBar.dataset.state = 'mobile';
        navBar.style.display = 'flex';
    }
    else if (navBar != null && navBar.dataset.state === 'mobile') {
        button.setAttribute('aria-expanded', 'false');
        navBar.dataset.state = 'hidden';
        navBar.style.display = 'none';
    }
});
var body = document.body;
var observer = new ResizeObserver(function (entries) {
    var bodyElement = entries[0];
    var isTablet = bodyElement.contentRect.width >= 768;
    console.log(bodyElement.target);
    if (navBar != null) {
        navBar.dataset.state = isTablet ? 'desktop' : 'hidden';
        if (navBar.dataset.state === 'hidden') {
            navBar.style.display = 'none';
        }
        else {
            navBar.style.display = 'flex';
        }
    }
});
observer.observe(body);
