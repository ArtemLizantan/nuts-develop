import axios from "axios";
async function registrarion() {
    // axios
    //   .post("http://localhost:1337/api/auth/local/register", {
    //     username: "Igor",
    //     email: "igor@test.com",
    //     password: "213p123",
    //   })
    //   .then((response) => {
    //     console.log("User profile", response.data.user);
    //     console.log("User token", response.data.jwt);
    //   })
    //   .catch((error) => {
    //     console.log("An error occurred:", error.response);
    //   });

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


  const form = document.querySelector(".registration__form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    console.log(formData);
  });
}

export default registrarion;