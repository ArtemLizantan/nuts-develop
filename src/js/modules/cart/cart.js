function addToCart() {
  const productBtn = document.querySelectorAll(".products__bottom-button");
  const cartProductList = document.querySelector(".cart-open__list");
  const cart = document.querySelector(".cart-open");
  const cartQuantity = document.querySelector(".header__cart-quantity");
  const fullPrice = document.querySelector(".cart-open__price");
  const buttonCart = document.querySelector(".header__cart");
  const textNothing = document.querySelector(".cart-open__nothing");
  const cartOpenFullPrice = document.querySelector(".cart-open__fullprice");
  const cartBody = document.querySelector(".cart-open__body");
  const cartButtonPlus = document.querySelectorAll(".cart-open__plus");
  let cartOpenPrice = document.querySelectorAll(".cart-open__price-product");

  let price = 0;

  const generateCartProduct = (title, price, id, weight, articul) => {
    return `<li class="cart-open__li">
        <div class="cart-open__flex">
          <div data-id="${id}" class="cart-open__item">
            <div class="cart-open__title">${title} <span>${weight}г.</span></div>
            <div class="cart-open__buttons">
              <button data-art="${articul}" class="cart-open__plus">+</button>
              <span>1</span>
              <button data-art="${articul}" class="cart-open__minus">-</button>
            </div>
            <div class="cart-open__price-product">${price}грн.</div>
            <button class="cart-open__close">X</button>
          </div>
        </div>
      </li>`;
  };

  //priceWithoutSpaces

  const priceWithoutSpaces = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
  };

  //PlusFullPrice

  const plusFullPrice = (currentPrice) => {
    return (price += currentPrice);
  };

  //MinusFullPrice

  const minusFullPrice = (currentPrice) => {
    return (price -= currentPrice);
  };

  //printFullPrice

  const printFullPrice = () => {
    fullPrice.textContent = `${String(price)}`;
  };

  const printQuantity = () => {
    let length = cartProductList.children.length;
    cartQuantity.textContent = length;
  };

  const productPlus = (plus) => {
    if (plus) {
      const articul = plus.dataset.art;
      const value = document.querySelector(`[data-art="${articul}"] + span`);
      let result = parseInt(value.textContent);
      result++;
      if (result <= 0) {
        return;
      }
      return (value.innerHTML = result);
    }
  };

  const productMinus = (minus) => {
    if (minus) {
      const articul = minus.dataset.art;
      const value = document.querySelector(`[data-art="${articul}"] + span`);
      let result = parseInt(value.textContent);
      result--;
      if (result <= 0) {
        return;
      }
      return (value.innerHTML = result);
    }
  };

  const deleteProducts = (productParent) => {
    let id = productParent.querySelector(".cart-open__item").dataset.id;
    document
      .querySelector(`.products__card[data-id="${id}"]`)
      .querySelector(".products__bottom-button").disabled = false;

    let currentPrice = parseInt(
      priceWithoutSpaces(
        productParent.querySelector(".cart-open__price").textContent
      )
    );

    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity();
  };

  buttonCart.addEventListener("click", () => {
    cart.classList.toggle("_active");
  });

  productBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      cartOpenFullPrice.classList.add("_active");

      let articul = el.dataset.art;

      let self = e.currentTarget;

      let parent = self.closest(".products__card");

      let id = parent.dataset.id;

      let title = parent.querySelector(".products__text-title").textContent;

      let priceNumber = parseInt(
        priceWithoutSpaces(
          parent.querySelector(".products__bottom-price-item").textContent
        )
      );

      let weight = parent.querySelector(".products__info-subtitle").textContent;

      plusFullPrice(priceNumber);
      printFullPrice();

      cartProductList.insertAdjacentHTML(
        "afterbegin",
        generateCartProduct(title, priceNumber, id, weight, articul)
      );

      textNothing.remove();

      //count and print quntity
      printQuantity();

      //diabled btn

      self.disabled = true;
    });
  });

  // delete products

  cart.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-open__close")) {
      deleteProducts(e.target.closest(".cart-open__li"));
    }
    if (e.target.classList.contains("cart-open__plus")) {
      productPlus(e.target);
    }
    if (e.target.classList.contains("cart-open__minus")) {
      productMinus(e.target);
    }
  });
}

setTimeout(() => {
  addToCart();
}, 500);
