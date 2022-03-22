  //Burger
document.getElementById("burger-menu").onclick = (event) => {
  document.getElementById("burger-menu").classList.toggle('open')
  document.getElementById("main-menu").classList.toggle('active')
  document.getElementsByTagName('header')[0].classList.toggle('transperent')
  document.getElementsByTagName('body')[0].classList.toggle('hidden')
}

//Scroll+fixed menu
const nav = document.getElementById("menu-stiky");

let sticky = nav.offsetTop;

function checkMarginToTop() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("menu-sticky");
  } else {
    nav.classList.remove("menu-sticky");
  }
}

window.onscroll = function() {
  checkMarginToTop();
}

//scroll to top
const scrollElem = document.getElementById("scrollToTop")

window.onscroll = function(event) {
  window.scrollY > 200 
    ? scrollElem.style.opacity = "1" 
    : scrollElem.style.opacity = "0"
}
let timeOut

function goUp() {
  const top = Math.max(document.body.scrollTop, document.documentElement.scrollTop)

  if(top > 0) {
    window.scrollBy(0,-100)

    timeOut = setTimeout(() => goUp(), 20)

  } else clearTimeout(timeOut)
}

scrollElem.onclick = (event) => {
  event.preventDefault()

  goUp()
}
