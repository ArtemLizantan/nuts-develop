function burger() {
  const burger = document.querySelector(".icon-menu ");
  const burgerMenu = document.querySelector(".open-menu");
  const header = document.querySelector("header");
  const main = document.querySelector("main");

  const body = document.querySelector("body");
  if (burger) {
    burger.addEventListener("click", () => {
      burgerMenu.classList.toggle("_active");
      main.classList.toggle("_active");
    });
    burger.addEventListener("click", () => {
      header.classList.toggle("active");
      burger.classList.toggle("_active");
      body.classList.toggle("_lock");
    });
  }

  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll(".menu__link");
  if (navLinks) {
    for (let i = 0; i < navLinks.length; i++) {
      if (currentUrl.includes(navLinks[i].href)) {
        navLinks[i].classList.add("active");
      }
    }
  }
}

burger();
