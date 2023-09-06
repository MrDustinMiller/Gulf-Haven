function buildAboutDivs() {
  const content = document.querySelector('.about-content');

  const pictureDivOne = document.createElement('div');
  pictureDivOne.classList.add('picture-div-one');
  pictureDivOne.classList.add('about-div');
  content.appendChild(pictureDivOne);

  const textDivOne = document.createElement('div');
  textDivOne.classList.add('text-div-one');
  textDivOne.classList.add('about-div');
  content.appendChild(textDivOne);

  const pictureDivTwo = document.createElement('div');
  pictureDivTwo.classList.add('picture-div-two');
  pictureDivTwo.classList.add('about-div');
  content.appendChild(pictureDivTwo);

  const textDivTwo = document.createElement('div');
  textDivTwo.classList.add('text-div-two');
  textDivTwo.classList.add('about-div');
  content.appendChild(textDivTwo);
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
