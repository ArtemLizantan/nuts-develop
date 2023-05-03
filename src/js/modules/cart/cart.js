function addToCart() {
  const productBtn = document.querySelectorAll(".products__bottom-button");
  const cartProductList = document.querySelector(".cart-open__list");
  const cart = document.querySelector(".cart-open");
  const cartQuantity = document.querySelector(".header__cart-quantity");
  const fullPrice = document.querySelector(".cart-open__price");
  const buttonCart = document.querySelector(".header__cart");
  const textNothing = document.querySelector(".cart-open__nothing");
  const cartOpenFullPrice = document.querySelector(".cart-open__fullprice");
  const breakpoint = 991;
  const breakpointMobile = 480;
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const mobileCloseCart = document.querySelector(".header__mobile-close-cart");
  const preScrin = document.querySelector(".menu__pre-scrin");

  buttonCart.addEventListener("click", () => {
    cart.classList.toggle("_active");
    if (window.innerWidth < breakpoint) {
      body.classList.toggle("_lock");
      main.classList.toggle("_cart-active");
      header.classList.toggle("_cart-active");
      mobileCloseCart.classList.toggle("_cart-active");
      preScrin.classList.toggle("_active");
    }
    if (window.innerWidth < breakpointMobile) {
      main.classList.remove("_cart-active");
      header.classList.remove("_cart-active");
      preScrin.classList.remove("_active");
    }
  });

  mobileCloseCart.addEventListener("click", () => {
    cart.classList.remove("_active");
    body.classList.remove("_lock");
    main.classList.remove("_cart-active");
    header.classList.remove("_cart-active");
    mobileCloseCart.classList.remove("_cart-active");
    preScrin.classList.remove("_active");
  });

  const generateCartProduct = (title, price, id, weight, articul) => {
    return `<li class="cart-open__li">
        <div class="cart-open__flex">
          <div data-art="${articul}" class="cart-open__item">
            <div class="cart-open__title">${title} <span>${weight}г.</span></div>
            <div class="cart-open__buttons">
              <button data-art="${articul}" class="cart-open__plus">+</button>
              <span>1</span>
              <button data-art="${articul}" class="cart-open__minus">-</button>
            </div>
            <div data-price="${price}" class="cart-open__price-product">${price}грн.</div>
            <button class="cart-open__close">X</button>
          </div>
        </div>
      </li>`;
  };

  //priceWithoutSpaces

  const priceWithoutSpaces = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
  };

  // print and sum full price

  const printFullPrice = (sumAllPrices) => {
    const allPrices = document.querySelectorAll(".cart-open__price-product");
    sumAllPrices = 0;
    for (let i = 0; i < allPrices.length; i++) {
      sumAllPrices += parseInt(priceWithoutSpaces(allPrices[i].textContent));
    }
    if (allPrices.length === 0) {
      cartOpenFullPrice.classList.remove("_active");
    } else {
      cartOpenFullPrice.classList.add("_active");
    }
    return (fullPrice.innerHTML = sumAllPrices);
  };

  //print Quantity

  const printQuantity = () => {
    let length = cartProductList.children.length;
    cartQuantity.textContent = length;
    if (length == 0) {
      textNothing.classList.add("_active");
    } else if (length <= 1) {
      textNothing.classList.remove("_active");
    }
  };

  //updateProductPrice

  const updateProductPrice = (articul, quantity) => {
    const productItem = document.querySelector(`[data-art="${articul}"]`);
    const productPrice = parseInt(
      productItem.querySelector(".cart-open__price-product").dataset.price
    );

    const totalPrice = productPrice * quantity;
    productItem.querySelector(".cart-open__price-product").textContent =
      totalPrice.toLocaleString() + "грн";

    printFullPrice();
  };

  //productPlus

  const productPlus = (plus) => {
    if (plus) {
      const articul = plus.dataset.art;
      const value = document.querySelector(`[data-art="${articul}"] + span`);
      let result = parseInt(value.textContent);
      result++;
      if (result <= 20) {
        updateProductPrice(articul, result);
      } else {
        return;
      }
      //..............................................................................................
      return (value.innerHTML = result);
    }
  };

  //productMinus

  const productMinus = (minus) => {
    if (minus) {
      const articul = minus.dataset.art;
      const value = document.querySelector(`[data-art="${articul}"] + span`);
      let result = parseInt(value.textContent);
      result--;

      if (result <= 0) {
        return;
      } else {
        updateProductPrice(articul, result);
      }
      //.................................................................................................
      return (value.innerHTML = result);
    }
  };

  //deleteProducts

  const deleteProducts = (productParent) => {
    let articul = productParent.querySelector(".cart-open__item").dataset.art;
    document
      .querySelector(`.products__card[data-art="${articul}"]`)
      .querySelector(".products__bottom-button").disabled = false;
    productParent.remove();
    printQuantity();
    printFullPrice();
  };

  productBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
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

      cartProductList.insertAdjacentHTML(
        "afterbegin",
        generateCartProduct(title, priceNumber, id, weight, articul)
      );

      //count and print quntity
      printQuantity();
      printFullPrice();

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
