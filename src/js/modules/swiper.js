import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function cardsSwiper() {
  const products = document.querySelector(".products");
  if (products) {
    const swiper = new Swiper(".products__swiperImgs", {
      centeredSlides: true,
      navigation: {
        nextEl: ".products__img-button-next",
        prevEl: ".products__img-button-prev",
      },
    });
  }
}

cardsSwiper();

