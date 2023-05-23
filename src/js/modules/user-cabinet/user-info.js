import JustValidate from "just-validate";
import axios from "axios";

// validateUserInfo();

async function contactInfo() {
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const contactWrapper = document.querySelector(".cabinet__contact-info");

  if (contactWrapper) {
    try {
      const response = await axios.get("http://localhost:1337/api/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      console.log(data);
      const adress = data.adress;
      const adressFop = data.adressFop;
      const city = data.city;
      const cityFop = data.cityFop;
      const country = data.country;
      const countryFop = data.countryFop;
      const email = data.email;
      const phoneNumber = data.phoneNumber;
      const username = data.username;
      const fop = data.fop;
      const requisites = data.requisites;

      if (fop === false) {
        const contactMarkup = () => {
          return `<form action="#" class="cabinet__contact-form">
          <div class="cabinet__contact-wrapper">
            <div class="cabinet__inputs-wrapper">
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-name"
                  type="text"
                  placeholder="ФИО*"
                  name="name"
                  value="${username}"
                />
              </div>
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-email"
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value="${email}"
                />
              </div>
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-tel"
                  type="tel"
                  placeholder="Телефон*"
                  name="phoneNumber"
                  value="${phoneNumber}"
                />
              </div>
            </div>
            <div class="registration__upload">
              <input
                type="file"
                name="file"
                id="file"
                class="registration__input-file"
                name="img"
              />
              <label
                class="registration__upload-label"
                for="file"
                class="btn"
              >
                <span
                  ><img
                    class="registration__upload-switch"
                    src="./images/registration/overlay.png"
                    alt=""
                /></span>
              </label>
            </div>
          </div>
          <button type="submit" class="cabinet__button-submit">
            Сохранить
          </button>
        </form>`;
        };
        contactWrapper.innerHTML = contactMarkup();
        contactValidation();
      } else {
        const contactMarkup = () => {
          return `        <form action="#" class="cabinet__contact-form">
          <div class="cabinet__contact-wrapper">
            <div class="cabinet__inputs-wrapper">
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-requisites"
                  type="text"
                  placeholder="Компания*"
                  name="name"
                  value="${requisites}"
                />
              </div>
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-name"
                  type="text"
                  placeholder="Контактное лицо*"
                  name="name"
                  value="${username}"
                />
              </div>
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-email"
                  type="email"
                  placeholder="Email*"
                  name="email"
                  value="${email}"
                />
              </div>
              <div class="registration__input-wrap">
                <input
                  class="registration__input form-tel"
                  type="tel"
                  placeholder="Телефон*"
                  name="phoneNumber"
                  value="${phoneNumber}"
                />
              </div>
            </div>
            <div class="registration__upload">
              <input
                type="file"
                name="file"
                id="file"
                class="registration__input-file"
                name="img"
              />
              <label
                class="registration__upload-label"
                for="file"
                class="btn"
              >
                <span
                  ><img
                    class="registration__upload-switch"
                    src="./images/registration/overlay.png"
                    alt=""
                /></span>
              </label>
            </div>
          </div>
          <button type="submit" class="cabinet__button-submit">
            Сохранить
          </button>
        </form>`;
        };
        contactWrapper.innerHTML = contactMarkup();
        contactValidation();
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default contactInfo;

function contactValidation() {
  const formCabinet = document.querySelector(".cabinet__contact-form");

  if (formCabinet) {
    const validate = new JustValidate(formCabinet, {
      validateBeforeSubmitting: true,
      lockForm: true,
      successFieldCssClass: ["valid"],
    });

    validate.addField(".form-email", [
      {
        rule: "required",
        errorMessage: "Пожалуйста,введите Ваш email",
      },
      {
        rule: "email",
      },
    ]);
    validate.addField(".form-name", [
      {
        rule: "required",
        errorMessage: "Пожалуйста,введите Ваше имя",
      },
    ]);
    validate.addField(".form-tel", [
      {
        rule: "required",
        errorMessage: "Пожалуйста,введите Ваш номер телефона",
      },
      {
        rule: "number",
      },
    ]);
    validate.addField(".form-requisites", [
      {
        rule: "required",
        errorMessage: "Пожалуйста,введите Ваши реквезиты",
      },
    ]);
  }
}
