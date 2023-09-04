import buildMobileNav from '../ui/mobile-nav-menu';
import buildDesktopNavMenu from '../ui/desktop-nav-menu';

// runs when screen size is adjusted to see if we need to update display or not
export default function checkScreenSizeAdjustment() {
  const window = document.defaultView;

  window.addEventListener('resize', (e) => {
    const windowHeight = e.target.outerHeight;
    const windowWidth = e.target.outerWidth;

    if (windowHeight <= 1000 && windowWidth <= 700) {
      buildMobileNav();
    } else if (windowHeight >= 700 && windowWidth >= 701) {
      buildDesktopNavMenu();
    }
  });
}
