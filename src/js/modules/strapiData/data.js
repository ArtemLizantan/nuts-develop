import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";
import axios from "axios";

async function getData() {
  const productsCards = document.querySelectorAll(".products__card-link");
  const productsButtonShowMore = document.querySelector(".products__show-more");

  if (productsCards.length != 0) {
    try {
      const response = await axios.get(
        "http://localhost:1337/api/products?populate=deep"
      );
      const { data } = response.data;
      data.forEach(
        (
          {
            id,
            attributes: {
              img: {
                data: [
                  {
                    attributes: { url },
                  },
                ],
              },
              Articul,
              price,
              subtitle,
              title,
              weight,
              idTitle,
            },
          },
          i
        ) => {
          const markup = () => {
            return ` 
        <div data-art="${Articul}" class="products__card">
        <div class="products__swiper-img">
        <!-- Swiper IMG CARD -->
        
        <div class="swiper products__swiperImgs">
          <div class="swiper-wrapper products__swiper-wrapper">
            <div class="swiper-slide products__swiper-slide">
              <img
                class="products__cards-swiper-img"
                src="http://localhost:1337${url}"
                alt="walnut"
              />
            </div>
            <div class="swiper-slide products__swiper-slide">
              <img
                class="products__cards-swiper-img"
                src="./images/products/walnut.png"
                alt="walnut"
              />
            </div>
            <div class="swiper-slide products__swiper-slide">
              <img
                class="products__cards-swiper-img"
                src="./images/products/walnut.png"
                alt="walnut"
              />
            </div>
          </div>
        
          <div class="products__img-button-next">
            <img
              class="products__swiper-button-next"
              src="./images/swiper-cards/button-next.svg"
              alt="button-next"
            />
          </div>
          <div class="products__img-button-prev">
            <img
              class="products__swiper-button-prev"
              src="./images/swiper-cards/button-next.svg"
              alt="button-prev"
            />
          </div>
        </div>
        
        <!-- Swiper IMG CARD EnD -->
        </div>
        <div class="products__text">
        <div class="products__text-title">${title}</div>
        <div class="products__text-articul">Арт: ${Articul}</div>
        <div  data-title="${idTitle}" class="products__text-subtitle">
          ${subtitle}
        </div>
        <div class="products__info">
          <div class="_icon-weight products__info-left">
            <div class="products__info-wrapper-left">
              <div class="products__info-title">Масса</div>
              <div data-weight="${weight}" class="products__info-subtitle">${weight}</div>
            </div>
          </div>
          <div class="_icon-bag products__info-right">
            <div class="products__info-wrapper-left">
              <div class="products__info-title">Упаковка</div>
              <div class="products__info-subtitle">вакуумная</div>
            </div>
          </div>
        </div>
        </div>
        <div class="products__bottom">
        <div class="products__bottom-left">
          <div class="products__bottom-price">Цена:</div>
          <div data-price="${price}" class="products__bottom-price-item">
            <span>от</span> ${price} <span>грн.</span>
          </div>
        </div>
        <div class="products__bottom-right">
          <button data-art="${Articul}" class="products__bottom-button">Купить</button>
        </div>
        </div>
        </div>
         `;
          };
          productsCards[i].innerHTML = markup();
          const swiperImgs = productsCards[i].querySelector(
            ".products__swiperImgs"
          );
          new Swiper(swiperImgs, {
            navigation: {
              nextEl: ".products__swiper-button-next",
              prevEl: ".products__swiper-button-prev",
            },
          });
        }
      );
    } catch (error) {
      console.error(error);
    }
  }

  for (let i = 6; i < productsCards.length; i++) {
    productsCards[i].classList.add("_hide");
  }

  if (productsButtonShowMore) {
    productsButtonShowMore.addEventListener("click", () => {
      productsButtonShowMore.style.display = "none";
      for (let i = 6; i < productsCards.length; i++) {
        productsCards[i].classList.remove("_hide");
      }
    });
  }
}

export default getData;
