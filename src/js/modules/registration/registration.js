import axios from "axios";

async function registrarion() {
  const form = document.querySelector(".registration__form");
  if (form) {
    const popupSuccess = document.querySelector(".popup__thank");
    const fopButton = document.getElementById("fop");
    const body = document.querySelector("body");
    const registerButton = document.querySelector(
      ".registration__submit-button"
    );
    const inputs = document.querySelectorAll(".registration__input");
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

    //checkFormValidity

    function checkFormValidity(input) {
      if (input.classList.contains("just-validate-error-field")) {
        registerButton.classList.add("disabled");
      } else if (input.classList.contains("valid")) {
        registerButton.classList.remove("disabled");
      }
    }

    inputs.forEach((el) => {
      el.addEventListener("change", () => {
        checkFormValidity(el);
      });
    });

    //checkFormValidity end

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      inputs.forEach((el) => {
        checkFormValidity(el);
      });

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

      console.log(img);

      if (fopButton.classList.contains("mixitup-control-active")) {
        axios
          .post("http://localhost:1337/api/auth/local/register", {
            headers: {
              "Content-Type": "multipart/form-data",
            },
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
            console.log("An error occurred:", error.response);
          });
      }
    });
  }
}

export default registrarion;
