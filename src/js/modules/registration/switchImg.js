function switchImg() {
  const fileInput = document.getElementById("file");
  const imageElement = document.querySelector(".registration__upload-switch");

  if (fileInput) {
    fileInput.addEventListener("change", (event) => {
      const selectedFile = event.target.files[0];

      if (selectedFile) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageUrl = e.target.result;
          imageElement.src = imageUrl;
        };

        reader.readAsDataURL(selectedFile);
      }
    });
  }
}

switchImg();
