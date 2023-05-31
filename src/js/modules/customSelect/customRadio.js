function customRadio() {
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  const labels = document.querySelectorAll(".radio-button label");

  radioButtons.forEach((button) => {
    button.addEventListener("change", () => {
      labels.forEach((label) => {
        label.classList.remove("active");
        label.setAttribute("aria-checked", "false");
      });

      if (button.checked) {
        const correspondingLabel = document.querySelector(
          `label[for="${button.id}"]`
        );
        correspondingLabel.classList.add("active");
        correspondingLabel.setAttribute("aria-checked", "true");
      }
    });
  });
}
customRadio();
