import axios from "axios";
import JustValidate from "just-validate";

async function userInfoFopUpdate() {
  const form = document.getElementById("cabinetEdit");
  if (form) {
    const editButton = document.getElementById("cabinetButtonEdit");
    const submitButton = document.getElementById("userContactSubmitButton");
    const cabinetAdressCancelButton = form.querySelector(
      ".cabinet__info-cancel"
    );
    let jwt = document.cookie;
    jwt = jwt.split("").splice(4).join("");

    const sucsess = document.createElement("div");
    sucsess.innerHTML = "Данные успешно сохранены!";
    sucsess.style.color = "green";
    sucsess.style.marginTop = "15px";

    function validateInfo() {
      const validate = new JustValidate(form, {
        validateBeforeSubmitting: true,
        lockForm: true,
        successFieldCssClass: ["valid"],
      });
      editButton.addEventListener("click", () => {
        submitButton.classList.add("not-valid");
        validate.addField(".form-name", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Вашe имя",
          },
        ]);
        validate.addField(".form-email", [
          {
            rule: "required",
            errorMessage: "Пожалуйста,введите Ваш Email",
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
      });
      cabinetAdressCancelButton.addEventListener("click", () => {
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
              const updatedUserData = {
                username: name,
                email: email,
                phoneNumber: phoneNumber,
              };

              await axios.put(
                `http://localhost:1337/api/users/${userId}`,
                updatedUserData
              );

              form.insertAdjacentElement("beforeend", sucsess);
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
    validateInfo();
  }
}

export default userInfoFopUpdate;
