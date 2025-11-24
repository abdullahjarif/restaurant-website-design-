let menu = document.querySelector("#menu-bars");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

let section = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll("header .navbar a");

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search_form").classList.toggle("active");
};
document.querySelector("#close").onclick = () => {
  document.querySelector("#search_form").classList.remove("active");
};

var swiper = new Swiper(".home_slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review_slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
