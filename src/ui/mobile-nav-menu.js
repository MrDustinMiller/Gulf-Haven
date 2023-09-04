import buildNavLinks from './nav-links';

function buildMobileNavLinks() {
  const body = document.querySelector('.content');

  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobile-nav');
  body.appendChild(mobileNav);

  buildNavLinks(mobileNav);
}

function checkIfMobileNavExists() {
  const mobileHeader = document.querySelector('.mobile-header-right');
  if (mobileHeader) return true;

  return false;
}

function checkIfDesktopHeaderExists(headerDiv) {
  const desktopHeader = document.querySelector('.desktop-header-right');
  if (desktopHeader) {
    headerDiv.removeChild(desktopHeader);
  }
}

export default function buildMobileNavIcon() {
  // if mobile nav exists when being called by a resize event, just return
  const headerCheck = checkIfMobileNavExists();
  if (headerCheck) return;

  const headerDiv = document.querySelector('.header');
  // if desktop header exists while resizing window, remove from window
  checkIfDesktopHeaderExists(headerDiv);

  const headerRight = document.createElement('div');
  headerRight.classList.add('mobile-header-right');
  headerDiv.appendChild(headerRight);

  const navIcon = document.createElement('i');
  navIcon.setAttribute('class', 'fa-solid fa-bars-staggered fa-xl');
  navIcon.classList.add('mobile-nav-icon');
  headerRight.appendChild(navIcon);
  buildMobileNavLinks();
}

export { buildMobileNavLinks };
