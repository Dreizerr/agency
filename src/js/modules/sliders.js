import Swiper, { Navigation } from "swiper";

if (document.querySelector(`.cases-swiper`)) {
  const casesSwiper = new Swiper(".cases-swiper", {
    slidesPerView: 3,

    modules: [Navigation],

    spaceBetween: 35,

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      1301: {
        slidesPerView: 3,
      },
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  console.log(casesSwiper);
}
