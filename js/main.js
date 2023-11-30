// document on content loaded
document.addEventListener('DOMContentLoaded', () => {
  // animate logo
  animateLogo();

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
  // hamburger menu on click
  const burgerMenu = document.querySelector('header nav .burger');
  burgerMenu.addEventListener('click', function () {
    if (burgerMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    } else {
      burgerMenu.classList.add('active');
      navLinks.classList.add('active');
    }
  });
});

function animateLogo() {
  const logo = document.querySelector('header .logo');
  let i = 0;
  const inter = setInterval(() => {
    logo.textContent = `0X${i}D`;
    i++;
    if (i == 5) clearInterval(inter);
  }, 500);
}

function removeClass(list, className) {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove(className);
  }
}
