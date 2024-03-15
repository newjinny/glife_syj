// Initialize Swiper ,mainSwiper

var swiper = new Swiper(".mainSwiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});

//Initialize Swiper .monthSwiper

var swiper = new Swiper(".monthSwiper", {
  slidesPerView: 5,
  spaceBetween: 80,
  centeredSlides: true,
  loop: true,
  effect: "slide",
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
