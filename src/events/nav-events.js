import {
  addActiveAttribute,
  checkForActiveAttribute,
} from '../ui/active-attribute';
import loadAboutPage from '../ui/pages/about';
import loadContactPage from '../ui/pages/contact';
import loadServicesPage from '../ui/pages/services';
import wipeDomContent from '../ui/dom';
import loadHomePage from '../ui/pages/home';

function checkWhichSidebarLinkIsClicked(e) {
  switch (e.target.textContent) {
    case 'About':
      loadAboutPage();
      break;
    case 'Contact':
      loadContactPage();
      break;
    case 'Home':
      loadHomePage();
      break;
    case 'Services':
      loadServicesPage();
      break;
    default:
      break;
  }
}

function navEvents() {
  const navLinks = document.querySelectorAll('.link-item');

  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      checkForActiveAttribute(navLinks);
      wipeDomContent();
      addActiveAttribute(e);
      checkWhichSidebarLinkIsClicked(e);
    });
  });
}

export default function mobileNavEvents() {
  const mobileNavDisplay = document.querySelector('.mobile-nav');
  const mobileHeaderRight = document.querySelector('.mobile-header-right');

  if (mobileHeaderRight) {
    mobileHeaderRight.addEventListener('click', () => {
      // if visible and X is clicked, hide nav menu
      if (mobileNavDisplay.style.visibility === 'visible') {
        mobileNavDisplay.style.visibility = 'hidden';
        mobileNavDisplay.classList.remove('mobile-nav-animation');

        // change X icon back to mobile nav bars
        const mobileNavCloseIcon = document.querySelector('.mobile-nav-close');
        mobileNavCloseIcon.removeAttribute('class');
        mobileNavCloseIcon.setAttribute('class', 'fa-solid fa-bars fa-xl');
        mobileNavCloseIcon.classList.add('mobile-nav-icon');
      } else {
        mobileNavDisplay.style.visibility = 'visible';
        mobileNavDisplay.classList.add('mobile-nav-animation');
        // change mobile nav bar icon to X
        const mobileNavBarIcon = document.querySelector('.mobile-nav-icon');
        mobileNavBarIcon.removeAttribute('class');
        mobileNavBarIcon.setAttribute('class', 'fa-solid fa-x fa-xl');
        mobileNavBarIcon.classList.add('mobile-nav-close');
        // navEvents();
      }
    });
  }
}

export { navEvents };
