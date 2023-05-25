import JustValidate from "just-validate";
import axios from "axios";


async function adressInfo() {
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const adressWrapper = document.querySelector(".cabinet__adress");

  if (adressWrapper) {
    const userAdress = document.getElementById("userAdress");
    const userAdressEdit = document.getElementById("userAdressEdit");

    const userAdressFop = document.getElementById("userAdressFop");
    const userAdressFopEdit = document.getElementById("userAdressFopEdit");

    const userAdressEditButton = document.getElementById(
      "userAdressEditButton"
    );
    const userFopAdressEditButton = document.getElementById(
      "userFopAdressEditButton"
    );

    const userData = document.querySelectorAll(".user-adress-data");

    const userDataFop = userAdressFop.querySelectorAll(".user-adress-data-fop");

    const adressFopInput =
      userAdressFopEdit.querySelectorAll(".adressFopInput");

    const selectHeader = userAdressFopEdit.querySelectorAll(".select-header");
    const cabinetAdressCancelButton = document.querySelectorAll(
      ".cabinet__adress-cancel"
    );

    const userUsually = document.querySelectorAll(".user-ussual-adress-data");

    const userUssuallyInput = userAdressEdit.querySelectorAll(
      ".user-ussual-adress-input "
    );

    const selectHeaderUssually =
      userAdressEdit.querySelectorAll(".select-header");

    try {
      const response = await axios.get("http://localhost:1337/api/users/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      const data = response.data;
      const adress = data.adress;
      const adressFop = data.adressFop;
      const city = data.city;
      const cityFop = data.cityFop;
      const country = data.country;
      const countryFop = data.countryfop;
      const fop = data.fop;
      const requisites = data.requisites;
      const region = data.region;
      const regionFop = data.regionfop;
      const indexFop = data.indexFop;

      if (fop) {
        userAdress.style.display = "none";
        userAdressEdit.style.display = "none";
        userFopAdressEditButton.addEventListener("click", () => {
          userAdressFop.classList.add("_hide");
          userAdressFopEdit.classList.add("_active");
        });

        userData[0].innerHTML = requisites;
        userData[1].innerHTML = country;
        userData[2].innerHTML = region;
        userData[3].innerHTML = city;
        userData[4].innerHTML = adress;
        userDataFop[0].innerHTML = cityFop;
        userDataFop[1].innerHTML = regionFop;
        userDataFop[2].innerHTML = cityFop;
        userDataFop[3].innerHTML = adressFop;
        userDataFop[4].innerHTML = indexFop;

        adressFopInput[0].value = requisites;
        selectHeader[0].innerHTML = country;
        selectHeader[1].innerHTML = region;
        adressFopInput[1].value = city;
        adressFopInput[2].value = adress;
        selectHeader[2].innerHTML = countryFop;
        selectHeader[3].innerHTML = regionFop;
        adressFopInput[3].value = cityFop;
        adressFopInput[4].value = adressFop;
        adressFopInput[5].value = indexFop;

        cabinetAdressCancelButton.forEach((buttonCancel) => {
          buttonCancel.addEventListener("click", () => {
            userAdressFop.classList.remove("_hide");
            userAdressFopEdit.classList.remove("_active");

            userData[0].innerHTML = requisites;
            userData[1].innerHTML = country;
            userData[2].innerHTML = region;
            userData[3].innerHTML = city;
            userData[4].innerHTML = adress;
            userDataFop[0].innerHTML = cityFop;
            userDataFop[1].innerHTML = regionFop;
            userDataFop[2].innerHTML = cityFop;
            userDataFop[3].innerHTML = adressFop;
            userDataFop[4].innerHTML = indexFop;

            adressFopInput[0].value = requisites;
            selectHeader[0].innerHTML = country;
            selectHeader[1].innerHTML = region;
            adressFopInput[1].value = city;
            adressFopInput[2].value = adress;
            selectHeader[2].innerHTML = countryFop;
            selectHeader[3].innerHTML = regionFop;
            adressFopInput[3].value = cityFop;
            adressFopInput[4].value = adressFop;
            adressFopInput[5].value = indexFop;
          });
        });
      } else {
        userAdressFop.style.display = "none";
        userAdressFopEdit.style.display = "none";
        userAdressEditButton.addEventListener("click", () => {
          userAdress.classList.add("_hide");
          userAdressEdit.classList.add("_active");
        });

        userUsually[0].innerHTML = country;
        userUsually[1].innerHTML = region;
        userUsually[2].innerHTML = city;
        userUsually[3].innerHTML = adress;
        userUssuallyInput[0].value = city;
        userUssuallyInput[1].value = adress;
        selectHeaderUssually[0].innerHTML = country;
        selectHeaderUssually[1].innerHTML = region;

        cabinetAdressCancelButton.forEach((buttonCancel) => {
          buttonCancel.addEventListener("click", () => {
            userAdress.classList.remove("_hide");
            userAdressEdit.classList.remove("_active");
            userUsually[0].innerHTML = country;
            userUsually[1].innerHTML = region;
            userUsually[2].innerHTML = city;
            userUsually[3].innerHTML = adress;
            userUssuallyInput[0].value = city;
            userUssuallyInput[1].value = adress;
            selectHeaderUssually[0].innerHTML = country;
            selectHeaderUssually[1].innerHTML = region;
          });
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
}

export default adressInfo;
