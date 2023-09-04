export default function buildNavLinks(element) {
  const homeLink = document.createElement('a');
  homeLink.classList.add('home-link');
  homeLink.classList.add('link-item');
  // we want home to be the page the site opens up to
  homeLink.classList.add('active');
  homeLink.textContent = 'HOME';
  element.appendChild(homeLink);

  const aboutLink = document.createElement('a');
  aboutLink.classList.add('about-link');
  aboutLink.classList.add('link-item');
  aboutLink.textContent = 'ABOUT';
  element.appendChild(aboutLink);

  const servicesLink = document.createElement('a');
  servicesLink.classList.add('services-link');
  servicesLink.classList.add('link-item');
  servicesLink.textContent = 'SERVICES';
  element.appendChild(servicesLink);

  const contactLink = document.createElement('a');
  contactLink.classList.add('contact-link');
  contactLink.classList.add('link-item');
  contactLink.textContent = 'CONTACT';
  element.appendChild(contactLink);
}
