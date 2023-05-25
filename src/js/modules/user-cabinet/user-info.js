import JustValidate from "just-validate";
import axios from "axios";

const contactMarkupFop = (requisites, username, email, phoneNumber) => {
  return ` <div class="cabinet__contact-wrapper">
  <button class="cabinet__contact-edit">
    <img src="./images/cabinet/contact/edit.svg" alt="" />
  </button>
  <div class="cabinet__contact-item">
  <ul class="cabinet__contact-list">
      <li class="cabinet__contact-list-item">Компания*</li>
      <li class="cabinet__contact-list-item">${requisites}</li>
  </ul>
</div>
  <div class="cabinet__contact-item">
      <ul class="cabinet__contact-list">
          <li class="cabinet__contact-list-item">Контактное лицо*</li>
          <li class="cabinet__contact-list-item">${username}</li>
      </ul>
  </div>
  <div class="cabinet__contact-item">
      <ul class="cabinet__contact-list">
          <li class="cabinet__contact-list-item">Email</li>
          <li class="cabinet__contact-list-item">${email}</li>
      </ul>
  </div>
  <div class="cabinet__contact-item">
      <ul class="cabinet__contact-list">
          <li class="cabinet__contact-list-item">Телефон</li>
          <li class="cabinet__contact-list-item">${phoneNumber}</li>
      </ul>
  </div>
</div>`;
};

const contactEditFop = (requisites,username,email, phoneNumber) => {
  return `
  <form action="#" class="cabinet__contact-form">
  <div class="cabinet__contact-wrap">
      <div class="cabinet__inputs-wrapper">
        <div class="registration__input-wrap">
          <input
            class="registration__input form-company"
            type="text"
            placeholder="Компания*"
            name="company"
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
  <div class="cabinet__info-buttons">
        <button type="submit" class="cabinet__button-submit">
          Сохранить
        </button>
        <button type="button" class="cabinet__info-cancel">
        Отменить
      </button>
      </div>
</form>
  `;
};

//.....................................................

const contactMarkup = (username, email, phoneNumber) => {
  return ` <div class="cabinet__contact-wrapper">
  <button class="cabinet__contact-edit">
    <img src="./images/cabinet/contact/edit.svg" alt="" />
  </button>
  <div class="cabinet__contact-item">
      <ul class="cabinet__contact-list">
          <li class="cabinet__contact-list-item">Фио</li>
          <li class="cabinet__contact-list-item">${username}</li>
      </ul>
  </div>
  <div class="cabinet__contact-item">
      <ul class="cabinet__contact-list">
          <li class="cabinet__contact-list-item">Email</li>
          <li class="cabinet__contact-list-item">${email}</li>
      </ul>
  </div>
  <div class="cabinet__contact-item">
      <ul class="cabinet__contact-list">
          <li class="cabinet__contact-list-item">Телефон</li>
          <li class="cabinet__contact-list-item">${phoneNumber}</li>
      </ul>
  </div>
</div>`;
};

const contactEdit = (username ,email, phoneNumber) => {
  return `        <form action="#" class="cabinet__contact-form">
  <div class="cabinet__contact-wrap">
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
   <div class="cabinet__info-buttons">
        <button type="submit" class="cabinet__button-submit">
          Сохранить
        </button>
        <button type="button" class="cabinet__info-cancel">
        Отменить
      </button>
      </div>
      </form>`;
};

function contactValidation(fop) {
  const formCabinet = document.querySelector(".cabinet__contact-form");
  const formRequisites = document.querySelector(".form-requisites");

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
    if (fop) {
      validate.addField(".form-company", [
        {
          rule: "required",
          errorMessage: "Пожалуйста,введите название компании",
        },
      ]);
    }
  }
}

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
      const email = data.email;
      const phoneNumber = data.phoneNumber;
      const username = data.username;
      const fop = data.fop;
      const requisites = data.requisites;

      if (fop) {
        contactWrapper.innerHTML = contactMarkupFop(
          requisites,
          username,
          email,
          phoneNumber
        );
        const buttonEdit = document.querySelector(".cabinet__contact-edit");
        buttonEdit.addEventListener("click", () => {
          contactWrapper.innerHTML = contactEditFop(requisites,username,email,phoneNumber);
          contactValidation(fop);
        });
      } else {
        contactWrapper.innerHTML = contactMarkup(username, email, phoneNumber);
        const buttonEdit = document.querySelector(".cabinet__contact-edit");
        buttonEdit.addEventListener("click", () => {
          contactWrapper.innerHTML = contactEdit(username,email,phoneNumber);
          contactValidation(fop);
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default contactInfo;
