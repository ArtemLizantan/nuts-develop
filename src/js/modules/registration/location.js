function locationHeader() {
  const headerLog = document.querySelector(".header__login");
  const headerMobileLogin = document.querySelector(".open-menu__block");
  const jwtCookie = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("jwt="));

  const breakpoint = 992;

  if (jwtCookie) {
    // Пользователь уже зарегистрирован, отобразить кабинет
    const markup = `
          <div class="header__user-cabinet">
           <a href="user-cabinet.html" class="header__cabinet">
           <div class="_icon-user header__cabinet-text">Личный кабинет</div></a>
             </div>
        `;
    headerLog.insertAdjacentHTML("afterbegin", markup);
  } else {
    // Пользователь не зарегистрирован, отобразить форму регистрации
    const markupTwo = `<div class="header__login">
        <a href="login-user.html" class="header__log"
          ><div class="_icon-user header__login-text">Вход</div></a
        >
        <a href="registration.html" class="header__reg"
          ><div class="header__login-text">Регистрация</div></a
        >
      </div>`;
    headerLog.insertAdjacentHTML("afterbegin", markupTwo);
  }

  if (window.innerWidth < breakpoint) {
    if (jwtCookie) {
      const markup = `
      <div class="header__user-cabinet">
       <a href="user-cabinet.html" class="header__cabinet">
       <div class="_icon-user header__cabinet-text">Личный кабинет</div></a>
         </div>
    `;
      headerMobileLogin.insertAdjacentHTML("afterbegin", markup);
    } else {
      const markupTwo = ` <a class="header__mobile-log" href="#"
      ><div class="_icon-user open-menu__reg">Вход</div></a
    >
    <a class="header__mobile-log" href="registration.html"
      ><div class="open-menu__reg">Регистрация</div></a
    >`;
      headerMobileLogin.insertAdjacentHTML("afterbegin", markupTwo);
    }
  }
}
locationHeader();
