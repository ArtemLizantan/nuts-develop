import axios from "axios";
import { API } from "../globals";

async function contactInfo() {
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const contactWrapper = document.querySelector(".cabinet__contact-info");

  if (contactWrapper) {
    const cabinetFop = document.getElementById("cabinetFop");
    const cabinetFopEdit = document.getElementById("cabinetFopEdit");

    const cabinet = document.getElementById("cabinet");
    const cabinetEdit = document.getElementById("cabinetEdit");

    const cabinetFopButtonEdit = document.getElementById(
      "cabinetFopButtonEdit"
    );
    const cabinetButtonEdit = document.getElementById("cabinetButtonEdit");

    const infoUserFop = cabinetFop.querySelectorAll(".cabinet__fop-info");
    const userFopInput = cabinetFopEdit.querySelectorAll(".user-fop-input");

    const infoUser = cabinet.querySelectorAll(".cabinet__user-info");
    const userInput = cabinetEdit.querySelectorAll(".user-input");
    const cabinetInfoCancel = document.querySelectorAll(
      ".cabinet__info-cancel"
    );

    try {
      const response = await axios.get(`${API}/api/users/me`, {
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
        cabinet.style.display = "none";
        cabinetEdit.style.display = "none";
        cabinetFopButtonEdit.addEventListener("click", () => {
          cabinetFopEdit.classList.add("_active");
          cabinetFop.classList.add("_hide");
        });

        infoUserFop[0].innerHTML = requisites;
        infoUserFop[1].innerHTML = username;
        infoUserFop[2].innerHTML = email;
        infoUserFop[3].innerHTML = phoneNumber;

        userFopInput[0].value = requisites;
        userFopInput[1].value = username;
        userFopInput[2].value = email;
        userFopInput[3].value = phoneNumber;

        cabinetInfoCancel.forEach((buttonCancel) => {
          buttonCancel.addEventListener("click", () => {
            cabinetFopEdit.classList.remove("_active");
            cabinetFop.classList.remove("_hide");
            userFopInput[0].value = requisites;
            userFopInput[1].value = username;
            userFopInput[2].value = email;
            userFopInput[3].value = phoneNumber;
          });
        });
      } else {
        cabinetFop.style.display = "none";
        cabinetFopEdit.style.display = "none";
        cabinetButtonEdit.addEventListener("click", () => {
          cabinetEdit.classList.add("_active");
          cabinet.classList.add("_hide");
        });

        infoUser[0].innerHTML = username;
        infoUser[1].innerHTML = email;
        infoUser[2].innerHTML = phoneNumber;

        userInput[0].value = username;
        userInput[1].value = email;
        userInput[2].value = phoneNumber;

        cabinetInfoCancel.forEach((buttonCancel) => {
          buttonCancel.addEventListener("click", () => {
            cabinetEdit.classList.remove("_active");
            cabinet.classList.remove("_hide");
            userInput[0].value = username;
            userInput[1].value = email;
            userInput[2].value = phoneNumber;
          });
        });
      }
    } catch (error) {}
  }
}

export default contactInfo;
