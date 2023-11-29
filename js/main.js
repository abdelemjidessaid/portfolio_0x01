// document on content loaded
document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelector('header nav .links');
  const links = navLinks.children;
  console.log(links);

  // on a nav link clicked
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', () => {
      removeClass(links, 'opened');
      links[i].classList.add('opened');
    });
  }
});

function removeClass(list, className) {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove(className);
  }
}
