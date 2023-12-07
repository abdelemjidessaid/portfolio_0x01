// document on content loaded
document.addEventListener('DOMContentLoaded', () => {
  // animate logo
  animateLogo();

  // initialize all constants
  const darkMode = document.querySelector('header nav .links .mode');
  const downlaodCv = document.querySelector('header .content .btn');
  const sendButton = document.querySelector('.contact .send');
  const body = document.querySelector('body');
  const burgerMenu = document.querySelector('header nav .burger');
  const navLinks = document.querySelector('header nav .links');
  const links = navLinks.children;

  // on a nav link clicked
  for (let i = 0; i < links.length; i++) {
    // prevent the dark mode button from containing the 'open' class
    if (links[i].classList.contains('mode')) {
      continue;
    }
    // every link should has a click event listener
    links[i].addEventListener('click', () => {
      removeClass(links, 'opened');
      links[i].classList.add('opened');
      body.classList.remove('no-scroll');
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
    });
  }

  // dark mode button on click
  darkMode.addEventListener('click', function () {
    const mode = localStorage.getItem('dark-mode');
    if (mode === 'dark') {
      localStorage.setItem('dark-mode', null);
      body.classList.remove('dark-mode');
    } else {
      localStorage.setItem('dark-mode', 'dark');
      body.classList.add('dark-mode');
    }
  });

  // hamburger menu on click
  burgerMenu.addEventListener('click', function () {
    if (burgerMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      navLinks.classList.remove('active');
      body.classList.remove('no-scroll');
    } else {
      burgerMenu.classList.add('active');
      navLinks.classList.add('active');
      body.classList.add('no-scroll');
    }
  });

  // download cs button on click
  downlaodCv.addEventListener('click', function () {
    showAlert();
  });

  // button of send on click
  sendButton.addEventListener('click', function () {
    showAlert();
  });

  // check if was dark mode applied
  checkDarkMode();
});

function animateLogo() {
  /**
   * animateLogo - function that does animation to the logo
   */
  const logo = document.querySelector('header .logo');
  let i = 0;
  const inter = setInterval(() => {
    logo.textContent = `0X${i}D`;
    i++;
    if (i == 5) clearInterval(inter);
  }, 500);
}

function removeClass(list, className) {
  /**
   * removeClass - function that removes class name 'open' from
   * all elements of the given list.
   * @list: list of html elements
   * @className: the class name
   */
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove(className);
  }
}

function showAlert() {
  /**
   * showAlert - function that displays an alert for buttons that
   * does not have functionality.
   */
  alert('This functionality does not work yet');
}

function checkDarkMode() {
  /**
   * checkDarkMode - function that check the last value of dark mode
   * saved on the loacal storage, to apply the dark mode or not automatically
   * when the user visited the website another time, or refreshed the page.
   */
  const value = localStorage.getItem('dark-mode');
  const body = document.querySelector('body');
  if (value === 'dark') {
    body.classList.add('dark-mode');
  }
}
