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

//Show submenu mobile version
const arrows = document.getElementsByClassName("arrow-submenu");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].onclick = (event) => {
    event.target.classList.toggle("init")

    let panel = event.target.nextElementSibling
    if (panel.style.maxHeight){
      panel.style.maxHeight = null
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`
    } 
  }
}

//scroll to top
const scrollElem = document.getElementById("scrollToTop")

window.onscroll = function(event) {
  if (window.scrollY > 200) {
    scrollElem.style.opacity = "1"
  } else {
    scrollElem.style.opacity = "0";
   }
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
