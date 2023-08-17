async function filter() {
  const accept = document.getElementById("accept");
  const remove = document.getElementById("remove");
  const buttonAsc = document.getElementById("sort-asc");
  const buttonDesc = document.getElementById("sort-desc");
  const productsCard = document.querySelectorAll(".products__card");
  const container = document.querySelector(".products__cards");
  const filterRemoveButtons = document.querySelector(".filter__remove-filter");
  const selectHeader = document.querySelectorAll(".select-header");
  const prodBtnShowMore = document.querySelector(".products__show-more");
  

  let weightValue;
  let tasteValue;
  let sortValue;

  if (buttonAsc && buttonDesc) {
    const filterProducts = () => {
      let filterProducts = [];

      productsCard.forEach((el) => {
        const weight = +el.querySelector(".products__info-subtitle").dataset
          .weight;
        const taste = el.querySelector(".products__text-subtitle").dataset
          .title;
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

      filterProducts.sort((a, b) => {
        const priceA = +a.querySelector(".products__bottom-price-item").dataset
          .price;
        const priceB = +b.querySelector(".products__bottom-price-item").dataset
          .price;
        if (sortValue === "asc") {
          return priceA - priceB;
        } else {
          return priceB - priceA;
        }
      }); 

      if (filterProducts.length === 0) {
        container.innerHTML =
          "Не найдено продуктов, соответствующих вашим критериям.";
        prodBtnShowMore.style.display = "none";
      } else {
        container.innerHTML = "";
        filterProducts.forEach((el) => container.appendChild(el));
      }
    };

    const addEventListeners = () => {
      document.querySelectorAll(".filter__button-weight").forEach((el) => {
        el.addEventListener("click", (e) => {
          weightValue = e.target.dataset.weight;
          filterRemoveButtons.classList.add("_active");
        });
      });

      document.querySelectorAll(".filter__button-taste").forEach((el) => {
        el.addEventListener("click", (e) => {
          tasteValue = e.target.dataset.title;
          filterRemoveButtons.classList.add("_active");
        });
      });

      buttonAsc.addEventListener("click", (e) => {
        sortValue = e.target.dataset.sort;
        filterRemoveButtons.classList.add("_active");

        if (!buttonDesc.classList.contains("_active")) {
          buttonAsc.classList.add("_active");
        } else {
          buttonDesc.classList.remove("_active");
          buttonAsc.classList.add("_active");
        }
      });

      buttonDesc.addEventListener("click", (e) => {
        sortValue = e.target.dataset.sort;
        filterRemoveButtons.classList.add("_active");

        if (!buttonAsc.classList.contains("_active")) {
          buttonDesc.classList.add("_active");
        } else {
          buttonAsc.classList.remove("_active");
          buttonDesc.classList.add("_active");
        }
      });
      remove.addEventListener("click", () => {
        container.innerHTML = "";
        productsCard.forEach((el) => container.appendChild(el));
        filterRemoveButtons.classList.remove("_active");
        selectHeader[0].textContent = "Масса";
        selectHeader[1].textContent = "Вкус";
        buttonDesc.classList.remove("_active");
        buttonAsc.classList.remove("_active");
      });
      accept.addEventListener("click", () => {
        filterProducts();
        prodBtnShowMore.style.display = "none";
      });
    };
    addEventListeners();
  }
}
export default filter;
