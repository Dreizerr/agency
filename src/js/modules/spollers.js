const allSpollers = document.querySelectorAll(`[data-spollers]`);

if (allSpollers.length > 0) {
  allSpollers.forEach((spollers) => {
    spollers.addEventListener("click", (e) => {
      spollersHandler(e, spollers);
    });
  });
}

function spollersHandler(e, spollers) {
  const targetElement = e.target;

  if (targetElement.closest(`.spoller__title`)) {
    const spoller = targetElement.closest(`.spoller`);
    const spollerBody = spoller.querySelector(`.spoller__body`);
    const spollerTitle = spoller.querySelector(`.spoller__title`);

    if (spoller.classList.contains("active")) {
      spoller.classList.remove("active");
      spollerBody.classList.remove("active");
      spollerTitle.classList.remove("active");

      spollerBody.style.height = "0";
    } else {
      const activeSpoller = spollers.querySelector(`.spoller.active`);
      const activeTitle = spollers.querySelector(`.spoller__title.active`);
      const activeBody = spollers.querySelector(`.spoller__body.active`);

      if (activeSpoller) {
        activeSpoller.classList.remove("active");
        activeTitle.classList.remove("active");
        activeBody.classList.remove("active");
        activeBody.style.height = "0";
      }

      spoller.classList.add("active");
      spollerBody.classList.add("active");
      targetElement.classList.add("active");

      spollerBody.style.height = spollerBody.scrollHeight + `px`;
    }
  }
}
