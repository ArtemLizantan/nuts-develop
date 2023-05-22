import axios from "axios";
import Swiper, { Navigation, Pagination, Autoplay, Scrollbar } from "swiper";

async function dataProductPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const articul = urlParams.get("articul");
  const pageProduct = document.querySelector(".page-product");
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
            EnergyValue,
            BestBeforeDate,
            compound,
          },
        },
        i
      ) => {
        if (Articul === articul) {
          const markup = () => {
            return `  <div class="page-product__container">
            <div data-art="${Articul}" class="page-product__body">
              <div class="page-product__top">
                <div class="page-product__left">
                  <!-- Slider main container -->
                  <div class="swiper page-product__swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                      <!-- Slides -->
                      <div class="swiper-slide page-product__swiper-slide">
                        <div class="page-product__card">
                          <img src="http://localhost:1337${url}" alt="" />
                        </div>
                      </div>
                      <div class="swiper-slide page-product__swiper-slide">
                        <div class="page-product__card">
                          <img src="./images/page-product/walnut.png" alt="" />
                        </div>
                      </div>
                      <div class="swiper-slide page-product__swiper-slide">
                        <div class="page-product__card">
                          <img src="./images/page-product/walnut.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <!-- If we need navigation buttons -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                </div>
                <div class="page-product__right">
                  <div class="page-product__right-top">
                    <div class="page-product__right-top-left">
                      <div class="page-product__title">${title}</div>
                      <div class="page-product__subtitle">
                        ${subtitle}
                      </div>
                    </div>
                    <div class="page-product__right-top-right">
                      <div class="page-product__artic">${Articul}</div>
                    </div>
                  </div>
        
                  <div class="page-product__box-info box-info-product">
                    <div class="box-info-product__item">
                      <div class="box-info-product__left">Состав:</div>
                      <div class="box-info-product__right">
                      ${compound}
                      </div>
                    </div>
                    <div class="box-info-product__item">
                      <div class="box-info-product__left">Масса нетто:</div>
                      <div data-weight="${weight}" class="box-info-product__right box-info-product__right-weight">${weight}</div>
                    </div>
                    <div class="box-info-product__item">
                      <div class="box-info-product__left">Энергетическая ценность:</div>
                      <div class="box-info-product__right">${EnergyValue}</div>
                    </div>
                    <div class="box-info-product__item">
                      <div class="box-info-product__left">Срок годности:</div>
                      <div class="box-info-product__right">
                        ${BestBeforeDate}
                      </div>
                    </div>
                  </div>
                  <div class="page-product__bottom">
                    <div class="page-product__right-warning">
                      <img src="./images/page-product/warning.svg" alt="" />
                      Хранить в помещениях, защищенных от попадания прямых, солнечных
                      лучей, при температуре от +3 °C до +20 °C, и относительной
                      влажности воздуха не более 75 %
                    </div>
                    <div class="page-product__right-price">
                      <div class="products__bottom page-product__flex">
                        <div class="products__bottom-left">
                          <div class="products__bottom-price page-product__price">
                            Ваша цена:
                          </div>
                          <div
                            class="products__bottom-price-item page-product__price-item"
                          >
                            ${price} грн.
                          </div>
                        </div>
                        <div class="products__bottom-right">
                          <button data-art="${Articul}" class="page-product__button">
                            Заказать
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-product__bottom-block">
            <div class="page-product__mix">
              <div class="page-product__mix-buttons">
                <button
                  data-filter=".category-description"
                  class="page-product__mix-btn"
                >
                  Описание
                </button>
                <button data-filter=".category-package" class="page-product__mix-btn">
                  Упаковка
                </button>
                <button data-filter=".category-payment" class="page-product__mix-btn">
                  Оплата
                </button>
                <button data-filter=".category-delivery" class="page-product__mix-btn">
                  Доставка
                </button>
              </div>
              <div id="mixitupFourth" class="page-product__container">
                <div class="page-product__mix-content category-description mix">
                  <div class="page-product__mix-left">
                    <img src="./images/page-product/nut.png" alt="" />
                  </div>
                  <div class="page-product__mix-right">
                    <div class="page-product__mix-text">
                      <p class="news-page__text">
                        Уже 4000 лет люди питаются ценными грецкими орехами. Они
                        особенно полезны послеоперационным больным, детям, кормящим,
                        беременным женщинам. Чтобы вернуть силы, укрепить иммунитет,
                        одолеть туберкулез, кашель; грецкий орех очищенный, отборный
                        нужно истолочь, смешать с медом (2:1) и чайную ложку целебной
                        смеси употреблять перед едой.
                      </p>
                      <p class="news-page__text">
                        В белке грецких орехов много (15 %) аргинина. Он особенно нужен
                        детям, больным, пожилым людям, в организме которых аминокислота
                        плохо синтезируется. Аргинин помогает сосудам регенерировать, а
                        всему организму – победить воспаления.
                      </p>
                      <div class="page-product__mix-items">
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Другие полезные вещества грецких орехов:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              Антиоксиданты защищают печень от повреждений
                            </li>
                            <li class="news-page__list-item">
                              Полифенолы не дают образоваться сосудистым тромбам
                            </li>
                            <li class="news-page__list-item">
                              Нейропротекторы улучшают работу мозга, отодвигают старость
                            </li>
                          </ol>
                        </div>
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Нужно систематически есть грецкие орехи, чтобы:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              На 30–40 % снизить риск заболевания раком простаты
                            </li>
                            <li class="news-page__list-item">
                              На 50 % – раком молочной железы
                            </li>
                            <li class="news-page__list-item">
                              Предотвратить дегенерацию глазной макулы, а значит,
                              улучшить зрение
                            </li>
                            <li class="news-page__list-item">
                              Отрегулировать обмен веществ, выработку инсулина; понизить
                              количество сахара в крови
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page-product__mix-content category-package mix">
                  <div class="page-product__mix-left">
                    <img src="./images/page-product/nut.png" alt="" />
                  </div>
                  <div class="page-product__mix-right">
                    <div class="page-product__mix-text">
                      <p class="news-page__text">
                        Уже 4000 лет люди питаются ценными грецкими орехами. Они
                        особенно полезны послеоперационным больным, детям, кормящим,
                        беременным женщинам. Чтобы вернуть силы, укрепить иммунитет,
                        одолеть туберкулез, кашель; грецкий орех очищенный, отборный
                        нужно истолочь, смешать с медом (2:1) и чайную ложку целебной
                        смеси употреблять перед едой.
                      </p>
                      <p class="news-page__text">
                        В белке грецких орехов много (15 %) аргинина. Он особенно нужен
                        детям, больным, пожилым людям, в организме которых аминокислота
                        плохо синтезируется. Аргинин помогает сосудам регенерировать, а
                        всему организму – победить воспаления.
                      </p>
                      <div class="page-product__mix-items">
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Другие полезные вещества грецких орехов:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              Антиоксиданты защищают печень от повреждений
                            </li>
                            <li class="news-page__list-item">
                              Полифенолы не дают образоваться сосудистым тромбам
                            </li>
                            <li class="news-page__list-item">
                              Нейропротекторы улучшают работу мозга, отодвигают старость
                            </li>
                          </ol>
                        </div>
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Нужно систематически есть грецкие орехи, чтобы:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              На 30–40 % снизить риск заболевания раком простаты
                            </li>
                            <li class="news-page__list-item">
                              На 50 % – раком молочной железы
                            </li>
                            <li class="news-page__list-item">
                              Предотвратить дегенерацию глазной макулы, а значит,
                              улучшить зрение
                            </li>
                            <li class="news-page__list-item">
                              Отрегулировать обмен веществ, выработку инсулина; понизить
                              количество сахара в крови
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page-product__mix-content category-payment mix">
                  <div class="page-product__mix-left">
                    <img src="./images/page-product/nut.png" alt="" />
                  </div>
                  <div class="page-product__mix-right">
                    <div class="page-product__mix-text">
                      <p class="news-page__text">
                        Уже 4000 лет люди питаются ценными грецкими орехами. Они
                        особенно полезны послеоперационным больным, детям, кормящим,
                        беременным женщинам. Чтобы вернуть силы, укрепить иммунитет,
                        одолеть туберкулез, кашель; грецкий орех очищенный, отборный
                        нужно истолочь, смешать с медом (2:1) и чайную ложку целебной
                        смеси употреблять перед едой.
                      </p>
                      <p class="news-page__text">
                        В белке грецких орехов много (15 %) аргинина. Он особенно нужен
                        детям, больным, пожилым людям, в организме которых аминокислота
                        плохо синтезируется. Аргинин помогает сосудам регенерировать, а
                        всему организму – победить воспаления.
                      </p>
                      <div class="page-product__mix-items">
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Другие полезные вещества грецких орехов:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              Антиоксиданты защищают печень от повреждений
                            </li>
                            <li class="news-page__list-item">
                              Полифенолы не дают образоваться сосудистым тромбам
                            </li>
                            <li class="news-page__list-item">
                              Нейропротекторы улучшают работу мозга, отодвигают старость
                            </li>
                          </ol>
                        </div>
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Нужно систематически есть грецкие орехи, чтобы:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              На 30–40 % снизить риск заболевания раком простаты
                            </li>
                            <li class="news-page__list-item">
                              На 50 % – раком молочной железы
                            </li>
                            <li class="news-page__list-item">
                              Предотвратить дегенерацию глазной макулы, а значит,
                              улучшить зрение
                            </li>
                            <li class="news-page__list-item">
                              Отрегулировать обмен веществ, выработку инсулина; понизить
                              количество сахара в крови
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="page-product__mix-content category-delivery mix">
                  <div class="page-product__mix-left">
                    <img src="./images/page-product/nut.png" alt="" />
                  </div>
                  <div class="page-product__mix-right">
                    <div class="page-product__mix-text">
                      <p class="news-page__text">
                        Уже 4000 лет люди питаются ценными грецкими орехами. Они
                        особенно полезны послеоперационным больным, детям, кормящим,
                        беременным женщинам. Чтобы вернуть силы, укрепить иммунитет,
                        одолеть туберкулез, кашель; грецкий орех очищенный, отборный
                        нужно истолочь, смешать с медом (2:1) и чайную ложку целебной
                        смеси употреблять перед едой.
                      </p>
                      <p class="news-page__text">
                        В белке грецких орехов много (15 %) аргинина. Он особенно нужен
                        детям, больным, пожилым людям, в организме которых аминокислота
                        плохо синтезируется. Аргинин помогает сосудам регенерировать, а
                        всему организму – победить воспаления.
                      </p>
                      <div class="page-product__mix-items">
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Другие полезные вещества грецких орехов:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              Антиоксиданты защищают печень от повреждений
                            </li>
                            <li class="news-page__list-item">
                              Полифенолы не дают образоваться сосудистым тромбам
                            </li>
                            <li class="news-page__list-item">
                              Нейропротекторы улучшают работу мозга, отодвигают старость
                            </li>
                          </ol>
                        </div>
                        <div class="page-product__mix-item">
                          <div class="news-page__list-title">
                            Нужно систематически есть грецкие орехи, чтобы:
                          </div>
                          <ol class="news-page__list">
                            <li class="news-page__list-item">
                              На 30–40 % снизить риск заболевания раком простаты
                            </li>
                            <li class="news-page__list-item">
                              На 50 % – раком молочной железы
                            </li>
                            <li class="news-page__list-item">
                              Предотвратить дегенерацию глазной макулы, а значит,
                              улучшить зрение
                            </li>
                            <li class="news-page__list-item">
                              Отрегулировать обмен веществ, выработку инсулина; понизить
                              количество сахара в крови
                            </li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
          };
          pageProduct.innerHTML = markup();
          const swiperImgs = pageProduct.querySelector(".page-product__swiper");
          new Swiper(swiperImgs, {
            slidesPerView: 1,
          });
        }
      }
    );
  } catch (error) {
    console.error(error);
  }
}

export default dataProductPage;
