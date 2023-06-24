const header = document.querySelector(`.header`);

header.addEventListener("click", (e) => {
  let targetElement = e.target;

  if (targetElement.closest(`.header-nav__submenu-toggler`) && !targetElement.closest(`.header-nav__submenu`)) {
    const subMenu = targetElement.closest(`.header-nav__submenu-toggler`).querySelector(`.header-nav__submenu`);
    subMenu.classList.toggle("active");
  }
});
