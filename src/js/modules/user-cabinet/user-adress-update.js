import axios from "axios";
import JustValidate from "just-validate";

async function userAdressUpdate() {
  const form = document.getElementById("userAdressEdit");
  if (form) {
    const submitButton = document.getElementById("adressEditButtonSumbit");
    const editButton = document.getElementById("userAdressEditButton");
    const cabinetAdressCancelButton = form.querySelector(
      ".cabinet__adress-cancel"
    );
    let jwt = document.cookie;
    jwt = jwt.split("").splice(4).join("");

    const sucsess = document.createElement("div");
    sucsess.innerHTML = "Данные успешно сохранены!";
    sucsess.style.color = "green";
    sucsess.style.marginTop = "15px";

    const regex = /[^\wа-яА-Я]+/g;

    function validateAdress() {
      const validate = new JustValidate(form, {
        validateBeforeSubmitting: true,
        lockForm: true,
        successFieldCssClass: ["valid"],
      });
      editButton.addEventListener("click", () => {
        submitButton.classList.add("not-valid");
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
      });
      cabinetAdressCancelButton.addEventListener("click", () => {
        validate.removeField(".form-city");
        validate.removeField(".form-adress");
      });

      validate.onValidate(function (isValid) {
        if (isValid.isValid == false) {
          submitButton.classList.add("not-valid");
        } else {
          if (form) {
            submitButton.classList.remove("not-valid");
            form.addEventListener("submit", async (e) => {
              e.preventDefault();
              const selectHeaderUssually =
                form.querySelectorAll(".select-header");
              const formData = new FormData(form);
              const city = formData.get("city");
              const adress = formData.get("adress");
              let country;
              let region;
              country = selectHeaderUssually[0].textContent.replace(regex, "");
              region = selectHeaderUssually[1].textContent.replace(regex, "");
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
                const updateAdress = {
                  city: city,
                  adress: adress,
                  country: country,
                  region: region,
                };
                await axios.put(
                  `http://localhost:1337/api/users/${userId}`,
                  updateAdress
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
        }
      });
    }
    validateAdress();
  }
}

export default userAdressUpdate;
