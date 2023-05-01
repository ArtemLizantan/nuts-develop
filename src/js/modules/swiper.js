import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function swiperManufacturer() {
  const swiperManufacturer = new Swiper(".manufacturer__swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
swiperManufacturer();
