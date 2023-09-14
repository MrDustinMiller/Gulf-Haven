export default function buildCallToBookButton(titleAndWelcomeDiv) {
  // const callNowButton = document.createElement('button');
  // callNowButton.classList.add('call-now-btn');
  // titleAndWelcomeDiv.appendChild(callNowButton);

  const callNowButtonText = document.createElement('a');
  callNowButtonText.classList.add('call-now-btn-text');
  callNowButtonText.setAttribute('href', 'tel:1-228-8639-096');
  callNowButtonText.setAttribute('target', '_parent');
  callNowButtonText.textContent = '228-863-3906!';
  titleAndWelcomeDiv.appendChild(callNowButtonText);

  // const callBtnIcon = document.createElement('i');
  // callBtnIcon.setAttribute('class', 'fa-solid fa-phone-volume');
  // titleAndWelcomeDiv.appendChild(callBtnIcon);
}
