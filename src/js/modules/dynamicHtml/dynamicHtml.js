function dynamicHtml() {
  //перенос при адаптиве

  const breakpoint = 992;
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

function moveSubmitBlock() {
  const submitBlock = document.querySelector(".registration__submit");
  const mobileSubmitBlock = document.querySelector(
    ".registration__mobile-submit"
  );
  if (submitBlock) {
    const mediaQuery = window.matchMedia("(max-width: 992px)");

    const handleMediaQuery = (mq) => {
      if (mq.matches) {
        mobileSubmitBlock.appendChild(submitBlock);
      } else {
        // Вернуть блок на исходное место, если медиа-запрос не соответствует
        if (submitBlock.parentElement === mobileSubmitBlock) {
          mobileSubmitBlock.removeChild(submitBlock);
        }
      }
    };

    // Первоначальная проверка при загрузке страницы
    handleMediaQuery(mediaQuery);

    // Следить за изменениями медиа-запроса
    mediaQuery.addEventListener("change", handleMediaQuery);
  }
}

moveSubmitBlock();
