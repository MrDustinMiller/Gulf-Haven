import buildNavLinks from '../ui/nav-links';
import { navEvents } from './nav-events';

export default function buildDesktopNavMenu() {
  // if header nav exists when being called be a resize event, just return
  if (document.querySelector('.desktop-header-right')) return;

  const headerDiv = document.querySelector('.header');
  const body = document.querySelector('.content');
  const mobileNav = document.querySelector('.mobile-nav');

  const mobileHeader = document.querySelector('.mobile-header-right');
  // if mobile header exists while resizing window, remove from window
  if (mobileHeader) {
    headerDiv.removeChild(mobileHeader);
    body.removeChild(mobileNav);
  }

  const headerRight = document.createElement('div');
  headerRight.classList.add('desktop-header-right');
  headerDiv.appendChild(headerRight);
  buildNavLinks(headerRight);
  navEvents();
}
