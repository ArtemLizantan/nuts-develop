import axios from "axios";
async function registrarion() {
  //   axios
  //     .post("http://localhost:1337/api/auth/local/register", {
  //       username: "Kapman3",
  //       email: "test3@test.com",
  //       password: "213p123",
  //     })
  //     .then((response) => {
  //       console.log("User profile", response.data.user);
  //       console.log("User token", response.data.jwt);
  //     })
  //     .catch((error) => {
  //       console.log("An error occurred:", error.response);
  //     });

  try {
    const response = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: "Kapman3",
      password: "213p123",
    });
    console.log(response.data);
    // обработка успешного ответа сервера
  } catch (error) {
    console.log(error.response.data);
    // обработка ошибки
  }
}

export default registrarion;