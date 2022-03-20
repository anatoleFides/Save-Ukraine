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

//Show submenu mobile version
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