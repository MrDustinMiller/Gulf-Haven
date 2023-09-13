import aboutDivOneP1 from '../../assests/text-files/div-one/about-text-one-p1.txt';
import aboutDivOneP2 from '../../assests/text-files/div-one/about-text-one-p2.txt';
import aboutDivOneP3 from '../../assests/text-files/div-one/about-text-one-p3.txt';
import aboutDivTwoP1 from '../../assests/text-files/div-two/about-text-two-p1.txt';
import aboutDivTwoP2 from '../../assests/text-files/div-two/about-text-two-p2.txt';
import aboutDivTwoP3 from '../../assests/text-files/div-two/about-text-two-p3.txt';
import frontOffice from '../../assests/images/front-office.jpg';
import benchShot from '../../assests/images/bench-shot.jpg';
import beachShotTwo from '../../assests/images/beach-shot-2.jpg';
import afterKatrina from '../../assests/images/after-katrina.jpg';
import construction from '../../assests/images/construction.jpg';
import beach from '../../assests/images/beach.jpg';

function buildPictureDivChildrenDivs(
  pictureDiv,
  pictureDivClassName,
  pictureDivChildTopImg,
  pictureDivChildBottomLeftImg,
  pictureDivChildBottomRightImg
) {
  // top
  const pictureDivChildTop = document.createElement('div');
  pictureDivChildTop.classList.add(`${pictureDivClassName}-child-top`);
  pictureDivChildTop.style.backgroundImage = `url(${pictureDivChildTopImg})`;
  pictureDivChildTop.classList.add('picture-div-child');
  pictureDiv.appendChild(pictureDivChildTop);

  // bottom left
  const pictureDivChildBottomLeft = document.createElement('div');
  pictureDivChildBottomLeft.classList.add(
    `${pictureDivClassName}-child-bottom-left`
  );
  pictureDivChildBottomLeft.style.backgroundImage = `url(${pictureDivChildBottomLeftImg})`;
  pictureDivChildBottomLeft.classList.add('picture-div-child');
  pictureDiv.appendChild(pictureDivChildBottomLeft);

  // bottom right
  const pictureDivChildBottomRight = document.createElement('div');
  pictureDivChildBottomRight.classList.add(
    `${pictureDivClassName}-child-bottom-right`
  );
  pictureDivChildBottomRight.style.backgroundImage = `url(${pictureDivChildBottomRightImg})`;
  pictureDivChildBottomRight.classList.add('picture-div-child');
  pictureDiv.appendChild(pictureDivChildBottomRight);
}

function buildPictureDiv(
  content,
  pictureDivClassName,
  pictureDivChildTopImg,
  pictureDivChildBottomLeftImg,
  pictureDivChildBottomRightImg
) {
  const pictureDiv = document.createElement('div');
  pictureDiv.classList.add(`${pictureDivClassName}`);
  pictureDiv.classList.add('about-div');
  content.appendChild(pictureDiv);

  buildPictureDivChildrenDivs(
    pictureDiv,
    pictureDivClassName,
    pictureDivChildTopImg,
    pictureDivChildBottomLeftImg,
    pictureDivChildBottomRightImg
  );
}

function buildTextDiv(
  content,
  textDivClassName,
  textContentClassName,
  paragraphOne,
  paragraphTwo,
  paragraphThree
) {
  const textDivOne = document.createElement('div');
  textDivOne.classList.add(`${textDivClassName}`);
  textDivOne.classList.add('about-div');

  // paragraph 1
  const paragraphOneContent = document.createElement('p');
  paragraphOneContent.classList.add(`${textContentClassName}`);
  paragraphOneContent.textContent = `${paragraphOne}`;
  textDivOne.appendChild(paragraphOneContent);
  content.appendChild(textDivOne);

  // paragraph 2
  const paragraphTwoContent = document.createElement('p');
  paragraphTwoContent.classList.add(`${textContentClassName}`);
  paragraphTwoContent.textContent = `${paragraphTwo}`;
  textDivOne.appendChild(paragraphTwoContent);
  content.appendChild(textDivOne);

  // paragraph 3
  const paragraphThreeContent = document.createElement('p');
  paragraphThreeContent.classList.add(`${textContentClassName}`);
  paragraphThreeContent.textContent = `${paragraphThree}`;
  textDivOne.appendChild(paragraphThreeContent);
  content.appendChild(textDivOne);
}

function buildAboutDivs() {
  const content = document.querySelector('.about-content');

  buildPictureDiv(
    content,
    'picture-div-one',
    beach,
    afterKatrina,
    construction
  );
  buildTextDiv(
    content,
    'text-div-one',
    'text-div-one-text-content',
    aboutDivOneP1,
    aboutDivOneP2,
    aboutDivOneP3
  );
  buildTextDiv(
    content,
    'text-div-two',
    'text-div-two-text-content',
    aboutDivTwoP1,
    aboutDivTwoP2,
    aboutDivTwoP3
  );
  buildPictureDiv(
    content,
    'picture-div-two',
    frontOffice,
    benchShot,
    beachShotTwo
  );
}

function buildAboutContentDiv() {
  const main = document.querySelector('.content');
  const homeContent = document.createElement('div');

  homeContent.classList.add('about-content');
  main.appendChild(homeContent);
  buildAboutDivs();
}

export default function loadAboutPage() {
  buildAboutContentDiv();
}
