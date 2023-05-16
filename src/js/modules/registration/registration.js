import axios from "axios";
async function registrarion() {
  const form = document.querySelector(".registration__form");
  if (form)
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const phoneNumber = formData.get("phoneNumber");
      const city = formData.get("city");
      const adress = formData.get("adress");
      const password = formData.get("password");
      const confirmPassword = formData.get("confirmPassword");
      const requisites = formData.get("requisites");
      const cityFop = formData.get("cityFop");
      const adressFop = formData.get("adressFop");
      const indexFop = formData.get("indexFop");

      const fopButton = document.getElementById("fop");
      if (fopButton.classList.contains("mixitup-control-active")) {
        axios
          .post("http://localhost:1337/api/auth/local/register", {
            username: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            city: city,
            adress: adress,
            requisites: requisites,
            cityFop: cityFop,
            adressFop: adressFop,
            indexFop: indexFop,
            fop: true,
          })
          .then((response) => {
            console.log("User profile", response.data.user);
            console.log("User token", response.data.jwt);
          })
          .catch((error) => {
            console.log("An error occurred:", error.response);
          });
      } else {
        axios
          .post("http://localhost:1337/api/auth/local/register", {
            username: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            city: city,
            adress: adress,
            fop: false,
          })
          .then((response) => {
            console.log("User profile", response.data.user);
            console.log("User token", response.data.jwt);
          })
          .catch((error) => {
            console.log("An error occurred:", error.response);
          });
      }
    });
}

registrarion();

// try {
//   const response = await axios.post("http://localhost:1337/api/auth/local", {
//     identifier: "Igor",
//     Password: "213p123",
//   });
//   console.log(response.data);
//   // обработка успешного ответа сервера
// } catch (error) {
//   console.log(error.response.data);
//   // обработка ошибки
// }
