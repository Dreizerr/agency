const burger = document.querySelector(`.burger-button`);

if (burger) {
  const burgerMenu = document.querySelector(`.burger-menu`);
  burger.addEventListener("click", (e) => {
    const targetElement = e.target;
    const burgerButton = targetElement.closest(`.burger-button`);
    if (burgerButton.classList.contains("active")) {
      burgerButton.classList.remove("active");
      burgerMenu.classList.remove("active");
      document.body.style.overflow = "visible";
    } else {
      burgerButton.classList.add("active");
      burgerMenu.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  });
}
