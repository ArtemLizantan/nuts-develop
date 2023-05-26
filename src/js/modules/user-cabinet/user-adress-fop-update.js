import axios from "axios";
import JustValidate from "just-validate";

async function userAdressFopUpdate() {
  const form = document.getElementById("userAdressFopEdit");
  if (form) {
    const cabinetAdressCancelButton = form.querySelector(
      ".cabinet__adress-cancel"
    );
    const submitButton = document.getElementById("adressEditFopButtonSubmit");
    const editButton = document.getElementById("userFopAdressEditButton");
    let jwt = document.cookie;
    jwt = jwt.split("").splice(4).join("");

    const sucsess = document.createElement("div");
    sucsess.innerHTML = "Данные успешно сохранены!";
    sucsess.style.color = "green";
    sucsess.style.marginTop = "15px";

    const regex = /[^\wа-яА-Я]+/g;

    function validateAdressFop() {
      const validate = new JustValidate(form, {
        validateBeforeSubmitting: true,
        lockForm: true,
        successFieldCssClass: ["valid"],
      });
      editButton.addEventListener("click", () => {
        submitButton.classList.add("not-valid");
        validate.addField(".form-requisites", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваши реквезиты",
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
            errorMessage: "Пожалуйста,введите Ваш адресс",
          },
        ]);
        validate.addField(".form-city-fop", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш город ФОП",
          },
        ]);
        validate.addField(".form-adress-fop", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш адресс ФОП",
          },
        ]);
        validate.addField(".form-index-fop", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш индекс ФОП",
          },
        ]);
      });
      cabinetAdressCancelButton.addEventListener("click", () => {
        validate.removeField(".form-requisites");
        validate.removeField(".form-city");
        validate.removeField(".form-adress");
        validate.removeField(".form-city-fop");
        validate.removeField(".form-adress-fop");
        validate.removeField(".form-index-fop");
      });

      validate.onValidate(function (isValid) {
        if (isValid.isValid == false) {
          submitButton.classList.add("not-valid");
        } else {
          submitButton.classList.remove("not-valid");
          form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const selectHeaderUssually =
              form.querySelectorAll(".select-header");

            const formData = new FormData(form);
            const requisites = formData.get("requisites");
            const city = formData.get("city");
            const adress = formData.get("adress");
            const adressFop = formData.get("adressFop");
            const cityFop = formData.get("cityFop");
            const indexFop = formData.get("indexFop");
            let country;
            let region;
            let countryFop;
            let regionFop;

            country = selectHeaderUssually[0].textContent.replace(regex, "");
            region = selectHeaderUssually[1].textContent.replace(regex, "");
            countryFop = selectHeaderUssually[2].textContent.replace(regex, "");
            regionFop = selectHeaderUssually[3].textContent.replace(regex, "");

            try {
              const response = await axios.get(
                "http://localhost:1337/api/users/me",
                {
                  headers: {
                    Authorization: `Bearer ${jwt}`,
                  },
                }
              );

              const userId = response.data.id;

              const updateAdressFop = {
                city: city,
                adress: adress,
                country: country,
                region: region,
                requisites: requisites,
                adressFop: adressFop,
                cityFop: cityFop,
                indexFop: indexFop,
                countryFop: countryFop,
                regionfop: regionFop,
              };

              await axios.put(
                `http://localhost:1337/api/users/${userId}`,
                updateAdressFop
              );

              form.insertAdjacentElement("afterend", sucsess);
              setTimeout(() => {
                location.href = "user-cabinet.html";
              }, 1000);
            } catch (error) {
              console.log(error);
            }
          });
        }
      });
    }
    validateAdressFop();
  }
}

export default userAdressFopUpdate;
