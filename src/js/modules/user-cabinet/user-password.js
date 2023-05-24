import JustValidate from "just-validate";
import axios from "axios";

// validateUserInfo();

async function adressInfo() {
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const adressWrapper = document.querySelector(".cabinet__adress");

  if (adressWrapper) {
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

      const contactMarkup = () => {
        return `
          `;

        adressWrapper.innerHTML = contactMarkup();
        // adressValidation();
      };
    } catch (error) {
      console.error(error);
    }
  }
}

export default adressInfo;

// function adressValidation() {
//   const formCabinetAdress = document.querySelector(".cabinet__form-adress");

//   if (formCabinetAdress) {
//     const validate = new JustValidate(formCabinetAdress, {
//       validateBeforeSubmitting: true,
//       lockForm: true,
//       successFieldCssClass: ["valid"],
//     });

//     validate.addField(".form-email", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваш email",
//       },
//       {
//         rule: "email",
//       },
//     ]);
//     validate.addField(".form-name", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваше имя",
//       },
//     ]);
//     validate.addField(".form-tel", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваш номер телефона",
//       },
//       {
//         rule: "number",
//       },
//     ]);
//     validate.addField(".form-requisites", [
//       {
//         rule: "required",
//         errorMessage: "Пожалуйста,введите Ваши реквезиты",
//       },
//     ]);
//   }
// }
