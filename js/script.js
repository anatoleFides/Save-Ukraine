//Burger
document.getElementById('burger-menu').onclick = (event) => {
  document.getElementById('burger-menu').classList.toggle('open')
  document.getElementById('main-menu').classList.toggle('active')
  document.getElementsByTagName('header')[0].classList.toggle('transperent')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
  document.getElementById('content-header').classList.toggle('active-contacts')
  document.getElementsByClassName('content-header__contacts')[0].classList.toggle('active-contacts')
}

//Scroll+fixed menu
const nav = document.getElementById('menu-stiky')

let sticky = nav.offsetTop;

function checkMarginToTop () {
  window.pageYOffset > sticky
    ? nav.classList.add('menu-sticky')
    : nav.classList.remove('menu-sticky')
}

//Scroll to top
const scrollElem = document.getElementById('scrollToTop')

window.onscroll = (event) => {

  checkMarginToTop() //init stiky menu

  window.scrollY > 200 
    ? scrollElem.style.opacity = 1
    : scrollElem.style.opacity = 0
}

const goUp = () => {
  const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop)

  let timeOut

  if(top > 0) {
    window.scrollBy(0, -100)

    timeOut = setTimeout(() => goUp(), 20)

  } else clearTimeout(timeOut)
}

scrollElem.onclick = (event) => {

  event.preventDefault()

  goUp()
} //end scroll to top

//Sliders
//Main page slider Ukraine
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
      el: '.swiper-pagination'
    },
    navigation: {
      nextEl: '.slider-main-ukrain .slider-arrows-next',
      prevEl: '.slider-main-ukrain .slider-arrows-prev',
    },
  })
}

//Main page slider building
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
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    navigation: {
      nextEl: '.building-arrows__next',
      prevEl: '.building-arrows__prev',
    },
  })
}
//Report page slider big-small
if (document.querySelector('.swiper-report__small')) {
  const swiperReportSmall = new Swiper(".swiper-report__small", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 2,
    breakpoints: {
      450: {
          slidesPerView: 2,
      },
      768: {
          slidesPerView: 3,
      },
      992: {
          slidesPerView: 4,
      },
    },
    freeMode: true,
    watchSlidesProgress: true,
      })
  const swiperReportBig = new Swiper('.swiper-report__big', {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-arrow__next",
      prevEl: ".swiper-arrow__prev",
    },
    thumbs: {
      swiper: swiperReportSmall,
    },
  })
}
//Page about-us slider documents
if (document.querySelector('.statutory-documents__slider')) {
  let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
} 

  if (window.innerWidth < 650 && isMobile.any()) {
    const swiper = new Swiper('.statutory-documents__slider', {
      ggrabCursor: true,
      effect: "creative",
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-135%", 0, -500],
        },
        next: {
          shadow: true,
          translate: ["135%", 0, -500],
        },
      },
      loop: true,
    })
  }
} //End Page about-us slider documents

//Page donation change Tab
const navTabLinks = document.querySelectorAll('.nav-tabs__item')

for (let navTabLink of navTabLinks) {
  navTabLink.onclick = (event) => {
    removeAddTabLinkActive(event.target)

    showTabPage(event.target)
  }
}

const removeAddTabLinkActive = (propActive) => {
  for (let navTabLink of navTabLinks) {
    navTabLink.classList.remove('tabs-active')
  }

  propActive.classList.add('tabs-active')
}

const showTabPage = (propActive) => {
  const pages = document.querySelectorAll('.tabs-donation__page')

  for (let page of pages) {
    page.classList.remove('tabs-active')
  }

  document.getElementById(`${propActive.dataset.tab_id}`).classList.add('tabs-active')
}
//End change Tab

//Page donation check Input
const checkValue = (inputElem, value, btnId) => {
  let inputValue = parseFloat(value.trim()) || 0

console.log(inputValue, '<===inputValue') //delete

  if (inputValue > 0) {
    Object.assign(inputElem.nextElementSibling, {
      innerText: ''
    })
 } else {
    Object.assign(inputElem.nextElementSibling, {
      innerText: 'Невірний формат суми'
    })
    // inputElem.style = 'border: 1px solid #EAEAEA'
  }

  (value === '') && (inputElem.nextElementSibling.innerText = '')

  Object.assign(document.getElementById(`${btnId}`), {
    disabled: !(inputValue > 0)
  })
} //End check input

const inputsDonate = document.getElementsByClassName('input-text__donate')

for (let inputDonate of inputsDonate) {
  inputDonate.oninput = (event) => {
    checkValue(event.target, event.target.value, inputDonate.dataset.btn_id)

    removeClassActive(listSumDonate)
  }
}

//Page donation Insert sum
const listSumDonate = document.getElementsByClassName('price-donation__item')

for (let itemSumDonate of listSumDonate) {
  itemSumDonate.onclick = (event) => {
    removeClassActive(listSumDonate)

    addClassActive(event.target)

    insertSum(event.target)
  }
}
const insertSum = (property) => {

  console.log(property.dataset.sum, '<===property.dataset.sum Card') //delete

  const inputDonate = document.getElementById(`${property.dataset.input_donate}`)

  Object.assign(inputDonate, {
    value: property.dataset.sum
    // style: 'border: 1px solid #1BBAE1'
  })

  checkValue(inputDonate, property.dataset.sum, inputDonate.dataset.btn_id)
}

const removeClassActive = (listSumDonate) => {
  for (let sumItem of listSumDonate) {
    sumItem.classList.remove('sum-active')
  }
}

const addClassActive = (property) => property.classList.add('sum-active')
//End page donation Insert value

//Check form volunteer
const nameRule = /^[A-Za-z]{2,10}$/
const telephoneRule = /^\(?([0]{1}[3-9]{2})\)?[- ]?([0-9]{3})[- ]?([0-9]{2})[- ]?([0-9]{2})$/

const inputName = document.getElementById('input-name')
const inputCity = document.getElementById('input-city')
const inputTel = document.getElementById('input-tel')
const btnBecomeVolunteer = document.getElementById('volunter-btn')

const validateName = (value) => {
  const result = Boolean(value.match(nameRule))

  inputCity.disabled = !result
}

const validateCity = (value) => {
  const result = Boolean(value.match(nameRule))

  inputTel.disabled = !result
}

const validateTel = (value) => {
  const result = Boolean(value.match(telephoneRule))

  btnBecomeVolunteer.disabled = !result
}

const funcsValidate = [validateName, validateCity, validateTel]

// ; [inputName, inputCity, inputTel]
//   .map((item, index) => Object.assign(item, {
//     oninput: (event) => funcsValidate[index](event.target.value)
//   }))
  //End Check form volunteer

//Init map
function initMap () {
  let posLatLng = {lat: 49.2260640, lng:28.4059510}
  let myElem = document.getElementById('map')
  let myOptions = {
    zoom: 16,
    center: posLatLng,
    styles: [
      {"stylers": [
        { "hue": "#007fff" },
        { "saturation": 89 }]
      },
      { "featureType": "water",
        "stylers": [
          { "color": "#ffffff" }]
      },
      { "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
          { "visibility": "off" }]
      }
    ]
  }

  const myMap = new google.maps.Map(myElem, myOptions)

  const marker = new google.maps.Marker({
    position: posLatLng,
    map: myMap,
    title:'БФ "Врятувати Україну"',
    icon: 'image/Marker.svg',
    animation: google.maps.Animation.BOUNCE
  })
} //End Init map
