function filter() {
  const buttonAsc = document.getElementById("sort-asc");
  const buttonDesc = document.getElementById("sort-desc");

  const sortAsc = () => {
    const Itemprice = document.querySelectorAll(".products__bottom-price-item");
    Itemprice.forEach((el) => {
      const price = parseInt(el.dataset.price);
    });
  };

  buttonAsc.addEventListener("click", () => {
    sortAsc();
  });
}

filter();
