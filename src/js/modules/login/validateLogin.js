import JustValidate from "just-validate";

function validateLogin() {
  const formLogin = document.querySelector(".login__form");

  if (formLogin) {
    const validate = new JustValidate(formLogin, {
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

    validate.addField(".form-password", [
      {
        rule: "password",
        errorMessage:
          "Введите минимум 8 значений (значение должно содержать буквы на английском)",
      },
      {
        errorMessage: "Пожалуйста, введите Ваш пароль",
        rule: "required",
      },
    ]);
  }
}

validateLogin();
