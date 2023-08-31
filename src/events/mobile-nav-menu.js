import buildNavLinks from '../ui/nav-links';
import mobileNavEvents from './nav-events';

function buildMobileNavLinks() {
  const body = document.querySelector('.content');

  const mobileNav = document.createElement('div');
  mobileNav.classList.add('mobile-nav');
  body.appendChild(mobileNav);

  buildNavLinks(mobileNav);
  mobileNavEvents(mobileNav);
}

export default function buildMobileNavIcon() {
  const mobileHeader = document.querySelector('.mobile-header-right');
  // if mobile nav exists when being called be a resize event, just return
  if (mobileHeader) return;

  const headerDiv = document.querySelector('.header');

  const desktopHeader = document.querySelector('.desktop-header-right');
  // if desktop header exists while resizing window, remove from window
  if (desktopHeader) {
    headerDiv.removeChild(desktopHeader);
  }

  const headerRight = document.createElement('div');
  headerRight.classList.add('mobile-header-right');
  headerDiv.appendChild(headerRight);

  const navIcon = document.createElement('i');
  navIcon.setAttribute('class', 'fa-solid fa-bars fa-xl');
  navIcon.classList.add('mobile-nav-icon');
  headerRight.appendChild(navIcon);
  buildMobileNavLinks();
}

export { buildMobileNavLinks };
