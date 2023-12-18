// Initialize Swiper
var mySwiper1 = new Swiper(".mySwiper1", {
  effect: "cards",
  grabCursor: true, // 屬標覆蓋Swiper時變成手掌形狀，拖動時變成抓手形狀。
  loop: true,
  allowTouchMove: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
  },
});

var mySwiper2 = new Swiper(".mySwiper2", {
  grabCursor: true,
  loop: true,
  allowTouchMove: true,
  currentClass: "swiper-pagination-current",
  controller: {
    control: mySwiper1,
  },
});

mySwiper1.controller.control = mySwiper2;
