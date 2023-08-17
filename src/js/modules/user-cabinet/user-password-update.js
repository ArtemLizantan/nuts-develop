import axios from "axios";
import JustValidate from "just-validate";
import { API } from "../globals";

async function updatePassword() {
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const sucsess = document.createElement("div");
  sucsess.innerHTML = "Пароль успешно изменен!";
  sucsess.style.color = "green";
  sucsess.style.marginTop = "15px";

  const errorField = document.createElement("div");
  errorField.innerHTML = "Неверный старый пароль!";
  errorField.style.color = "red";
  errorField.style.marginTop = "15px";

  const cabinetPasswordForm = document.querySelector(".cabinet__form-password");

  if (cabinetPasswordForm) {
    const submitButton = cabinetPasswordForm.querySelector(
      ".cabinet__password-submit"
    );
    function validatePassword() {
      const validate = new JustValidate(cabinetPasswordForm, {
        validateBeforeSubmitting: true,
        lockForm: true,
        successFieldCssClass: ["valid"],
      });
      validate.addField(".old-password", [
        {
          rule: "password",
          errorMessage:
            "Введите минимум 8 значений (значение должно содержать буквы на английском)",
        },
        {
          errorMessage: "Пожалуйста, введите старый пароль!",
          rule: "required",
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
      validate.onValidate(function (isValid) {
        if (isValid.isValid == false) {
          submitButton.classList.add("not-valid");
        } else {
          submitButton.classList.remove("not-valid");
          cabinetPasswordForm.addEventListener("submit", async (e) => {
            e.preventDefault();
            const formData = new FormData(cabinetPasswordForm);
            const oldPassword = formData.get("passwordOld");
            const newPassword = formData.get("passwordNew");
            const confirmPassword = formData.get("passwordConfirm");

            axios
              .post(
                `${API}/api/auth/change-password`,
                {
                  currentPassword: oldPassword,
                  password: newPassword,
                  passwordConfirmation: confirmPassword,
                },
                {
                  headers: {
                    Authorization: "Bearer " + `${jwt}`,
                  },
                }
              )
              .then((response) => {
                cabinetPasswordForm.insertAdjacentElement("afterend", sucsess);
                setTimeout(() => {
                  location.href = "user-cabinet.html";
                }, 1000);
              })
              .catch((error) => {
                cabinetPasswordForm.insertAdjacentElement(
                  "afterend",
                  errorField
                );
              });
          });
        }
      });
    }
    validatePassword();
  }
}

export default updatePassword;
