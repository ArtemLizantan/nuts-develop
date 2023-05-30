import axios from "axios";
import JustValidate from "just-validate";

async function registration() {
  const form = document.querySelector(".registration__form");
  if (form) {
    const popupSuccess = document.querySelector(".popup__thank");
    const fopButton = document.getElementById("fop");
    const usuallyButton = document.getElementById("individual");
    const body = document.querySelector("body");
    const registerButton = document.querySelector(
      ".registration__submit-button"
    );
    let country;
    let region;
    let countryfop;
    let regionfop;

    const addEventListeners = () => {
      document.querySelectorAll(".filter__button-country").forEach((el) => {
        el.addEventListener("click", (e) => {
          country = e.target.dataset.country;
        });
      });
      document.querySelectorAll(".filter__button-region").forEach((el) => {
        el.addEventListener("click", (e) => {
          region = e.target.dataset.region;
        });
      });
      document.querySelectorAll(".filter__button-country-fop").forEach((el) => {
        el.addEventListener("click", (e) => {
          countryfop = e.target.dataset.countryfop;
        });
      });
      document.querySelectorAll(".filter__button-region-fop").forEach((el) => {
        el.addEventListener("click", (e) => {
          regionfop = e.target.dataset.regionfop;
        });
      });
    };

    addEventListeners();

    function validate() {
      if (form) {
        const validate = new JustValidate(form, {
          validateBeforeSubmitting: true,
          lockForm: true,
          successFieldCssClass: ["valid"],
        });
        validate.addField(".form-name", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваше имя",
          },
        ]);
        validate.addField(".form-email", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш email",
          },
          {
            rule: "email",
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
        validate.addField(".form-city", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш город",
          },
        ]);
        validate.addField(".form-adress", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш адрес",
          },
        ]);
        validate.addField(".form-password", [
          {
            rule: "password",
            errorMessage:
              "Введите минимум 8 значений (значение должно содержать буквы на английском)",
          },
          {
            errorMessage: "Пожалуйста, придумайте пароль",
            rule: "required",
          },
        ]);
        validate.addField(".form-confirm-password", [
          {
            rule: "required",
            errorMessage: "Пожалуйста, введите повторно пароль",
          },
          {
            validator: (value, fields) => {
              if (fields[".form-password"] && fields[".form-password"].elem) {
                const repeatPasswordValue = fields[".form-password"].elem.value;

                return value === repeatPasswordValue;
              }

              return true;
            },
            errorMessage: "Пароли не совпадают!",
          },
        ]);
        fopButton.addEventListener("click", () => {
          registerButton.classList.add("not-valid");

          // Добавить валидацию для полей, связанных с FOP
          validate.addField(".form-requisites", [
            {
              rule: "required",
              errorMessage: "Пожалуйста, введите Ваши реквезиты",
            },
          ]);
          validate.addField(".form-city-fop", [
            {
              rule: "required",
              errorMessage: "Пожалуйста, введите город ФОП",
            },
          ]);
          validate.addField(".form-adress-fop", [
            {
              rule: "required",
              errorMessage: "Пожалуйста, введите адрес ФОП",
            },
          ]);
          validate.addField(".form-index-fop", [
            {
              rule: "required",
              errorMessage: "Пожалуйста, введите индекс ФОП",
            },
            {
              rule: "number",
            },
          ]);
        });

        usuallyButton.addEventListener("click", () => {
          // Убрать валидацию для полей, связанных с FOP
          validate.removeField(".form-requisites");
          validate.removeField(".form-city-fop");
          validate.removeField(".form-adress-fop");
          validate.removeField(".form-index-fop");
          form.querySelector(".form-requisites").value = "";
          form.querySelector(".form-city-fop").value = "";
          form.querySelector(".form-adress-fop").value = "";
          form.querySelector(".form-index-fop").value = "";
          registerButton.classList.remove("not-valid");
        });

        validate.onValidate(function (isValid) {
          if (isValid.isValid == false) {
            registerButton.classList.add("not-valid");
          } else {
            registerButton.classList.remove("not-valid");
            form.addEventListener("submit", async (e) => {
              e.preventDefault();

              const formData = new FormData(form);
              const name = formData.get("name");
              const email = formData.get("email");
              const phoneNumber = formData.get("phoneNumber");
              const city = formData.get("city");
              const adress = formData.get("adress");
              const confirmPassword = formData.get("confirmPassword");
              const requisites = formData.get("requisites");
              const cityFop = formData.get("cityFop");
              const adressFop = formData.get("adressFop");
              const indexFop = formData.get("indexFop");
              const img = formData.get("file");

              if (fopButton.classList.contains("mixitup-control-active")) {
                axios
                  .post("http://localhost:1337/api/auth/local/register", {
                    username: name,
                    email: email,
                    password: confirmPassword,
                    phoneNumber: phoneNumber,
                    city: city,
                    adress: adress,
                    cityFop: cityFop,
                    indexFop: indexFop,
                    requisites: requisites,
                    adressFop: adressFop,
                    img: img,
                    regionfop: regionfop,
                    countryfop: countryfop,
                    country: country,
                    region: region,
                    fop: true,
                  })
                  .then((response) => {
                    console.log("User profile", response.data.user);
                    console.log("User token", response.data.jwt);
                    popupSuccess.classList.add("_active");
                    body.classList.add("_lock");
                    document.cookie = `jwt=${response.data.jwt}; expires=Fri, 01 Jan 2024 00:00:00; path=/`;
                  })
                  .catch((error) => {
                    console.log("An error occurred:", error.response);
                  });
              } else {
                axios
                  .post("http://localhost:1337/api/auth/local/register", {
                    username: name,
                    email: email,
                    password: confirmPassword,
                    phoneNumber: phoneNumber,
                    city: city,
                    img: img,
                    adress: adress,
                    country: country,
                    region: region,
                    fop: false,
                  })
                  .then((response) => {
                    popupSuccess.classList.add("_active");
                    console.log("User profile", response.data.user);
                    console.log("User token", response.data.jwt);
                    body.classList.add("_lock");
                    document.cookie = `jwt=${response.data.jwt}; expires=Fri, 01 Jan 2024 00:00:00; path=/`;
                  })
                  .catch((error) => {

                  });
              }
            });
          }
        });
      }
    }
    validate();
  }
}

export default registration;
