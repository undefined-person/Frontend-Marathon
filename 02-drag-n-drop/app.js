const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

const dragStart = (e) => {
  e.target.classList.add('hold')
  setTimeout(() => {
    e.target.classList.add('hidden')
  })
}

const dragEnd = (e) => {
  e.target.className = 'item'
}

const dragOver = (e) => {
  e.preventDefault()
}

const dragEnter = (e) => {
  e.target.classList.add('hovered')
}

const dragLeave = (e) => {
  e.target.classList.remove('hovered')
}

const dragDrop = (e) => {
  e.target.classList.remove('hovered')
  e.target.append(item)
}

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

placeholders.forEach((placeholder) => {
  placeholder.addEventListener('dragover', dragOver)
  placeholder.addEventListener('dragenter', dragEnter)
  placeholder.addEventListener('dragleave', dragLeave)
  placeholder.addEventListener('drop', dragDrop)
})
