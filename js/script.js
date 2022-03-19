//Burger
document.getElementById("burger-menu").onclick = (event) => {
  document.getElementById("burger-menu").classList.toggle('open')
  document.getElementById("main-menu").classList.toggle('active')
  document.getElementsByTagName('header')[0].classList.toggle('transperent')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}

//Scroll+fixed menu
window.onscroll = function() {
  checkMarginToTop();
}

const nav = document.getElementById("menu-stiky");

let sticky = nav.offsetTop;

function checkMarginToTop() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("menu-sticky");
  } else {
    nav.classList.remove("menu-sticky");
  }
}
//Sliders
if (document.querySelector('.slider-main-ukrain')){
  const swiperUkrain = new Swiper('.slider-main-ukrain', {
    observer: true,
    observerParents: true,
    slidesPerView: 1,
    spaceBetween: 32,
    effect: "fade",
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
      nextEl: '.slider-main-ukrain .slider-arrows-next',
      prevEl: '.slider-main-ukrain .slider-arrows-prev',
    },
  })
}

if (document.querySelector('.slider-main-building')){
  const swiperBuilding = new Swiper('.slider-main-building', {
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
    // autoplay: true,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    navigation: {
      nextEl: '.building-arrows__next',
      prevEl: '.building-arrows__prev',
    },
  })
}

const arrows = document.getElementsByClassName("arrow-submenu");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].onclick = (event) => {
    event.target.classList.toggle("init")

    let panel = event.target.nextElementSibling
    if (panel.style.maxHeight){
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}
