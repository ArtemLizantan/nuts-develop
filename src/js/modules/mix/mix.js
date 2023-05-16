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
