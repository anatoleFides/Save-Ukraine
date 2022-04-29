const messages = [
  'Не може бути порожнім',
  'Невірний формат зображення',
  'Розміз зображення вище 1МВ',
  '',
  'Оберіть зобразення'
]

const showMessage = (elem, index) => Object.assign(elem.nextElementSibling, {
  textContent: messages[index]
})

const inputFile = document.getElementById('txtImages')

const testFieldsInput = () => {
  const inputs = document.querySelectorAll('.input-text__custom')

  for (let input of inputs) {
    if (!input.value) {
      showMessage(input, 0)

      return false
    } else showMessage(input, 3)
  }

  if (inputFile.files.length === 0) {
      showMessage(inputFile, 4)

      return false
    } else showMessage(inputFile, 3)
}

inputFile.onchange = (event) => {

  const listFiles = event.target.files

  for (let file of listFiles) {

    if (file.type.indexOf('image')) {

      showMessage(event.target, 1)

    } else {

      showMessage(event.target, 3)

      if (file.size > 1000000) {

        showMessage(event.target, 2)
      } else {

        let elemContainer = document.createElement('div')

        elemContainer.innerHTML = `
          <div class="container-item">
            <p class="file-item">${file.name} <span>${Math.round(file.size/1000)}kB</span></p>
            <p class="delete-file"></p>
          </div>
        `
        document.getElementById('file-container')
          .appendChild(elemContainer)
      }
    }
  }

  const buttonsDeleteFile = document.querySelectorAll('.delete-file')
  const itemsContainer = document.querySelectorAll('.container-item')

  buttonsDeleteFile.forEach((item, index) => {
    item.onclick = (event) => {
      itemsContainer[index].remove()
    }
  })
}
