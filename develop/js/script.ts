const hamburgerMenu = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');

hamburgerMenu?.addEventListener('click', function (e) {
  const button = e.currentTarget as HTMLButtonElement;

  if (button != null) {
    button.setAttribute('aria-expanded', 'true');
  }

  if (navBar != null && navBar.dataset.state !== 'mobile') {
    navBar.dataset.state = 'mobile';
    navBar.style.display = 'flex';
  } else if (navBar != null && navBar.dataset.state === 'mobile') {
    button.setAttribute('aria-expanded', 'false');

    navBar.dataset.state = 'hidden';
    navBar.style.display = 'none';
  }
});

const body = document.body;

const observer = new ResizeObserver((entries) => {
  const bodyElement = entries[0];
  const isTablet = bodyElement.contentRect.width >= 768;
  console.log(bodyElement.target);

  if (navBar != null) {
    navBar.dataset.state = isTablet ? 'desktop' : 'hidden';

    if (navBar.dataset.state === 'hidden') {
      navBar.style.display = 'none';
    } else {
      navBar.style.display = 'flex';
    }
  }
});

observer.observe(body);
