import mainRightBG from '../../assests/images/bg.png';

function buildHomeMainLeftDiv(homeContent) {
  const mainLeft = document.createElement('div');
  mainLeft.classList.add('main-left');
  mainLeft.classList.add('home-page');
  homeContent.appendChild(mainLeft);

  const titleAndWelcomeDiv = document.createElement('div');
  titleAndWelcomeDiv.classList.add('home-welcome-div');
  mainLeft.appendChild(titleAndWelcomeDiv);

  const homeTitle = document.createElement('p');
  homeTitle.classList.add('home-title');
  homeTitle.textContent = 'ENJOY YOUR VACATION TIME';
  titleAndWelcomeDiv.appendChild(homeTitle);

  const homeLeftContentHeader = document.createElement('p');
  homeLeftContentHeader.classList.add('home-content-header');
  homeLeftContentHeader.textContent = 'LOREM IPSUM';
  titleAndWelcomeDiv.appendChild(homeLeftContentHeader);

  const homeLeftTextContent = document.createElement('p');
  homeLeftTextContent.classList.add('home-content-text');
  homeLeftTextContent.textContent =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  titleAndWelcomeDiv.appendChild(homeLeftTextContent);
  //----------------------------------

  const socialsDiv = document.createElement('div');
  socialsDiv.classList.add('socials-div');
  mainLeft.appendChild(socialsDiv);

  const socialFacebookLink = document.createElement('i');
  socialFacebookLink.setAttribute('class', 'fa-brands fa-facebook fa-xl');
  socialFacebookLink.classList.add('facebook-link');
  socialsDiv.appendChild(socialFacebookLink);

  const socialInstagramLink = document.createElement('i');
  socialInstagramLink.setAttribute(
    'class',
    'fa-brands fa-square-instagram fa-xl'
  );
  socialInstagramLink.classList.add('instagram-link');
  socialsDiv.appendChild(socialInstagramLink);

  const socialGulfCoastLink = document.createElement('i');
  socialGulfCoastLink.setAttribute('class', 'fa-solid fa-sun fa-xl');
  socialGulfCoastLink.classList.add('ms-gulf-coast-link');
  socialsDiv.appendChild(socialGulfCoastLink);
}

function buildHomeMainRightDiv(homeContent) {
  const mainRight = document.createElement('div');

  mainRight.classList.add('main-right');
  mainRight.style.backgroundImage = `url(${mainRightBG})`;
  mainRight.classList.add('home-page');
  homeContent.appendChild(mainRight);
}

function buildHomeContentDiv() {
  const main = document.querySelector('.content');
  const homeContent = document.createElement('div');

  homeContent.classList.add('home-content');
  main.appendChild(homeContent);
  buildHomeMainLeftDiv(homeContent);
  buildHomeMainRightDiv(homeContent);
}

export default function loadHomePageOnLoad() {
  buildHomeContentDiv();
}
