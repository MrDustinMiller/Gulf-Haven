// import mainRightBG from '../../assests/images/bg.png';
import testBg from '../../assests/images/test.png';
import buildCallToBookButton from '../call-button';
import buildSocialsDiv from '../socials';

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
  homeTitle.textContent = 'ENJOY YOUR';
  titleAndWelcomeDiv.appendChild(homeTitle);

  const homeTitleBottom = document.createElement('p');
  homeTitleBottom.classList.add('home-title-bottom');
  homeTitleBottom.textContent = 'VACATION TIME';
  titleAndWelcomeDiv.appendChild(homeTitleBottom);

  const homeLeftContentHeader = document.createElement('p');
  homeLeftContentHeader.classList.add('home-content-header');
  homeLeftContentHeader.textContent = 'GULF HAVEN RV RESORT';
  titleAndWelcomeDiv.appendChild(homeLeftContentHeader);

  const homeLeftTextContent = document.createElement('p');
  homeLeftTextContent.classList.add('home-content-text');
  homeLeftTextContent.textContent =
    'Located just off Highway 90 (Beach Blvd) in Gulfport Gulf Haven Campground features RV hook-ups, pull-through spaces, Wi-Fi access and cable connections at every site, palm trees, flower beds, and much more. The office houses not only the office, but the showers and restrooms. A wraparound porch equipped with rocking chairs overlooks the beautiful Gulf of Mexico!';
  titleAndWelcomeDiv.appendChild(homeLeftTextContent);

  buildCallToBookButton(titleAndWelcomeDiv);
  buildSocialsDiv(mainLeft);
}

function buildHomeMainRightDiv(homeContent) {
  const mainRight = document.createElement('div');

  mainRight.classList.add('main-right');
  // mainRight.style.backgroundImage = `url(${mainRightBG})`;
  mainRight.classList.add('home-page');
  homeContent.appendChild(mainRight);
}

function buildHomeContentDiv() {
  const main = document.querySelector('.content');
  const homeContent = document.createElement('div');

  homeContent.classList.add('home-content');
  homeContent.style.backgroundImage = `url(${testBg})`;
  main.appendChild(homeContent);
  buildHomeMainLeftDiv(homeContent);
  buildHomeMainRightDiv(homeContent);
}

export default function loadHomePageOnLoad() {
  buildHomeContentDiv();
}
