export default function wipeDomContent() {
  const parentContainer = document.querySelector('.content');
  const { children } = parentContainer;
  const childArray = [...children];

  // will either need to change home-content or add every page here because each page
  // will be named x-content to style them differently
  childArray.forEach((child) => {
    if (
      child.classList[0] === 'home-content' ||
      child.classList[0] === 'about-content' ||
      child.classList[0] === 'service-content' ||
      child.classList[0] === 'contact-content'
    ) {
      parentContainer.removeChild(child);
    }
  });
}
