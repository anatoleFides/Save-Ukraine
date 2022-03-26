const include = (url) => {
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
const checkValue = (prop, btnId) => {
  let inputValue = parseFloat(prop.value.trim()) || 0

console.log(inputValue, '<===inputValue')

console.log((inputValue > 0), '<===inputValue < 0')

  if (inputValue > 0) {
    Object.assign(prop.nextElementSibling, {
      innerText: ''
    })
 } else {
    Object.assign(prop.nextElementSibling, {
      innerText: 'Невірний формат суми'
    })
  }

  (prop.value === '') && (prop.nextElementSibling.innerText = '')

  Object.assign(btnId, {
    disabled: !(inputValue > 0)
  })

  // return value
}

const inputPayCard = document.getElementById('pay-card')
const inputPayRequisites = document.getElementById('pay-requisites')

const btnPayCard = document.getElementById('btn-card')
const btnPayRequisites = document.getElementById('btn-requisites')

inputPayCard.oninput = (event) => checkValue(event.target, btnPayCard)

inputPayRequisites.oninput = (event) => checkValue(event.target, btnPayRequisites)

//Insert sum
const sumListOfCard = document.getElementsByClassName('pay-card')
const sumListOfRequisites = document.getElementsByClassName('pay-requisites')

for (let sumOfCard of sumListOfCard) {
  sumOfCard.onclick = (event) => {
    insertValueCard(event.target, sumListOfCard)
  }
}

for (let sumOfRequisites of sumListOfRequisites) {
  sumOfRequisites.onclick = (event) => {
    insertValueRequisites(event.target, sumListOfRequisites)
  }
}
const toggleSumActive = (itemActive, sumList) => {
    for (let sumItem of sumList) {
    sumItem.classList.remove('sum-active')
  }

  itemActive.classList.add('sum-active')
}

const insertValueCard = (property, sumList) => {
  toggleSumActive(property, sumList)

  console.log(property.textContent)

  Object.assign(inputPayCard, {
    value: property.textContent
  })
}

const insertValueRequisites = (property, sumList) => {
  toggleSumActive(property, sumList)

  console.log(property.textContent)

  Object.assign(inputPayRequisites, {
    value: property.textContent
  })
}
