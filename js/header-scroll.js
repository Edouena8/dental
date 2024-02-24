window.onscroll = () => changeHeaderBackground();

function changeHeaderBackground() {
    const header = document.querySelector('[data-header]');
    const headerOffsetTrigger = header.offsetTop;
    const pageOffset = window.scrollY;

  if (pageOffset > headerOffsetTrigger) {
    header.classList.add('header--no-transparency');
  } else {
    header.classList.remove('header--no-transparency');
  }
}
