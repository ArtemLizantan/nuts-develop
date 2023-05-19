/*
!(i) 
Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
Или когда импортирован весь файл, например import "files/script.js";
Неиспользуемый (не вызванный) код в итоговый файл не попадает.

Если мы хотим добавить модуль следует его расскоментировать
*/
import {
  isWebp,
  headerFixed,
  togglePopupWindows,
  addTouchClass,
  addLoadedClass,
  menuInit,
} from "./modules";

/* Раскомментировать для использования */
// import { MousePRLX } from './libs/parallaxMouse'

/* Раскомментировать для использования */
// import AOS from 'aos'

/* Раскомментировать для использования */
// import Swiper, { Navigation, Pagination } from 'swiper'

// Включить/выключить FLS (Full Logging System) (в работе)
window["FLS"] = location.hostname === "localhost";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML
! (i) необходимо для корректного отображения webp из css 
*/

isWebp();
/* Добавление класса touch для HTML если браузер мобильный */
/* Раскомментировать для использования */
// addTouchClass();
/* Добавление loaded для HTML после полной загрузки страницы */
/* Раскомментировать для использования */
// addLoadedClass();
/* Модуль для работы с меню (Бургер) */
/* Раскомментировать для использования */
// menuInit()

/* Библиотека для анимаций ===============================================================================
 *  документация: https://michalsnik.github.io/aos
 */
// AOS.init();
// =======================================================================================================

// Паралакс мышей ========================================================================================
// const mousePrlx = new MousePRLX({})
// =======================================================================================================

// Фиксированный header ==================================================================================
// headerFixed()
// =======================================================================================================

/* Открытие/закрытие модальных окон ======================================================================
* Чтобы модальное окно открывалось и закрывалось
* На окно повешай атрибут data-popup="<название окна>"
* И на кнопку, которая вызывает окно так же повешай атрибут data-type="<название окна>"

* На обертку(враппер) окна добавь класс _overlay-bg
* На кнопку для закрытия окна добавь класс button-close
*/
/* Раскомментировать для использования */
// togglePopupWindows()
// =======================================================================================================

import burger from "./modules/burger.js";
import getData from "./modules/strapiData/data.js";
import dynamicHtml from "./modules/dynamicHtml/dynamicHtml.js";
import moveSubmitBlock from "./modules/dynamicHtml/dynamicHtml.js";
import addToCart from "./modules/cart/cart";
import swiperManufacturer from "./modules/swiper.js";
import newsSwiper from "./modules/swiper.js";
import filter from "./modules/filter/filter.js";
import customSelect from "./modules/customSelect/customSelect.js";
import ecology from "./modules/swiper.js";
import corporateMix from "./modules/mix/mix.js";
import registrarion from "./modules/registration/registration.js";
import prelouder from "./modules/prelouder.js";
import switchImg from "./modules/registration/switchImg.js";
import validate from "./modules/registration/validation";
import closePopup from "./modules/registration/closePopup.js";
import locationHeader from "./modules/registration/location.js";

async function go() {
  let a = await getData();
  let g = await registrarion();
  let b = await addToCart();
  let c = await filter();
}
go();
