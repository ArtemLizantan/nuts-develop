// Функция для закрытия попапа
function closePopup() {
  const popupThank = document.querySelector(".popup__thank");
  const popupThankClose = document.querySelector(".popup__thank-close");
  const body = document.querySelector("body");

  if (popupThank) {
    function closePopupThank() {
      popupThank.classList.remove("_active");
      body.classList.remove("_lock");
      location.href = "index.html";
    }
    // Обработчик клика по крестику для закрытия попапа
    popupThankClose.addEventListener("click", closePopupThank);

    // Обработчик клика вне попапа для закрытия попапа
    window.addEventListener("click", (event) => {
      if (event.target === popupThank) {
        closePopupThank();
      }
    });
  }
}
closePopup();
