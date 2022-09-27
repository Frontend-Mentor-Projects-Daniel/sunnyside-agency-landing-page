const hamburgerMenu = document.getElementById('menu-toggle');
const navBar = document.getElementById('nav-bar');
let menuIsOpen = 'false';

hamburgerMenu?.addEventListener('click', function (e) {
  const button = e.currentTarget as HTMLButtonElement;

  if (button != null) {
    button.setAttribute('aria-expanded', toggle(menuIsOpen));
  }
});

function toggle(bool: string): string {
  const isTrue = !(bool === 'true');
  menuIsOpen = isTrue.toString();

  return menuIsOpen;
}
