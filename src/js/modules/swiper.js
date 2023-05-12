import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar]);

function swiperManufacturer() {
  const swiper = new Swiper(".manufacturer__swiper", {
    direction: "horizontal",
    navigation: {
      nextEl: ".manufacturer__button-next",
      prevEl: ".manufacturer__button-prev",
    },
  });
}
swiperManufacturer();

function newsSwiper() {
  const swiper = new Swiper(".news__swiper", {
    direction: "horizontal",
    navigation: {
      nextEl: ".news__button-next",
      prevEl: ".news__button-prev",
    },
    breakpoints: {
      360: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        centeredSlides: true,
      },
      375: {
        slidesPerView: 1.4,
        spaceBetween: 10,
        centeredSlides: true,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 2.5,
        spaceBetween: 10,
        centeredSlides: true,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 10,
        centeredSlides: true,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 31,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 31,
      },
    },
  });
}
newsSwiper();


function ecology(){
  let swiper = new Swiper(".ecology__swiper-left", {
    direction: "vertical",
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
ecology();