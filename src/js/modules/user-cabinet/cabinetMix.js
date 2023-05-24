import mixitup from "mixitup";
async function userCabinetInfo() {
  let containerFive = document.getElementById("mixitupFive");
  if (containerFive) {
    let mixer = mixitup(containerFive, {
      animation: {
        effects: "fade scale(0.5)",
        duration: 500,
        easing: "ease",
      },
    });
    mixer.filter(".category-order");
  }
}
export default userCabinetInfo;
