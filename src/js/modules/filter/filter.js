function filter() {
  const buttonAsc = document.getElementById("sort-asc");
  const buttonDesc = document.getElementById("sort-desc");
  const buttonWeightMore = document.getElementById("sort-weight-more");
  const buttonWeightLess = document.getElementById("sort-weight-less");
  const buttonSweet = document.getElementById("sort-sweet");
  const buttonSalty = document.getElementById("sort-salty");
  const productsCard = document.querySelectorAll(".products__card");
  const prodBtnShowMore = document.querySelector(".products__show-more");
  const filterAcceptButton = document.getElementById("accept");

  //сортировка по возростанию

  const sortAsc = () => {
    const itemsArr = Array.from(productsCard);

    itemsArr.sort((a, b) => {
      const priceA = +a.querySelector(".products__bottom-price-item").dataset
        .price;
      const priceB = +b.querySelector(".products__bottom-price-item").dataset
        .price;
      return priceA - priceB;
    });

    const container = document.querySelector(".products__cards");
    container.innerHTML = "";

    itemsArr.forEach((item) => container.appendChild(item));
  };

  //сортировка по убыванию

  const sortDesc = () => {
    const itemsArr = Array.from(productsCard);
    itemsArr.sort((a, b) => {
      const priceA = +a.querySelector(".products__bottom-price-item").dataset
        .price;
      const priceB = +b.querySelector(".products__bottom-price-item").dataset
        .price;
      return priceB - priceA;
    });

    const container = document.querySelector(".products__cards");
    container.innerHTML = "";

    itemsArr.forEach((item) => container.appendChild(item));
  };

  //Больше 50

  const sortWeightLess = () => {
    const itemsArr = Array.from(productsCard);
    itemsArr.sort((a, b) => {
      const weightA = +a.querySelector(".products__info-subtitle").textContent;
      const weightB = +b.querySelector(".products__info-subtitle").textContent;

      if (weightB < 50) {
        return 1; // Возвращаем 1, чтобы элементы с маленьким весом были ниже
      }

      if (weightA < 50) {
        return -1; // Возвращаем -1, чтобы элементы с маленьким весом были выше
      }

      return weightA - weightB;
    });

    const container = document.querySelector(".products__cards");
    container.innerHTML = "";
    itemsArr.forEach((item) => {
      if (+item.querySelector(".products__info-subtitle").textContent < 45) {
        container.appendChild(item);
      }
    });
  };

  const sortWeightMore = () => {
    const itemsArr = Array.from(productsCard);
    itemsArr.sort((a, b) => {
      const weightA = +a.querySelector(".products__info-subtitle").textContent;
      const weightB = +b.querySelector(".products__info-subtitle").textContent;

      if (weightB < 50) {
        return 1; // Возвращаем 1, чтобы элементы с маленьким весом были ниже
      }

      if (weightA < 50) {
        return -1; // Возвращаем -1, чтобы элементы с маленьким весом были выше
      }

      return weightB - weightA;
    });

    const container = document.querySelector(".products__cards");
    container.innerHTML = "";
    itemsArr.forEach((item) => {
      if (+item.querySelector(".products__info-subtitle").textContent > 40) {
        container.appendChild(item);
      }
    });
  };

  const sortSweet = () => {
    const itemsArr = Array.from(productsCard);
    const container = document.querySelector(".products__cards");
    container.innerHTML = "";
    itemsArr.forEach((item) => {
      if (
        item.querySelector(".products__text-subtitle").dataset.title ===
        "Сладкий"
      ) {
        container.appendChild(item);
      }
    });
  };

  const sortSalty = () => {
    const itemsArr = Array.from(productsCard);
    const container = document.querySelector(".products__cards");
    container.innerHTML = "";
    itemsArr.forEach((item) => {
      if (
        item.querySelector(".products__text-subtitle").dataset.title ===
        "Соленый"
      ) {
        container.appendChild(item);
      }
    });
  };

  //Запуск функций

  buttonAsc.addEventListener("click", () => {
    if (prodBtnShowMore) {
      prodBtnShowMore.style.display = "none";
    }
    if (!buttonDesc.classList.contains("_active")) {
      buttonAsc.classList.add("_active");
    } else {
      buttonDesc.classList.remove("_active");
      buttonAsc.classList.add("_active");
    }
    sortAsc();
  });
  buttonDesc.addEventListener("click", () => {
    if (!buttonAsc.classList.contains("_active")) {
      buttonDesc.classList.add("_active");
    } else {
      buttonAsc.classList.remove("_active");
      buttonDesc.classList.add("_active");
    }
    sortDesc();
    buttonDesc.classList.add("_active");
  });

  filterAcceptButton.addEventListener("click", () => {
    // Определяем, какой фильтр был выбран пользователем
    // if()
  });
}

setTimeout(() => {
  filter();
}, 500);
