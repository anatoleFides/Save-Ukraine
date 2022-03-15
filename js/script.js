//Burger
document.getElementById("burger-menu").onclick = (event) => {
  document.getElementById("burger-menu").classList.toggle('open')
  document.getElementById("header-menu").classList.toggle('active')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}

//Swiper
// if (document.querySelector('.slider-main__body')){
// 	const swiper = new Swiper ('.swiper', {
// 		observer: true,
// 		observerParents: true,
// 		slidesPerView: 1,
// 		spaceBetween: 32,
// 		watchOverflow: true,
// 		speed: 1200,
// 		loop: true,
// 		loopAdditionalSlides: 5,
// 		preloadImages: false,
// 		parallax: true,
// 		pagination: {
// 			el: '.controls-slider-main__dots',
// 			clickable: true,
// 		},
// 		navigation:{
// 			nextEl: '.slider-main .slider-arrow_next',
// 			prevEl: '.slider-main .slider-arrow_prev',
// 		}
// 	})
// }
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
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})