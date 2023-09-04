import buildMobileNav from './mobile-nav-menu';
import buildDesktopNavMenu from './desktop-nav-menu';

// runs when screen size is adjusted to see if we need to update display or not
export default function checkScreenSizeAdjustment() {
  const window = document.defaultView;

  window.addEventListener('resize', (e) => {
    const windowHeight = e.target.outerHeight;
    const windowWidth = e.target.outerWidth;

    if (windowHeight <= 926 && windowWidth <= 700) {
      buildMobileNav();
    } else if (windowHeight >= 700 && windowWidth >= 800) {
      buildDesktopNavMenu();
    }
  });
}