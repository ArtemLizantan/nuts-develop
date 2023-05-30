import axios from "axios";
import JustValidate from "just-validate";

async function userInfoUpdate() {
  const form = document.getElementById("cabinetFopEdit");
  if (form) {
    let jwt = document.cookie;
    jwt = jwt.split("").splice(4).join("");

    const submitButton = document.getElementById("userContactFopSubmitButton");
    const editButton = document.getElementById("cabinetFopButtonEdit");
    const cabinetAdressCancelButton = form.querySelector(
      ".cabinet__info-cancel"
    );

    const sucsess = document.createElement("div");
    sucsess.innerHTML = "Данные успешно сохранены!";
    sucsess.style.color = "green";
    sucsess.style.marginTop = "15px";

    function validateInfoFop() {
      const validate = new JustValidate(form, {
        validateBeforeSubmitting: true,
        lockForm: true,
        successFieldCssClass: ["valid"],
      });
      editButton.addEventListener("click", () => {
        submitButton.classList.add("not-valid");
        validate.addField(".form-company", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Вашу компанию",
          },
        ]);
        validate.addField(".form-name", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите данные контактного лица",
          },
        ]);
        validate.addField(".form-email", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Email",
          },
          {
            rule: "email",
          },
        ]);
        validate.addField(".form-tel", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите номер телефона",
          },
          {
            rule: "number",
          },
        ]);
      });
      cabinetAdressCancelButton.addEventListener("click", () => {
        validate.removeField(".form-company");
        validate.removeField(".form-name");
        validate.removeField(".form-email");
        validate.removeField(".form-tel");
      });
      validate.onValidate(function (isValid) {
        if (isValid.isValid == false) {
          submitButton.classList.add("not-valid");
        } else {
          submitButton.classList.remove("not-valid");
          form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get("name");
            const email = formData.get("email");
            const phoneNumber = formData.get("phoneNumber");
            const requisites = formData.get("requisites");

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

              const updatedUserDataFop = {
                username: name,
                email: email,
                requisites: requisites,
                phoneNumber: phoneNumber,
              };

              await axios.put(
                `http://localhost:1337/api/users/${userId}`,
                updatedUserDataFop
              );

              form.insertAdjacentElement("afterend", sucsess);
              setTimeout(() => {
                location.href = "user-cabinet.html";
              }, 1000);
            } catch (error) {
             
            }
          });
        }
      });
    }

    validateInfoFop();
  }
}

export default userInfoUpdate;
