import JustValidate from "just-validate";

 function validate() {
  const form = document.querySelector(".registration__form");
  const fopButton = document.getElementById("fop");
  

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
          "Введите минимум 8 значений (значение должно содержать буквы)",
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
      validate.addField(".form-requisites", [
        {
          rule: "required",
          errorMessage: "Пожалуйста,введите Ваши реквезиты",
        },
      ]);
      validate.addField(".form-city-fop", [
        {
          rule: "required",
          errorMessage: "Пожалуйста,введите город ФОП",
        },
      ]);
      validate.addField(".form-adress-fop", [
        {
          rule: "required",
          errorMessage: "Пожалуйста,введите адрес ФОП",
        },
      ]);
      validate.addField(".form-index-fop", [
        {
          rule: "required",
          errorMessage: "Пожалуйста,введите индекс ФОП",
        },
        {
          rule: "number",
        },
      ]);
    });
  }
}

validate();
