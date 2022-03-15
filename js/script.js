//Burger
document.getElementById("burger-menu").onclick = (event) => {
  document.getElementById("burger-menu").classList.toggle('open')
  document.getElementById("header-menu").classList.toggle('active')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}

const swiper = new Swiper('.swiper', {
  observer: true,
  observerParents: true,
  slidesPerView: 1,
  spaceBetween: 32,
  watchOverflow: true,
  speed: 1200,
  loop: true,
  loopAdditionalSlides: 5,
  preloadImages: false,
  parallax: true,
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper .slider-arrows-next',
    prevEl: '.swiper .slider-arrows-prev',
  },
})