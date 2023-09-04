export default function buildSocialsDiv(mainLeft) {
  const socialsDiv = document.createElement('div');
  socialsDiv.classList.add('socials-div');
  mainLeft.appendChild(socialsDiv);

  const socialFacebookLink = document.createElement('i');
  socialFacebookLink.setAttribute('class', 'fa-brands fa-facebook fa-2xl');
  socialFacebookLink.classList.add('facebook-link');
  socialsDiv.appendChild(socialFacebookLink);

  const socialInstagramLink = document.createElement('i');
  socialInstagramLink.setAttribute(
    'class',
    'fa-brands fa-square-instagram fa-2xl'
  );
  socialInstagramLink.classList.add('instagram-link');
  socialsDiv.appendChild(socialInstagramLink);

  const socialGulfCoastLink = document.createElement('i');
  socialGulfCoastLink.setAttribute('class', 'fa-solid fa-sun fa-2xl');
  socialGulfCoastLink.classList.add('ms-gulf-coast-link');
  socialsDiv.appendChild(socialGulfCoastLink);
}
