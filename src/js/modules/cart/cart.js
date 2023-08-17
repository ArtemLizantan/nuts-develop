async function addToCart() {
  const productBtn = document.querySelectorAll(".products__bottom-button");
  const cartProductList = document.querySelector(".cart-open__list");
  const cart = document.querySelector(".cart-open");
  const cartQuantity = document.querySelector(".header__cart-quantity");
  const fullPrice = document.querySelectorAll(".cart-open__price");
  const buttonCart = document.querySelector(".header__cart");
  const textNothing = document.querySelector(".cart-open__nothing");
  const cartOpenFullPrice = document.querySelector(".cart-open__fullprice");
  const productsCards = document.querySelectorAll(".products__card");
  const breakpoint = 992;
  const breakpointMobile = 480;
  const body = document.querySelector("body");
  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const mobileCloseCart = document.querySelector(".header__mobile-close-cart");
  const preScrin = document.querySelector(".menu__pre-scrin");
  const productPageButton = document.querySelectorAll(".page-product__button");
  const cartCenterPage = document.querySelector(".cart__center");
  const cartInfo = document.querySelector(".cart__info");
  const cartContButton = document.querySelector(".cart__cont-button");

  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  if (cartInfo) {
    if (jwt) {
      cartInfo.style.display = "none";
      if (cartContButton) {
        cartContButton.classList.add("_active");
      }
    } else {
      cartInfo.style.display = "flex";
      if (cartContButton) {
        cartContButton.classList.add("_hide");
      }
    }
  }

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
              <button data-art="${articul}" class="cart-open__minus"></button>
              <span>1</span>
              <button data-art="${articul}" class="cart-open__plus"></button>
            </div>
            <div data-price="${price}" class="cart-open__price-product">${price}грн.</div>
            <button class="cart-open__close">X</button>
          </div>
        </div>
      </li>`;
  };

  const getLocalCart = (title, articul, price) => {
    return `
      <tr class="cart__table-tr" data-art=${articul}>
      <td class="cart__table-left">
        <div class="cart-open__title">${title}</div>
      </td>
      <td>
        <div class="cart-open__buttons cart__buttons">
          <button data-art="${articul}" class="cart-open__minus"></button>
          <span>1</span>
          <button data-art="${articul}" class="cart-open__plus"></button>
        </div>
      </td>
      <td>
      <div data-price="${price}" class="cart__table-price-item">
       ${price} грн.
    </div>
      </td>
      <td>
        <div data-price="${price}" class="cart-open__price-product">${price} грн.</div>
      </td>
    </tr>
      `;
  };

  const getLocalCartAdaptive = (title, articul, price, number) => {
    return `
    <h2 class="cart__adaptive-title">Продукт №${number}</h2>
    <table data-art=${articul} class="cabinet__table-mobile cart__table-mobile">
      <tr class="cabinet__table-mobile-static">
        <td class="cabinet__mobile-td">Товар</td>
      </tr>
      <tr>
        <td class="cabinet__mobile-td-info">${title}</td>
      </tr>
      <tr class="cabinet__table-mobile-static">
        <td class="cabinet__mobile-td">Кол-во</td>
      </tr>
      <tr>
        <td class="cabinet__mobile-td-info">
        <div class="cart-open__buttons cart__buttons">
          <button data-art="${articul}" class="cart-open__minus"></button>
          <span>1</span>
          <button data-art="${articul}" class="cart-open__plus"></button>
        </div></td>
      </tr>
      <tr class="cabinet__table-mobile-static">
        <td class="cabinet__mobile-td">Цена за товар</td>
      </tr>
      <tr>
        <td class="cabinet__mobile-td-info"><div data-price="${price}" class="cart__table-price-item">
        ${price} грн.
     </div></td>
      </tr>
      <tr class="cabinet__table-mobile-static">
        <td class="cabinet__mobile-td">Итоговая стоимость</td>
      </tr>
      <tr>
        <td class="cabinet__mobile-td-info"><div data-price="${price}" class="cart-open__price-product cart__price-product">${price} грн.</div></td>
      </tr>
    </table>`;
  };

  //priceWithoutSpaces

  const priceWithoutSpaces = (str) => {
    return str.replace(/[^a-zA-Z0-9]/g, "");
  };

  // print and sum full price

  const printFullPrice = (sumAllPrices) => {
    const allPrices = document.querySelectorAll(".cart-open__price-product");
    const allItems = document.querySelectorAll(".cart-open__li");
    sumAllPrices = 0;
    for (let i = 0; i < allPrices.length; i++) {
      sumAllPrices += parseInt(priceWithoutSpaces(allPrices[i].textContent));
    }

    if (allItems.length === 0) {
      cartOpenFullPrice.classList.remove("_active");
    } else {
      cartOpenFullPrice.classList.add("_active");
    }
    if (cartCenterPage) {
      sumAllPrices = sumAllPrices / 2;
    }
    fullPrice.forEach((price) => {
      price.innerHTML = sumAllPrices;
    });
  };

  //print Quantity

  const printQuantity = () => {
    let length = cartProductList.children.length;
    cartQuantity.textContent = length;
    if (length == 0) {
      textNothing.classList.add("_active");
    } else if (length >= 1) {
      textNothing.classList.remove("_active");
    }
  };

  //updateProductPrice

  const updateProductPrice = (articul, quantity) => {
    const productItem = document.querySelectorAll(`[data-art="${articul}"]`);
    productItem.forEach((item) => {
      const productPrice = item.querySelectorAll(".cart-open__price-product");
      if (productPrice != 0) {
        productPrice.forEach((price) => {
          const contentPrice = parseInt(price.dataset.price);
          const totalPrice = contentPrice * quantity;
          item.querySelector(".cart-open__price-product").textContent =
            totalPrice.toLocaleString() + "грн";
        });
      }
    });
    printFullPrice();
  };

  //productPlus

  const productPlus = (plus) => {
    if (plus) {
      const articul = plus.dataset.art;
      const value = document.querySelectorAll(`[data-art="${articul}"] + span`);
      value.forEach((value) => {
        let result = parseInt(value.textContent);
        result++;
        if (result <= 20) {
          updateProductPrice(articul, result);
        } else {
          return;
        }
        value.innerHTML = result;
      });
    }
  };

  //productMinus

  const productMinus = (minus) => {
    if (minus) {
      const articul = minus.dataset.art;
      const value = document.querySelectorAll(`[data-art="${articul}"] + span`);
      value.forEach((value) => {
        let result = parseInt(value.textContent);
        result--;

        if (result <= 0) {
          return;
        } else {
          updateProductPrice(articul, result);
        }
        value.innerHTML = result;
      });
    }
  };

  //deleteProducts

  const deleteProducts = (productParent) => {
    let articul = productParent.querySelector(".cart-open__item").dataset.art;
    if (productsCards.length != 0) {
      document
        .querySelector(`.products__card[data-art="${articul}"]`)
        .querySelector(".products__bottom-button").disabled = false;
    }
    productParent.remove();
    printQuantity();
    printFullPrice();
    updateStorage();
  };

  const initialState = () => {
    if (localStorage.getItem("products") != null) {
      cartProductList.innerHTML = localStorage.getItem("products");
      printQuantity();
      printFullPrice();
      document.querySelectorAll(".cart-open__item").forEach((el) => {
        let id = el.dataset.art;
        if (productsCards.length != 0) {
          document
            .querySelector(`.products__card[data-art="${id}"]`)
            .querySelector(".products__bottom-button").disabled = true;
        }
      });
    }
  };

  initialState();

  const updateStorage = () => {
    let html = cartProductList.innerHTML;
    html = html.trim();

    if (html.length) {
      localStorage.setItem("products", html);
    } else {
      localStorage.removeItem("products");
    }
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

      //count and print quntity + localStorage
      printQuantity();
      printFullPrice();
      updateStorage();

      //diabled btn

      self.disabled = true;
    });
  });

  productPageButton.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();

      let articul = el.dataset.art;

      let self = e.currentTarget;

      let parent = self.closest(".page-product__body");

      let id = parent.dataset.art;

      let title = parent.querySelector(".page-product__title").textContent;

      let priceNumber = parseInt(
        priceWithoutSpaces(
          parent.querySelector(".products__bottom-price-item").textContent
        )
      );

      let weight = parent.querySelector(
        ".box-info-product__right-weight"
      ).textContent;

      if (cartProductList.querySelector(".cart-open__li")) {
        if (
          cartProductList.querySelector(".cart-open__item").dataset.art === id
        ) {
          location.href = "cart.html";
        } else {
          cartProductList.insertAdjacentHTML(
            "afterbegin",
            generateCartProduct(title, priceNumber, id, weight, articul)
          );
          //count and print quntity + localStorage
          printQuantity();
          printFullPrice();
          updateStorage();
          location.href = "cart.html";
        }
      } else {
        cartProductList.insertAdjacentHTML(
          "afterbegin",
          generateCartProduct(title, priceNumber, id, weight, articul)
        );
        //count and print quntity + localStorage
        printQuantity();
        printFullPrice();
        updateStorage();
        location.href = "index.html";
      }
    });
  });

  const pageCartTable = document.querySelector(".cart__table");
  const cartOpenItems = document.querySelectorAll(".cart-open__li");

  if (pageCartTable) {
    const printPageCart = () => {
      for (let i = 0; i < cartOpenItems.length; i++) {
        let title =
          cartOpenItems[i].querySelector(".cart-open__title").textContent;
        let articul =
          cartOpenItems[i].querySelector(".cart-open__item").dataset.art;
        let price = cartOpenItems[i].querySelector(".cart-open__price-product")
          .dataset.price;
        let weight = cartOpenItems[i].querySelector(
          ".cart-open__title span"
        ).textContent;

        const breakpoint = 992;
        if (window.innerWidth < breakpoint) {
          cartCenterPage.insertAdjacentHTML(
            "beforeend",
            getLocalCartAdaptive(title, articul, price, i + 1)
          );
          printFullPrice();
        } else {
          pageCartTable.insertAdjacentHTML(
            "beforeend",
            getLocalCart(title, articul, price, weight)
          );
          printFullPrice();
        }
      }
    };
    printPageCart();
  }

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
  if (pageCartTable) {
    pageCartTable.addEventListener("click", (e) => {
      if (e.target.classList.contains("cart-open__plus")) {
        productPlus(e.target);
      }
      if (e.target.classList.contains("cart-open__minus")) {
        productMinus(e.target);
      }
    });
  }
  if (cartCenterPage) {
    const breakpoint = 992;
    if (window.innerWidth < breakpoint) {
      cartCenterPage.addEventListener("click", (e) => {
        if (e.target.classList.contains("cart-open__plus")) {
          productPlus(e.target);
        }
        if (e.target.classList.contains("cart-open__minus")) {
          productMinus(e.target);
        }
      });
    }
  }

  window.addEventListener("click", (e) => {
    if (
      !e.target.closest(".cart-open") &&
      !e.target.closest(".header__cart") &&
      !e.target.closest(".cart-open__close")
    ) {
      document.querySelector(".cart-open").classList.remove("_active");
    }
  });
}

export default addToCart;
