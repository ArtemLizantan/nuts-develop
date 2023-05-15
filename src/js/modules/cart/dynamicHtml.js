function dynamicHtml() {
  //перенос при адаптиве

  const breakpoint = 991;
  const source = document.querySelector(".header__desctop-cart");
  const destination = document.querySelector(".header__mobile-cart-box");

  const moveElementsCart = () => {
    const elements = source.querySelectorAll(".header__cart-box");
    elements.forEach((element) => {
      destination.appendChild(element);
    });
  };

  if (window.innerWidth < breakpoint) {
    moveElementsCart();
  }

  window.addEventListener("resize", () => {
    if (window.innerWidth < breakpoint) {
      moveElementsCart();
    } else {
      const elements = destination.querySelectorAll(".move-me");
      elements.forEach((element) => {
        source.appendChild(element);
      });
    }
  });
}

dynamicHtml();
