function include (url) {
  const script = document.createElement('script')

  script.src = url;

  document.getElementsByTagName('head')[0].appendChild(script);
}

include('../js/all-script.js')

//Tabs
const showPage = (event, numberPage) => {
  const navTabLinks = document.querySelectorAll('.nav-tabs__item')

  for (let item of navTabLinks) {
    item.classList.remove('tabs-active')
  }
  const pages = document.querySelectorAll('.tabs-donation__page')

  for (let page of pages) {
    page.classList.remove('tabs-active')
  }

  document.getElementById(numberPage).classList.add('tabs-active')
  event.target.classList.add('tabs-active')
}

//Input
const checkValue = (event, btnId) => {
  const inputs = document.querySelectorAll('.input-text__custom')

  for (let input of inputs) {
    let inputValue = parseFloat(event.target.value) || 0

    if (inputValue > 0) {
      document.getElementById(btnId).disabled = false
    } else {
      document.getElementById(btnId).disabled = true
      console.log(event.target)
      event.target.innerContent = 'Невірний формат суми'
    }
  }
}


