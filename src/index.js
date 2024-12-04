// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";

import "./index.html";
import "./style.sass";

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  modules: [Navigation, Pagination],
  // Navigation arrows
  navigation: {
    nextEl: ".custom-swiper-button-next",
    prevEl: ".custom-swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

new Swiper(".swiperr", {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 24,
  modules: [Navigation, Pagination],

  breakpoints: {
    360: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1085: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".custom2-swiper-button-next",
    prevEl: ".custom2-swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const burger = document.querySelector(".header_burger");
const navList = document.querySelector(".navbar_list");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
  body.classList.toggle("lock");
  document.querySelector(".estimate_btn").classList.toggle("active");
  document.querySelector(".wrapper").classList.toggle("active");
});
