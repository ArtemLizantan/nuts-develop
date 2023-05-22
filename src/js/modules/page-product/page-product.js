async function pageProduct() {
  const productsCard = document.querySelectorAll(".products__card");

  const handleClick = (event) => {
    const productId = event.currentTarget.dataset.art;
    window.location.href = "page-product.html?articul=" + productId;
  };

  productsCard.forEach((card) => {
    card.addEventListener("click", (event) => {
      if (!event.target.classList.contains("products__bottom-button")) {
        handleClick(event);
      }
    });
  });
}

export default pageProduct;
