import mixitup from "mixitup";

function corporateMix() {
  let containerOne = document.getElementById("mixitupOne");
  if (containerOne) {
    let mixer = mixitup(containerOne);
    mixer.filter(".category-supermarket");
  }
}
corporateMix();

function deliveryMix() {
  let containerTwo = document.getElementById("mixitupTwo");
  if (containerTwo) {
    let mixer = mixitup(containerTwo);
    mixer.filter(".category-pay");
  }
}
deliveryMix();

function registration() {
  let containerThird = document.getElementById("mixitupThird");
  if (containerThird) {
    let mixer = mixitup(containerThird);
    mixer.filter(".category-individual");
  }
}
registration();

async function productsPage() {
  let containerFourth = document.getElementById("mixitupFourth");
  if (containerFourth) {
    let mixer = mixitup(containerFourth);
    mixer.filter(".category-description");
  }
}
export default productsPage;

function radioInputs() {
  let containerFive = document.getElementById("mixitupFive");
  if (containerFive) {
    let mixer = mixitup(containerFive);
    mixer.filter(".category-description");
  }
  let containerSix = document.getElementById("mixitupSix");
  if (containerSix) {
    let mixer = mixitup(containerSix);
    mixer.filter(".category-description");
  }
  let containerSeven = document.getElementById("mixitupSeven");
  if (containerSeven) {
    let mixer = mixitup(containerSeven);
    mixer.filter(".category-description");
  }
}
radioInputs();
