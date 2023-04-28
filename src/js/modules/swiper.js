import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";

Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function cardsSwiper() {
  const products = document.querySelector(".products");
  const productsSwiperImg = document.querySelectorAll(".products__swiperImg");
  console.log(productsSwiperImg);
  if (products) {
    const swiper = new Swiper(".products__swiperImg", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}
cardsSwiper();
