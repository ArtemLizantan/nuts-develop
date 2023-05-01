function addToCart() {
  const productBtn = document.querySelectorAll(".products__bottom-button");
  const cartProductList = document.querySelector(".cart-open__list");
  const cart = document.querySelector(".cart-open");
  const cartQuantity = document.querySelector(".header__cart-quantity");
  const fullPrice = document.querySelector(".cart-open__price");
  const buttonCart = document.querySelector(".header__cart");
  const textNothing = document.querySelector(".cart-open__nothing");
  const cartOpenFullPrice = document.querySelector(".cart-open__fullprice");
  let price = 0;

  const generateCartProduct = (title, price, id, weight) => {
    return `<li class="cart-open__li">
        <div class="cart-open__flex">
          <div data-id="${id}" class="cart-open__item">
            <div class="cart-open__title">${title} <span>${weight}г.</span></div>
            <div class="cart-open__buttons">
              <button class="cart-open__plus">+</button>
              <span>1</span>
              <button class="cart-open__minus">-</button>
            </div>
            <div class="cart-open__price">${price}грн.</div>
            <button class="cart-open__close">X</button>
          </div>
        </div>
      </li>`;
  };

  const priceWithoutSpaces = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
  };

  const plusFullPrice = (currentPrice) => {
    return (price += currentPrice);
  };

  const minusFullPrice = (currentPrice) => {
    return (price -= currentPrice);
  };

  const printFullPrice = () => {
    fullPrice.textContent = `${String(price)}`;
  };

  const printQuantity = () => {
    let length = cartProductList.children.length;
    cartQuantity.textContent = length;
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
    //minus price

    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity()

    //printFullprice

    //cound and print quantuty

    //remove productParent
  };

  buttonCart.addEventListener("click", () => {
    cart.classList.toggle("_active");
  });

  productBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      cartOpenFullPrice.classList.add("_active");

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

      //sum

      plusFullPrice(priceNumber);
      console.log(price);
      printFullPrice();

      //print full price

      //add to cart

      cartProductList.insertAdjacentHTML(
        "afterbegin",
        generateCartProduct(title, priceNumber, id, weight)
      );

      textNothing.remove();

      //count and print quntity
      printQuantity();

      //diabled btn

      self.disabled = true;
    });
  });

  cart.addEventListener("click", (e) => {
    if (e.target.classList.contains("cart-open__close")) {
      deleteProducts(e.target.closest(".cart-open__li"));
    }
  });
}

setTimeout(() => {
  addToCart();
}, 500);
