// function data() {
//   const productsCards = document.querySelectorAll(".products__card");
//   const data = fetch("http://localhost:1337/api/products?populate=deep")
//     .then((response) => response.json())
//     .then(({ data }) => {
//       data.forEach(
//         ({ attributes: { Articul, price, subtitle, title, weight } }, i) => {
//           const markup = () => {
//             return `    <div class="products__swiper-img">
//           <!-- Swiper IMG CARD -->

//           <div class="swiper products__swiperImgs">
//             <div class="swiper-wrapper products__swiper-wrapper">
//               <div class="swiper-slide products__swiper-slide">
//                 <img
//                   class="products__cards-swiper-img"
//                   src="./images/products/walnut.png"
//                   alt="walnut"
//                 />
//               </div>
//               <div class="swiper-slide products__swiper-slide">
//                 <img
//                   class="products__cards-swiper-img"
//                   src="./images/products/walnut.png"
//                   alt="walnut"
//                 />
//               </div>
//               <div class="swiper-slide products__swiper-slide">
//                 <img
//                   class="products__cards-swiper-img"
//                   src="./images/products/walnut.png"
//                   alt="walnut"
//                 />
//               </div>
//             </div>

//             <div class="products__img-button-next">
//               <img
//                 class="products__swiper-button-next"
//                 src="./images/swiper-cards/button-next.svg"
//                 alt="button-next"
//               />
//             </div>
//             <div class="products__img-button-prev">
//               <img
//                 class="products__swiper-button-prev"
//                 src="./images/swiper-cards/button-next.svg"
//                 alt="button-prev"
//               />
//             </div>
//           </div>

//           <!-- Swiper IMG CARD EnD -->
//         </div>
//         <div class="products__text">
//           <div class="products__text-title">Грецкий орех</div>
//           <div class="products__text-articul">Арт: 0091</div>
//           <div class="products__text-subtitle">
//             Орех сладкий, классический, <br />
//             oчищенный
//           </div>
//           <div class="products__info">
//             <div class="_icon-weight products__info-left">
//               <div class="products__info-wrapper-left">
//                 <div class="products__info-title">Масса</div>
//                 <div class="products__info-subtitle">40г</div>
//               </div>
//             </div>
//             <div class="_icon-bag products__info-right">
//               <div class="products__info-wrapper-left">
//                 <div class="products__info-title">Упаковка</div>
//                 <div class="products__info-subtitle">вакуумная</div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="products__bottom">
//           <div class="products__bottom-left">
//             <div class="products__bottom-price">Цена:</div>
//             <div class="products__bottom-price-item">
//               <span>от</span> 21 <span>грн.</span>
//             </div>
//           </div>
//           <div class="products__bottom-right">
//             <button class="products__bottom-button">Купить</button>
//           </div>
//         </div>`;
//           };
//           productsCards[i].innerHTML = markup();
//         }
//       );
//     })
//     .catch((error) => console.error(error));
// }

// data();
