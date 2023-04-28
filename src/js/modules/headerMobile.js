function headerMobile() {
    let lastScroll = 0;
    const defaultOfsset = 200;
    const header = document.querySelector(".header");
  
    const scrollPosition = () =>
      window.pageYOffset || document.documentElement.scrollTop;
    const containsHide = () => header.classList.contains("hide");
  
    window.addEventListener("scroll", () => {
      if (
        scrollPosition() > lastScroll &&
        !containsHide() &&
        scrollPosition() > defaultOfsset
      ) {
        // scrolld down
        header.classList.add("hide");
        header.classList.add("_active");
      } else if (scrollPosition() < lastScroll && containsHide()) {
        // scroll up
        header.classList.remove("hide");
      }else if(scrollPosition() < defaultOfsset){
          header.classList.remove("_active");
      }
  
  
  
      lastScroll = scrollPosition();
    });
  }
  
  headerMobile();
  