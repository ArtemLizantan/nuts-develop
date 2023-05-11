function filter() {
  const accept = document.getElementById("accept");
  const remove = document.getElementById("remove");
  const buttonAsc = document.getElementById("sort-asc");
  const buttonDesc = document.getElementById("sort-desc");
  const productsCard = document.querySelectorAll(".products__card");
  const container = document.querySelector(".products__cards");
  const filterRemoveButtons = document.querySelector(".filter__remove-filter");
  const selectHeader = document.querySelectorAll(".select-header");
  
  let weightValue;
  let tasteValue;

  const filterProducts = () => {
    let filterProducts = [];

    productsCard.forEach((el) => {
      const weight = +el.querySelector(".products__info-subtitle").dataset
        .weight;
      const taste = el.querySelector(".products__text-subtitle").dataset.title;

      if (
        (!weightValue ||
          (weightValue === "more" && weight > 45) ||
          (weightValue === "less" && weight < 45)) &&
        (!tasteValue ||
          (tasteValue === "sweet" && taste === "Сладкий") ||
          (tasteValue === "salty" && taste === "Соленый"))
      ) {
        filterProducts.push(el);
      }
    });
    if (filterProducts.length === 0) {
      container.innerHTML =
        "Не найдено продуктов, соответствующих вашим критериям.";
    } else {
      container.innerHTML = "";
      filterProducts.forEach((el) => container.appendChild(el));
    }
  };

  const addEventListeners = () => {
    document.querySelectorAll(".filter__button-weight").forEach((el) => {
      el.addEventListener("click", (e) => {
        weightValue = e.target.dataset.weight;
      });
    });

    document.querySelectorAll(".filter__button-taste").forEach((el) => {
      el.addEventListener("click", (e) => {
        tasteValue = e.target.dataset.title;
      });
    });
  };
  addEventListeners();
  accept.addEventListener("click", () => {
    filterProducts();
  });
  remove.addEventListener("click", () => {
    container.innerHTML = "";
    productsCard.forEach((el) => container.appendChild(el));
    filterRemoveButtons.classList.remove("_active");
    selectHeader[0].textContent = "Масса";
    selectHeader[1].textContent = "Вкус";
  });
}

setTimeout(() => {
  filter();
}, 500);
