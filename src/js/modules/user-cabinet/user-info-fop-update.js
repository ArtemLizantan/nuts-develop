import axios from "axios";

async function userInfoFopUpdate() {
  const form = document.getElementById("cabinetEdit");
  let jwt = document.cookie;
  jwt = jwt.split("").splice(4).join("");

  const sucsess = document.createElement("div");
  sucsess.innerHTML = "Данные успешно сохранены!";
  sucsess.style.color = "green";
  sucsess.style.marginTop = "15px";

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);
      const name = formData.get("name");
      const email = formData.get("email");
      const phoneNumber = formData.get("phoneNumber");

      try {
        const response = await axios.get("http://localhost:1337/api/users/me", {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        const userId = response.data.id;
        const updatedUserData = {
          username: name,
          email: email,
          phoneNumber: phoneNumber,
        };

        await axios.put(
          `http://localhost:1337/api/users/${userId}`,
          updatedUserData
        );

        form.insertAdjacentElement("beforeend", sucsess);
        setTimeout(() => {
          location.href = "user-cabinet.html";
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    });
  }
}

export default userInfoFopUpdate;
