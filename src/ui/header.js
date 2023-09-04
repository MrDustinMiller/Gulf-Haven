import test from '../assests/images/gulf-haven-logo.png';
import buildDesktopNavMenu from '../events/desktop-nav-menu';
import buildMobileNav from '../events/mobile-nav-menu';
import mobileNavEvents, { navEvents } from '../events/nav-events';

// runs on load to determine if we load a desktop or mobile view
function checkScreenSize() {
  const window = document.defaultView;
  const windowHeight = window.screen.height;
  const windowWidth = window.screen.width;

  // if screen size less than or equal to phone sizes
  if (windowHeight <= 926 && windowWidth <= 600) {
    buildMobileNav();
    mobileNavEvents();
    navEvents();
  } else {
    buildDesktopNavMenu();
    navEvents();
  }
}

export default function createHeader() {
  const body = document.querySelector('.content');

  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');
  body.appendChild(headerDiv);

  const headerLeft = document.createElement('div');
  headerLeft.classList.add('header-left');
  headerDiv.appendChild(headerLeft);

  const headerLogo = document.createElement('img');
  headerLogo.classList.add('header-logo');
  headerLogo.src = test;
  headerLeft.appendChild(headerLogo);

  const headerLogoText = document.createElement('p');
  headerLogoText.textContent = 'Gulf Haven Resort';
  headerLeft.appendChild(headerLogoText);

  checkScreenSize();
}

export { checkScreenSize };
