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

//Check Input
const checkValue = (event, btnId) => {
  let inputValue = parseFloat(event.target.value) || 0

  if (inputValue > 0) {
    document.getElementById(btnId).disabled = false
    event.target.nextElementSibling.innerText = ''
  } else {
    document.getElementById(btnId).disabled = true
    event.target.nextElementSibling.innerText = 'Невірний формат суми'
  }

  (event.target.value === '') && (event.target.nextElementSibling.innerText = '')
}

//Insert sum
const sumListOfCard = document.getElementsByClassName('price-card')

for (let sumOfCard of sumListOfCard) {
  sumOfCard.onclick = (event) => {
    for (let sumOfCard of sumListOfCard) {
      sumOfCard.classList.remove('.sum-active')
    }

    event.target.classList.add('.sum-active')
    const sumValueofCard = event.target.innerText

    document.getElementById('price-card').setAttribute("value", sumValueofCard)
  }
}

const sumListOfRequisites = document.getElementsByClassName('pay-requisites')

for (let sumOfRequisites of sumListOfRequisites) {
  sumOfRequisites.onclick = (event) => {
    for (let sumOfRequisites of sumListOfRequisites) {
      sumOfRequisites.classList.remove('.sum-active')
    }

    event.target.classList.add('.sum-active')
    const sumValueofRequisites = event.target.innerText

    document.getElementById('pay-requisites').setAttribute("value", sumValueofRequisites)
  }
}
