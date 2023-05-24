import JustValidate from "just-validate";
import axios from "axios";

// validateUserInfo();

async function adressInfo() {
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const adressWrapper = document.querySelector(".cabinet__adress");

  if (adressWrapper) {
    try {
      const response = await axios.get("http://localhost:1337/api/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      const adress = data.adress;
      const adressFop = data.adressFop;
      const city = data.city;
      const cityFop = data.cityFop;
      const country = data.country;
      const countryFop = data.countryfop;
      const fop = data.fop;
      const requisites = data.requisites;
      const region = data.region;
      const regionFop = data.regionfop;
      const indexFop = data.indexFop;

      if (fop === false) {
        const contactMarkup = () => {
          return `
          <form action="#" class="cabinet__form-adress">
          <div class="cabinet__form-wrapper">
            <div class="registration__form-item">
              <div class="registration__subtitle">Адрес</div>
              <div class="registration__inputs">
                <div class="custom-select-mobile">
                  <div class="custom-select registration__select">
                    <div class="select-header">${country}</div>
                    <ul class="select-list registration__list">
                      <li>
                        <div
                          data-country="Украина"
                          class="filter__button-country"
                        >
                          Украина
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-select-mobile">
                  <div class="custom-select registration__select">
                    <div class="select-header">${region}</div>
                    <ul class="select-list registration__list">
                      <li>
                        <div
                          data-region="Одесская"
                          class="filter__button-region"
                        >
                          Одесская
                        </div>
                      </li>
                      <li>
                        <div
                          data-region="Киевская"
                          class="filter__button-region"
                        >
                          Киевская
                        </div>
                      </li>
                      <li>
                        <div
                          data-region="Харьковская"
                          class="filter__button-region"
                        >
                          Харьковская
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-city"
                    type="tel"
                    placeholder="Город*"
                    name="city"
                    value="${city}"
                  />
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-adress"
                    type="tel"
                    placeholder="Адрес*"
                    name="adress"
                    value="${adress}"
                  />
                </div>
              </div>
            </div>
            <div class="registration__bottom">
                <button type="submit" class="cabinet__adress-submit" >Сохранить</button>
              </div>
          </div>
        </form>
          `;
        };
        adressWrapper.innerHTML = contactMarkup();
        // adressValidation();
      } else {
        const contactMarkup = () => {
          return `
          <form action="#" class="cabinet__form-adress">
          <div class="cabinet__form-wrapper">
            <div class="registration__form-item">
              <div class="registration__subtitle">1. Реквизиты</div>
              <div class="registration__inputs">
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-requisites"
                    type="tel"
                    placeholder="Реквизиты"
                    name="requisites"
                    value="${requisites}"
                  />
                </div>
              </div>
            </div>
            <div class="registration__form-item">
              <div class="registration__subtitle">2. Адрес</div>
              <div class="registration__inputs">
                <div class="custom-select-mobile">
                  <div class="custom-select registration__select">
                    <div class="select-header">${country}</div>
                    <ul class="select-list registration__list">
                      <li>
                        <div
                          data-country="Украина"
                          class="filter__button-country"
                        >
                          Украина
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-select-mobile">
                  <div class="custom-select registration__select">
                    <div class="select-header">${region}</div>
                    <ul class="select-list registration__list">
                      <li>
                        <div
                          data-region="Одесская"
                          class="filter__button-region"
                        >
                          Одесская
                        </div>
                      </li>
                      <li>
                        <div
                          data-region="Киевская"
                          class="filter__button-region"
                        >
                          Киевская
                        </div>
                      </li>
                      <li>
                        <div
                          data-region="Харьковская"
                          class="filter__button-region"
                        >
                          Харьковская
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-city"
                    type="tel"
                    placeholder="Город*"
                    name="city"
                    value="${city}"
                  />
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-adress"
                    type="tel"
                    placeholder="Адрес*"
                    name="adress"
                    value="${adress}"
                  />
                </div>
              </div>
            </div>
            <div class="registration__form-item">
              <div class="registration__subtitle">3. Юридический адрес</div>
              <div class="registration__inputs">
                <div class="custom-select-mobile">
                  <div class="custom-select registration__select">
                    <div class="select-header">${countryFop}</div>
                    <ul class="select-list registration__list">
                      <li>
                        <div
                          data-countryfop="Украина"
                          class="filter__button-country-fop"
                        >
                          Украина
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="custom-select-mobile">
                  <div class="custom-select registration__select">
                    <div class="select-header">${regionFop}</div>
                    <ul class="select-list registration__list">
                      <li>
                        <div
                          data-regionfop="Odesskaya"
                          class="filter__button-region-fop"
                        >
                          Одесская
                        </div>
                      </li>
                      <li>
                        <div
                          data-regionfop="Kievskaya"
                          class="filter__button-region-fop"
                        >
                          Киевская
                        </div>
                      </li>
                      <li>
                        <div
                          data-regionfop="Kharkovskaya"
                          class="filter__button-region-fop"
                        >
                          Харьковская
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-city-fop"
                    type="text"
                    placeholder="Город*"
                    name="cityFop"
                    value="${cityFop}"
                  />
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-adress-fop"
                    type="text"
                    placeholder="Адрес*"
                    name="adressFop"
                    value="${adressFop}"
                  />
                </div>
                <div class="registration__input-wrap">
                  <input
                    class="registration__input form-index-fop"
                    type="text"
                    placeholder="Индекс*"
                    name="indexFop"
                    value="${indexFop}"
                  />
                </div>
              </div>
            </div>
            <div class="registration__bottom">
                <button type="submit" class="cabinet__adress-submit" >Сохранить</button>
              </div>
          </div>
          <div class="cabinet__form-img">
            <img src="./images/cabinet/adress/bg.png" alt="" />
            <div class="cabinet__img-text">
              <div class="cabinet__img-text-title">Орех Причерноморья</div>
              <div class="cabinet__img-text-subtitle">
                Единственный в Украине сад совместного выращивания фундука и
                грецкого ореха
              </div>
            </div>
          </div>
        </form>
          `;
        };
        adressWrapper.innerHTML = contactMarkup();
        // adressValidation();
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default adressInfo;

// function adressValidation() {
//   const formCabinetAdress = document.querySelector(".cabinet__form-adress");

//   if (formCabinetAdress) {
//     const validate = new JustValidate(formCabinetAdress, {
//       validateBeforeSubmitting: true,
//       lockForm: true,
//       successFieldCssClass: ["valid"],
//     });

//     validate.addField(".form-email", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваш email",
//       },
//       {
//         rule: "email",
//       },
//     ]);
//     validate.addField(".form-name", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваше имя",
//       },
//     ]);
//     validate.addField(".form-tel", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваш номер телефона",
//       },
//       {
//         rule: "number",
//       },
//     ]);
//     validate.addField(".form-requisites", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваши реквезиты",
//       },
//     ]);
//   }
// }
