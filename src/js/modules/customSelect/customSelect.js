function customSelect() {
  const selectHeaders = document.querySelectorAll(".select-header");
  const customSelects = document.querySelectorAll(".custom-select");
  const filterRemoveButtons = document.querySelector(".filter__remove-filter")
  
  customSelects.forEach((customSelect) => {
    const selectList = customSelect.querySelector(".select-list");
    const selectHeader = customSelect.querySelector(".select-header");
    
    selectHeader.addEventListener("click", () => {
      selectList.classList.toggle("active");
      customSelect.classList.toggle("active")
    });
  
    // Close the custom select list when clicking outside of it
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".custom-select")) {
        selectList.classList.remove("active");
        customSelect.classList.remove("active")
      }
    });
    const selectListItems = selectList.querySelectorAll("li");
    selectListItems.forEach((item) => {
      item.addEventListener("click", () => {
        selectHeader.textContent = item.textContent;
        selectList.classList.remove("active");
        customSelect.classList.remove("active");
      
      });
    });
  });
}
customSelect();
