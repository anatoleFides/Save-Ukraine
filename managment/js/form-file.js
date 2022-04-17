const inputFile = document.getElementById('txtImages')
const containerFiles = document.getElementById('file-container')

inputFile.onchange = (event) => {
  console.log(event.target.files[0])

  const listFiles = event.target.files

  for (let file of listFiles) {
    let elemContainer = document.createElement('div')
    elemContainer.innerHTML = `
      <div class="container-item">
      <p class="file-item">${file.name} <span>${Math.round(file.size/1000)}kB</span></p>
        <p class="delete-file"></p>
      </div>
    `
    containerFiles.appendChild(elemContainer)
  }

  const buttonsDeleteFile = document.querySelectorAll('.delete-file')
  const itemsContainer = document.querySelectorAll('.container-item')

  buttonsDeleteFile.forEach((item, index) => {
    item.onclick = (event) => {
      itemsContainer[index].remove()
    }
  })
}
