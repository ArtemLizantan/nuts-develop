async function pageProduct() {
  const productsCard = document.querySelectorAll(".products__card");

  const handleClick = (event) => {
    const productId = event.currentTarget.dataset.art;
    window.location.href = "page-product.html?articul=" + productId;
  };

  productsCard.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.preventDefault();
      if (
        !event.target.closest(".products__bottom-button") &&
        !event.target.closest(".products__swiper-button-next") &&
        !event.target.closest(".products__swiper-button-prev")
      ) {
        handleClick(event);
      }
    });
  });
}

export default pageProduct;
