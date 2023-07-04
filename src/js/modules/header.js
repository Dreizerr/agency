import * as utils from "./utils.js";

const header = document.querySelector(`.header`);

if (header) {
  header.addEventListener("click", (e) => {
    let targetElement = e.target;

    if (targetElement.closest(`.header-nav__submenu-toggler`) && !targetElement.closest(`.header-nav__submenu`)) {
      const subMenu = targetElement.closest(`.header-nav__submenu-toggler`).querySelector(`.header-nav__submenu`);
      subMenu.classList.toggle("active");
    }
  });
  const allNavSubMenu = header.querySelectorAll(`.header-nav__submenu`);
  allNavSubMenu.forEach((subMenu) => {
    subMenu.addEventListener("mouseleave", (e) => {
      e.target.classList.remove("active");
    });
  });

  if (window.innerWidth < 1200) {
    document.addEventListener("scroll", (e) => {
      utils.headerVisibleToggler(header);
    });
  }
}
