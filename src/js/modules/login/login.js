import axios from "axios";
import { API } from "../globals.js";

async function login() {
  const formLogin = document.querySelector(".login__form");
  const popupSuccess = document.querySelector(".popup__thank");
  const markup = `<h5 class="login__error-field">Неправильные данные!</h5>`;
  const errorElement = document.createElement("div");
  errorElement.innerHTML = markup;

  const popupTitileLogin = document.querySelector(".popup__login-title");
  if (popupTitileLogin) {
    popupTitileLogin.innerHTML = "Вы успешно вошли в систему!";
  }

  if (formLogin) {
    formLogin.addEventListener("submit", (e) => {
      e.preventDefault();
      const formLoginData = new FormData(formLogin);
      const email = formLoginData.get("useremail");
      const password = formLoginData.get("userpassword");
      axios
        .post(`${API}/api/auth/local`, {
          identifier: email,
          password: password,
        })
        .then((response) => {
          popupSuccess.classList.add("_active");
          document.cookie = `jwt=${response.data.jwt}; expires=Fri, 01 Jan 2024 00:00:00; path=/`;
        })
        .catch((error) => {
          formLogin.insertAdjacentElement("beforeend", errorElement);
        });
    });
  }
}

export default login;
