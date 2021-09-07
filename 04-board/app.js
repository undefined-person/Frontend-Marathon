const board = document.querySelector('#board')
const SQUARES_NUMBER = 300
const colors = [
  '#EAC435',
  '#FB4D3D',
  '#662C91',
  '#17A398',
  '#F71735',
  '#FF0022',
]

const getRandomColor = (colors) => {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

const setColor = (square) => {
  const color = getRandomColor(colors)
  square.style.backgroundColor = color
  square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const removeColor = (square) => {
  square.style.backgroundColor = '#1d1d1d'
  square.style.boxShadow = `0 0 2px #000`
}

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}
